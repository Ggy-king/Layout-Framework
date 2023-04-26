import React, { useEffect } from 'react'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import SideMenu from '../../components/newsSand/SideMenu'
import TopHeader from '../../components/newsSand/TopHeader'
import NewsRouter from '../../components/newsSand/NewsRouter'



// css
import './NewsSand.css'

// antd
import { Layout } from 'antd'

const {Content} = Layout

export default function NewsSand() {
    NProgress.start()
    useEffect(() => {
        NProgress.done()
    })
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>

                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow:'auto'
                    }}
                >
                    <NewsRouter></NewsRouter>
                </Content>

            </Layout>

        </Layout>
    )
}
