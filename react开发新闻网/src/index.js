import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from 'antd';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';



// 主体组件
import AppHeader from './components/header';
import Login from './components/login';

// 页面组件
import PageList from './containers/List';
import Detail from './containers/Detail';
import Vip from './containers/Vip';

import 'antd/dist/antd.css';
import './style.css';


const { Header, Footer, Content } = Layout;

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minWidth: 1300, height: '100%' }}>
                    <Header className="header">
                        <AppHeader />
                    </Header>
                    <Content className="content">
                        <Login />
                        <Routes>
                            <Route path='/vip' element={<Vip />} />
                            {/* :id接收参数  加?表示不传参数时默认为 / */}
                            <Route path='/:id' element={<PageList />} />
                            <Route path='/detail' element={<Detail />} />
                        </Routes>
                    </Content>
                    <Footer className="footer">
                        世界上没有好走的路<br />
                        但有前人走过的路<br />
                    </Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)