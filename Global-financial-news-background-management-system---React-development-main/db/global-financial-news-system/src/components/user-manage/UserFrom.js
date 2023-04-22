import React, { forwardRef, useState, useEffect } from 'react'
import { Form, Select, Input } from 'antd'

const { Option } = Select

const UserFrom = forwardRef((props, ref) => {

    const [isDisable, setIsDisable] = useState(false)


    useEffect(() => {
        setIsDisable(props.isUpdateDisabled)
    }, [props.isUpdateDisabled])

    const { roleId, regions } = JSON.parse(localStorage.getItem("token"))

    const checkRegionDisabled = (item) => {

        if (roleId === 1) {
            return false
        } else {
            return item.value === regions

        }
    }

    const checkRoleDisabled = (item) => {
        if (roleId === 1) {
            return false
        } else {
            return item.id === 1 || item.id === 2
        }
    }

        return (
            <Form
                ref={ref}
                layout="vertical"  //垂直布局
            >
                <Form.Item
                    name="username"
                    label="用户名"
                    rules={[{ required: true, message: '这里是必填项' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="用户账号"
                    rules={[{ required: true, message: '这里是必填项' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[{ required: true, message: '这里是必填项' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="region"
                    label="管辖或职位"
                    rules={isDisable ? [] : [{ required: true, message: '这里是必填项' }]}
                >
                    <Select disabled={isDisable}>
                        {
                            props.regionList.map(item =>
                                <Option value={item.value} key={item.id} disabled={checkRegionDisabled(item)}>{item.title}</Option>
                            )
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    name="roleId"
                    label="角色属性"
                    rules={[{ required: true, message: '这是必填项！！！' }]}
                >
                    <Select onChange={(value) => {
                        if (value === 1) {
                            setIsDisable(true)
                            ref.current.setFieldsValue({
                                region: "暂未开放该权职"
                            })
                        } else {
                            setIsDisable(false)
                        }
                    }}>
                        {
                            props.roleList.map(item =>
                                <Option value={item.id} key={item.id} disabled={checkRoleDisabled(item)}>{item.roleName}</Option>
                            )
                        }
                    </Select>
                </Form.Item>

            </Form>
        )
    })

export default UserFrom
