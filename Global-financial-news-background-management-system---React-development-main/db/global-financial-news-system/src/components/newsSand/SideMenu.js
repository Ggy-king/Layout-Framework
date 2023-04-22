import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  SlidersOutlined,
  TeamOutlined,
  UserOutlined,
  FileProtectOutlined,
  EditOutlined,
  SelectOutlined,
  UnorderedListOutlined,
  UnlockOutlined,
  ProfileOutlined,
  FundViewOutlined,
  FontSizeOutlined,
  ApartmentOutlined,
  HistoryOutlined,
  CloudUploadOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';

import axios from 'axios'

import './index.css'

const { Sider } = Layout
const { SubMenu } = Menu


const iconList = {
  "/home": <HomeOutlined />,
  "/user-manage": <UserOutlined />,
  "/user-manage/list": <UnorderedListOutlined />,
  "/authority-manage": <SlidersOutlined />,
  "/authority-manage/role/list": <TeamOutlined />,
  "/authority-manage/authority/list": <UnlockOutlined />,
  "/news-manage": <EditOutlined />,
  "/news-manage/add": <FontSizeOutlined />,
  "/news-manage/draft": <EditOutlined />,
  "/news-manage/category": <ApartmentOutlined />,
  "/audit-manage": <FileProtectOutlined />,
  "/audit-manage/audit": <FundViewOutlined />,
  "/audit-manage/list": <ProfileOutlined />,
  "/publish-manage": <SelectOutlined />,
  "/publish-manage/unpublished": <HistoryOutlined />,
  "/publish-manage/published": <CloudUploadOutlined />,
  "/publish-manage/sunset": <CloseCircleOutlined />
}

function SideMenu(props) {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    axios.get("/rights?_embed=children").then(res => {
      setMenu(res.data)
    })
  }, [])

  const { role: { rights } } = JSON.parse(localStorage.getItem("token"))

  const checkPagePermission = (item) => {
    return item.pagepermisson && (Array.isArray(rights) ? rights : rights.checked).includes(item.key)
  }

  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children?.length > 0 && Boolean(checkPagePermission(item))) {
        return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
          {
            renderMenu(item.children)
          }
        </SubMenu>
      }
      return Boolean(checkPagePermission(item)) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => {
        props.history.push(item.key)
      }}>{item.title}</Menu.Item>
    })
  }

  const selectKeys = [props.location.pathname]
  const openKeys = ["/" + props.location.pathname.split("/")[1]]
  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className="logo">环球财经新闻后台管理</div>
        <div style={{ flex: "1", overflow: "auto" }}>
          <Menu
            theme="dark"
            selectedKeys={selectKeys}
            mode="inline"
            defaultOpenKeys={openKeys}
          >
            {renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider >

  )
}
const mapStateToProps = ({CollapsedReducer:{isCollapsed}}) => ({
  isCollapsed
})


export default connect(mapStateToProps)(withRouter(SideMenu))  //高阶组件生成低阶组件