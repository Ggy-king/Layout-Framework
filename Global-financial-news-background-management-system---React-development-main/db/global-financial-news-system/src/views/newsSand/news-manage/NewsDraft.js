import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, Modal,notification } from 'antd'
import { DeleteOutlined, FormOutlined, ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons'
const { confirm } = Modal

export default function NewsDraft(props) {
  const [dataSource, setDataSource] = useState([])

  const { username } = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    axios.get(`/news?author=${username}&auditState=0&_expand=category`).then(res => {
      const list = res.data
      setDataSource(list)
    })
  }, [username])

  const columns = [
    {
      title: "ID",
      dataIndex: 'id',
      render: (id) => {
        return <b>{id}</b>
      }
    }, {
      title: "新闻标题",
      dataIndex: 'title',
      render: (title, item) => {
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>
      }
    }, {
      title: "作者",
      dataIndex: 'author'
    }, {
      title: "新闻分类",
      dataIndex: 'category',
      render: (category) => {
        return category.title
      }
    }, {
      title: "操作",
      render: (item) => {
        return <div>
          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => confirms(item)} style={{ marginLeft: "2px" }} />
          <Button type="primary" shape="circle" icon={<FormOutlined />} onClick={() => {
            props.history.push(`/news-manage/update/${item.id}`)
          }} style={{ marginLeft: "10px" }} />

          <Button type="primary" shape="circle" icon={<UploadOutlined />} style={{ marginLeft: "10px" }}
            onClick={() => handleCheck(item.id)} />
        </div>
      }
    }
  ];

  const handleCheck = (id) => {
    axios.patch(`/news/${id}`, {
      auditState: 1
    }).then(res => {
      props.history.push('/audit-manage/list')

      notification.info({
        message: "通知",
        description: `您可以到审核列表中查看您已经提交的新闻`,
        placement: 'bottomRight'
      })
    })
  }

  const confirms = (item) => {
    confirm({
      title: '您确定要删除该新闻吗',
      icon: <ExclamationCircleOutlined />,
      content: '注意删除操作不可逆，请您考虑好之后再进行操作',
      cancelText: "我后悔了",
      okText: "确定删除",
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
    axios.delete(`/news/${item.id}`)


  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 6 }} rowKey={item => item.id} />
    </div>
  )
}
