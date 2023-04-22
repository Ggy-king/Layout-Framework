import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  DeleteOutlined,
  ControlOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'


import { Table, Button, Modal, Tree } from 'antd'

const { confirm } = Modal

export default function RoleList() {
  const [dataSource, setDataSource] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rightList, setRightList] = useState([])
  const [currentRights, setCurrentRights] = useState([])
  const [currentId, setCurrentId] = useState(0)

  const columns = [
    {
      title: "ID",
      dataIndex: 'id',
      render: (id) => {
        return <b>{id}</b>
      }
    }, {
      title: "角色名称",
      dataIndex: 'roleName',
    }, {
      title: "角色权限控制",
      render: (item) => {
        return <div>
          <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => confirms(item)} 
          disabled={item.default} style={{ marginLeft: "2px" }}/>
          <Button type="primary" shape="circle" icon={<ControlOutlined />} onClick={() => {
            setIsModalOpen(true)
            setCurrentRights(item.rights)
            setCurrentId(item.id)
          }}
          style={{ marginLeft: "10px" }} />
        </div>
      }
    },
  ]

  const confirms = (item) => {
    confirm({
      title: '您确定要删除该角色吗',
      icon: <ExclamationCircleOutlined />,
      content: '删除角色需要三思而后行，请确保您已经做好删除的准备了！',
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
    setDataSource(dataSource.filter(data => data.id !== item.id))
    axios.delete(`/roles/${item.id}`)

  }

  useEffect(() => {
    axios.get('/roles').then(res => {
      setDataSource(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('/rights?_embed=children').then(res => {
      setRightList(res.data)
    })
  }, [])


  const handleOk = () => {
    setIsModalOpen(false);
    setDataSource(dataSource.map(item => {
      if (item.id === currentId) {
        return {
          ...item,
          rights: currentRights
        }
      }
      return item
    }))

    axios.patch(`/roles/${currentId}`, {
      rights: currentRights
    })
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const onCheck = (checkKeys) => {
    setCurrentRights(checkKeys)
  }
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey={(item) => item.id}
        pagination={{ pageSize: 7 }} />
      <Modal title="角色权限更改" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tree
          checkable
          checkedKeys={currentRights}
          onCheck={onCheck}
          checkStrictly={true}
          treeData={rightList}
        />
      </Modal>
    </div>
  )
}
