import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table, notification } from 'antd'
import {CheckOutlined,CloseOutlined} from '@ant-design/icons'

export default function Audit() {
  const [dataSource, setDataSource] = useState([])
  const { roleId, regions, username } = JSON.parse(localStorage.getItem("token"))


  useEffect(() => {
    const roleObj = {
      "1": "a",
      "2": "b",
      "3": "c",
      "4": "d",
    }
    axios.get('/news?auditState=1&_expand=category').then(res => {
      const list = res.data

      setDataSource(roleObj[roleId] === "a" ? list : [
        ...list.filter(item => item.author === username),
        ...list.filter(item => roleObj[item.roleId] === "c" || roleObj[item.roleId] === "d"),

      ])
    })
  }, [roleId, regions, username])

  const columns = [
    {
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
        return <div style={{ color: 'purple' }}>{category.title}</div>
      }
    }, {
      title: "操作",
      render: (item) => {
        return <div>
          <Button shape='circle' type='primary' onClick={() => handleAudit(item, 2, 1)} icon={<CheckOutlined />}></Button>
          <Button shape='circle' danger 
          onClick={() => handleAudit(item, 3, 0)} 
          icon={<CloseOutlined />}
          style={{marginLeft:"10px"}}></Button>
        </div>
      }
    }
  ];

  const handleAudit = (item, auditState, publishState) => {
    setDataSource(dataSource.filter(data => data.id !== item.id))

    axios.patch(`/news/${item.id}`, {
      auditState,
      publishState
    }).then(res => {
      notification.info({
        message: "通知",
        description: `已审核完成，您可以到【审核管理中审核列表】中查看`,
        placement: 'bottomRight'
      })
    })

  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 6 }} rowKey={item => item.id} />
    </div>
  )
}
