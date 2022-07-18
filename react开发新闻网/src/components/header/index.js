import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import axios from 'axios';
import { MailOutlined } from '@ant-design/icons';
// 图片可以直接打包
import logo from './logo.png';
import './style.css'

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    getMenuItems() {
        // 遍历state中list中的数据 每遍历一项返回一个div
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id} icon={<MailOutlined />}>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </Menu.Item>
            )
        })
    }

    // 发送axios请求需要在componentDidMount中请求

    render() {
        return (
            <Fragment>
                <Link to='/'>
                    <img src={logo} className="app-header-logo" alt='logp' />
                </Link>
                <Menu mode="horizontal"
                    className='app-header-menu'
                    defaultSelectedKeys={['mail']}>
                    {this.getMenuItems()}
                </Menu>
            </Fragment>

        )
    }

    componentDidMount() {
        // console.log('你好');
        // console.log(this.props);

        axios.get('https://www.fastmock.site/mock/be8e9126f34fd985aaad5cbe6e046fd6/react/api/getDate')
            .then((res) => {
                this.setState(
                    { list: res.data.data.list }
                )
            })
    }
}

export default AppHeader;
