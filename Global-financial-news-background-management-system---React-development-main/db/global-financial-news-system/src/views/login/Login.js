import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import axios from 'axios'

import './Login.css'

export default function Login(props) {
  const onFinish = (values) => {
    axios.get(`/users?name=${values.username}&password=${values.password}&roleState=true&_expand=role`)
      .then(res => {
        if (res.data.length === 0) {
          message.error("用户账号或密码错误")
        } else {
          localStorage.setItem("token", JSON.stringify(res.data[0]))
          props.history.push('/')
        }
      })
  }

  return (
    <div style={{
      height: "100%", width: "100%",
      background: "url(loginB.png) no-repeat center/cover",
      overflow: 'hidden'
    }}>
      <div className='formContainer'>
        <div className='title'>环球财经新闻管理系统后台</div>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入您的用户账号',
              },
            ]}
          >
            <Input type='' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入您的密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
