import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Table, Button, Modal, Switch } from 'antd'
import { DeleteOutlined, FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import UserFrom from '../../../components/user-manage/UserFrom'

const { confirm } = Modal

export default function UserList() {
  const [dataSource, setDataSource] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isUpdateVisible, setIsUpdateVisible] = useState(false)
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false)
  const [roleList, setRoleList] = useState([])
  const [regionList, setRegionList] = useState([])
  const [current, setCurrent] = useState(null)
  const addFrom = useRef(null)
  const updateForm = useRef(null)


  const { roleId, regions, username } = JSON.parse(localStorage.getItem("token"))
  useEffect(() => {
    const roleObj = {
      "1": "a",
      "2": "b",
      "3": "c",
      "4": "d",
    }
    axios.get("/users?_expand=role").then(res => {
      const list = res.data

      setDataSource(roleObj[roleId] === "a" ? list : [
        ...list.filter(item => item.username === username),
        ...list.filter(item => roleObj[item.roleId] === "c" || roleObj[item.roleId] === "d"),

      ])
    })
  }, [roleId, regions, username])

  useEffect(() => {
    axios.get("/regions").then(res => {
      const list = res.data
      setRegionList(list)

    })
  }, [])

  useEffect(() => {
    axios.get("/roles").then(res => {
      const list = res.data
      setRoleList(list)
    })
  }, [])

  const columns = [
    {
      title: "管辖权职",
      dataIndex: 'region',
      filters: [
        ...regionList.map(item => ({
          text: item.value,
          value: item.value,
        })),
        {
          text: "全球总部",
          value: "全球总部"
        },
      ],
      onFilter: (value, item) => item.regions === value,
      render: (region) => {
        return <b>{region === "" ? '全球总部' : region}</b>
      }
    }, {
      title: "用户名称",
      dataIndex: 'username',
      render: (username) => {
        return username
      }
    }, {
      title: "角色属性",
      dataIndex: 'role',
      render: (role) => {
        return <b style={{ color: "#de0d02" }}>{role?.roleName}</b>
      }
    }, {
      title: "用户账号",
      dataIndex: 'name',
      render: (name) => {
        return <b>{name}</b>
      }
    }, {
      title: "用户状态",
      dataIndex: 'roleState',
      render: (roleState, item) => {
        return <Switch checked={roleState} disabled={item.default} onClick={() => handleChange(item)} style={{ marginLeft: "2px" }}></Switch>
      }
    }, {
      title: "用户操作权限",
      render: (item) => {
        return <div>
          <Button type="primary" shape="circle" icon={<DeleteOutlined />}
            onClick={() => confirms(item)}
            disabled={item.default}
            style={{ backgroundColor: "#bec8c8", borderColor: "#bec8c8", color: "red", marginLeft: "2px" }} />

          <Button type="primary" shape="circle" icon={<FormOutlined />} disabled={item.default}
            onClick={() => handleUpdate(item)} style={{ marginLeft: "10px" }}
          />
        </div>
      }
    }
  ];


  const handleChange = (item) => {
    item.roleState = !item.roleState
    setDataSource([...dataSource])
    axios.patch(`/users/${item.id}`, {
      roleState: item.roleState
    })
  }

  const confirms = (item) => {
    confirm({
      title: '您确定要删除该用户吗',
      icon: <ExclamationCircleOutlined />,
      content: '您已经考虑好要删除该用户吗？删除不可逆请三思而行。',
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
    axios.delete(`/users/${item.id}`)

  }

  const addFromOK = () => {
    addFrom.current.validateFields().then(value => {

      setIsOpen(false)
      addFrom.current.resetFields()
      axios.post(`/users`, {
        ...value,
        "roleState": true,
        "default": false,
        "regions": value.region,
      }).then(res => {
        setDataSource([...dataSource, {
          ...res.data,
          role: roleList.filter(item => item.id === value.roleId)[0]
        }])
      })
    }).catch(err => { console.log(err) })
  }

  // 解决难点 下面的current无法在第一次事件拿到 原因是react的热更新即不会更新所有数据 采用async异步编程让set先更新在拿到current
  async function update(item) {
    setIsUpdateVisible(true)
  }

  async function handleUpdate(item) {
    if (item.roleId === 1) {
      setIsUpdateDisabled(true)
    } else {
      setIsUpdateDisabled(false)
    }
    await update()
    updateForm.current.setFieldsValue(item)
    setCurrent(item)
  }



  const updateFormOK = () => {
    updateForm.current.validateFields().then(value => {
      setIsUpdateVisible(false)
      setDataSource(dataSource.map(item => {
        if (item.id === current.id) {
          return {
            ...item,
            ...value,
            role: roleList.filter(data => data.id === value.roleId)[0]
          }
        }
        return item
      }))
      setIsUpdateDisabled(!isUpdateDisabled)

      axios.patch(`/users/${current.id}`,
        value
      )
    })
  }


  return (
    <div>
      <Button type='primary' onClick={() => { setIsOpen(true) }} style={{ marginBottom: 20, borderRadius: "5px" }}>添加用户</Button>
      <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 6 }} rowKey={item => item.id} />

      <Modal
        open={isOpen}
        title="添加新用户"
        okText="确定创建"
        cancelText="取消创建"
        onCancel={() => {
          setIsOpen(false)
        }}
        onOk={() => addFromOK()}
      >
        <UserFrom regionList={regionList} roleList={roleList} ref={addFrom} />
      </Modal>

      <Modal
        open={isUpdateVisible}
        title="更新用户"
        okText="更新"
        cancelText="取消"
        onCancel={() => {
          setIsUpdateVisible(false)
          setIsUpdateDisabled(!isUpdateDisabled)

        }}
        onOk={() => updateFormOK()}
      >
        <UserFrom regionList={regionList} roleList={roleList} ref={updateForm} isUpdateDisabled={isUpdateDisabled} />
      </Modal>
    </div>
  )
}
