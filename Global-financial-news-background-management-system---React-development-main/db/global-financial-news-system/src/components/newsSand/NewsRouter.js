import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios'

import AuthorityList from '../../views/newsSand/authority-manage/AuthorityList'
import RoleList from '../../views/newsSand/authority-manage/RoleList'
import Home from '../../views/newsSand/home/Home'
import NoPermission from '../../views/newsSand/noPermission/NoPermission'
import UserList from '../../views/newsSand/user-manage/UserList'
import NewsAdd from '../../views/newsSand/news-manage/NewsAdd'
import NewsDraft from '../../views/newsSand/news-manage/NewsDraft'
import NewsCategory from '../../views/newsSand/news-manage/NewsCategory'
import Audit from '../../views/newsSand/audit-manage/Audit'
import AuditList from '../../views/newsSand/audit-manage/AuditList'
import Unpublished from '../../views/newsSand/publish-manage/Unpublished'
import Published from '../../views/newsSand/publish-manage/Published'
import Sunset from '../../views/newsSand/publish-manage/Sunset'
import NewsPreview from '../../views/newsSand/news-manage/NewsPreview'
import NewsUpdate from '../../views/newsSand/news-manage/NewsUpdate'
import { Spin } from 'antd'


const LocalRouterMap = {
    "/home": Home,
    "/user-manage/list": UserList,
    "/authority-manage/role/list": RoleList,
    "/authority-manage/authority/list": AuthorityList,
    "/news-manage/add": NewsAdd,
    "/news-manage/draft": NewsDraft,
    "/news-manage/category": NewsCategory,
    "/news-manage/preview/:id": NewsPreview,
    "/news-manage/update/:id": NewsUpdate,
    "/audit-manage/audit": Audit,
    "/audit-manage/list": AuditList,
    "/publish-manage/unpublished": Unpublished,
    "/publish-manage/published": Published,
    "/publish-manage/sunset": Sunset
}

function NewsRouter(props) {

    const [BackRouterList, setBackRouterList] = useState([])
    useEffect(() => {
        Promise.all([
            axios.get("/rights"),
            axios.get("/children"),
        ]).then(res => {
            setBackRouterList([...res[0].data, ...res[1].data])
        })
    }, [])

    const { role: { rights } } = JSON.parse(localStorage.getItem("token"))

    const checkRoute = (item) => {
        return LocalRouterMap[item.key] && (item.pagepermisson || item.routepermisson)
    }
    const checkUserPermission = (item) => {
        return rights.checked.includes(item.key)
    }

    return (
        <Spin size='large' spinning={props.isLoading}>
            <Switch>
                {
                    BackRouterList.map(
                        item => {
                            if (checkRoute(item) && checkUserPermission(item)) {
                                return <Route path={item.key} key={item.key}
                                    component={LocalRouterMap[item.key]} exact />
                            }
                            return null

                        })
                }

                <Redirect from="/" to="/home" exact />

                {
                    BackRouterList.length > 0 && <Route path="*" component={NoPermission} />
                }

                {/* 上写法优先级最低 所有的都不匹配才是 */}
            </Switch>
        </Spin>
    )
}
const mapStateToProps = ({ LoadingReducer: { isLoading } }) => ({
    isLoading
})

export default connect(mapStateToProps)(NewsRouter)