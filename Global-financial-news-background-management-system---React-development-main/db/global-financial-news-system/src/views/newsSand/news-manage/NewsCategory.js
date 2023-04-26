import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Table, Button, Modal, Form, Input } from 'antd'
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
const EditableContext = React.createContext(null);

const { confirm } = Modal

export default function NewsCategory() {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    axios.get("/categories").then(res => {
      setDataSource(res.data)
    })
  }, [])

  const columns = [
    {
      title: "ID",
      dataIndex: 'id',
      render: (id) => {
        return <b>{id}</b>
      }
    }, {
      title: "栏目名称",
      dataIndex: 'title',
      onCell: (record) => ({
        record,
        editable: true,
        dataIndex: 'title',
        title: '栏目名称',
        handleSave: handleSave,
      }),
    }, {
      title: "操作",
      render: (item) => {
        return <div>
          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />}
            onClick={() => confirms(item)} style={{ marginLeft: "2px" }} />
        </div>
      }
    }
  ];

  const handleSave = (record) => {
    setDataSource(dataSource.map(item => {
      if (item.id === record.id) {
        return {
          id: item.id,
          title: record.title,
          value: record.title
        }
      }
      return item
    }))

    axios.patch(`/categories/${record.id}`, {
      title: record.title,
      value: record.title
    })
  }

  const confirms = (item) => {
    confirm({
      title: '您确定要删除该栏目分类吗',
      icon: <ExclamationCircleOutlined />,
      content: '请您三思而行',
      cancelText: "取消",
      okText: "确定",
      onOk() {
        return new Promise((resolve, reject) => {
          deleteMethod(item)
          setTimeout(Math.random() > 0.5 ? resolve : reject, 500);
        }).catch((err) => console.log(err));
      },
      onCancel() { },
    });
  }

  const deleteMethod = (item) => {
    // 这里的代码应该前后端同步

    setDataSource(dataSource.filter(data => data.id !== item.id))
    axios.delete(`/categories/${item.id}`)
  }
  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);
    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };
    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({
          ...record,
          ...values,
        });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };
    let childNode = children;
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }
    return <td {...restProps}>{childNode}</td>;
  };

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 6 }}
        rowKey={item => item.id}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          }
        }} />
    </div>
  )
}
