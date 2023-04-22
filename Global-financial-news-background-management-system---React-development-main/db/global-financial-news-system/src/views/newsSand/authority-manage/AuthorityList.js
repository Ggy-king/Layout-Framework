import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Tag, Button, Modal, Popover, Switch } from 'antd'
import { DeleteOutlined, FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal

export default function RoleList() {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    axios.get("/rights?_embed=children").then(res => {
      const list = res.data
      list.forEach(item => {
        if (item.children.length === 0) {
          item.children = ''
        }
      })
      setDataSource(list)
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
      title: "高级权限名称",
      dataIndex: 'title'
    }, {
      title: "高级权限路径",
      dataIndex: 'key',
      render: (key) => {
        return <Tag style={{color:'purple'}}>{key}</Tag>
      }
    }, {
      title: "权限控制",
      render: (item) => {
        return <div>
          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => confirms(item)} style={{ marginLeft: "2px" }}/>
          <Popover content={<div style={{ textAlign: 'center' }}>
            <Switch checked={item.pagepermisson} onChange={() => switchMethod(item)}></Switch>
          </div>} title="权限开启与关闭" trigger={item.pagepermisson === undefined ? '' : 'click'}>
            <Button type="primary" shape="circle" icon={<FormOutlined />} disabled={item.pagepermisson === undefined} style={{ marginLeft: "10px" }} />
          </Popover>
        </div>
      }
    }
  ];

  const switchMethod = (item) => {
    item.pagepermisson = item.pagepermisson === 1 ? 0 : 1
    setDataSource([...dataSource])  //强行刷新数据

    if (item.grade === 1) {
      axios.patch(`/rights/${item.id}`, {
        pagepermisson: item.pagepermisson
      })
    } else {
      axios.patch(`/children/${item.id}`, {
        pagepermisson: item.pagepermisson
      })
    }
  }

  const confirms = (item) => {
    confirm({
      title: '您确定要删除该权限吗',
      icon: <ExclamationCircleOutlined />,
      content: '删除该权限需要承担一定风险，删除权限后某些功能可能受到影响，如不确定风险性，请联系广源管理员！',
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
    if (item.grade === 1) {
      setDataSource(dataSource.filter(data => data.id !== item.id))
      axios.delete(`/rights/${item.id}`)
    } else {
      let list = dataSource.filter(data => data.id === item.rightId)

      list[0].children = list[0].children.filter(data => data.id !== item.id)

      setDataSource([...dataSource])
      axios.delete(`/children/${item.id}`)

    }


  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 6 }} rowKey={item => item.id} />
    </div>
  )
}
