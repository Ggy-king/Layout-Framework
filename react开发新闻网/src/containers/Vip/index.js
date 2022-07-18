import React, { Component } from "react";
// Redirect页面重定向
// import { Navigation } from 'react-router-dom';
import axios from 'axios';
import './style.css'

class Vip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            fetchFinish: false
        }
    }

    render() {
        if (this.state.login) {
            if (this.state.fetchFinish) {
                return <div className="vip">VIP</div>
            } else {
                return <div className="vip">正在判断用户状态</div>

            }
        } else {
            // return <Navigation to='/' />
            return <div>你没有登录 请登录</div>
        }

    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        })
            .then(res => {
                const login = res.data.data.login;
                this.setState({
                    login,
                    fetchFinish: true
                })
            })
    }

}
export default Vip;