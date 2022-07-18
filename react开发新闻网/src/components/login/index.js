import React, { Component } from 'react';
// import { List } from 'antd';
import { Link } from 'react-router-dom';
// withRouter
import axios from 'axios';
import { Modal, Button, Input, message } from 'antd';
import './style.css';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false,
            modal: false,
            user: '',
            password: ''
        }
        this.showModal = this.showModal.bind(this);
        this.hideModel = this.hideModel.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.logout = this.logout.bind(this)
    }

    showModal() {
        this.setState({
            modal: true
        })
    }
    hideModel() {
        this.setState({
            modal: false
        })
    }
    changeUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    checkLogin() {
        const { user, password } = this.state;
        const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`;
        // get攜帶參數 withCredentials: true 為跨域
        axios.get(url, {
            withCredentials: true
        })
            .then(res => {
                const login = res.data.data.login;
                // console.log(login);
                if (login) {
                    message.success('你丫的登录成功了')
                    this.setState({
                        login: true,
                        modal: false
                    })
                } else {
                    message.error('自己啥身份不知道啊')
                }
            })
    }

    logout() {
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        })
            .then(res => {
                const data = res.data.data;
                if (data.logout) {
                    this.setState({
                        login: false
                    })
                }
               
            })
    }

    render() {
        const { login } = this.state;
        return (
            <div className='login'>
                {
                    login ?
                        <Button
                            type="primary"
                            onClick={this.logout}
                        >退出</Button> : <Button onClick={this.showModal} type="primary">登录</Button>
                }
                <Link to='/vip'>
                    <Button type="primary" style={{ marginLeft: 10 }}>VIP</Button>
                </Link>

                <Modal
                    title="登录"
                    visible={this.state.modal}
                    onOk={this.checkLogin}
                    onCancel={this.hideModel}>
                    <Input
                        placeholder="请输入用户名"
                        style={{ marginBottom: 10 }}
                        value={this.state.user}
                        onChange={this.changeUser}
                    />
                    <Input
                        placeholder="请输入密码"
                        type="password"
                        value={this.state.password}
                        onChange={this.changePassword}
                    />

                </Modal>

            </div>
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        })
            .then(res => {
                const login = res.data.data.login;
                this.setState({
                    login
                })
            })
    }
}


export default Login;

