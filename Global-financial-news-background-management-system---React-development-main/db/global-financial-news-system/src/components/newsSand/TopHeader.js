import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Dropdown, Menu, Space, Avatar, Badge } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  AlignLeftOutlined,
  DingtalkOutlined
} from '@ant-design/icons';
import {connect} from 'react-redux'
const { Header } = Layout

function TopHeader(props) {
  // const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    props.changeCollapsed()
  
  }


  const { role: { roleName }, username } = JSON.parse(localStorage.getItem("token"))

  const menu = (
    <Menu>
      <Menu.Item>
        <DingtalkOutlined /> {roleName}
      </Menu.Item>

      <Menu.Item disabled>
        <AlignLeftOutlined /> 消息列表
      </Menu.Item>

      <Menu.Item danger onClick={() => {
        localStorage.removeItem("token")
        props.history.replace("/login")
      }}>
        <LogoutOutlined /> 退出
      </Menu.Item>
    </Menu>
  )
  
  return (
    <Header
      className="site-layout-background"
      style={{
        position: "relative",
        padding: '0 16px',
      }}
    >
      {
        props.isCollapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} />
          : <MenuFoldOutlined onClick={changeCollapsed} />
      }

      <span style={{ position: "absolute", top: "0", left: "40%", fontSize: "12px", fontWeight: "700", color: "#aaa" }}
      >莫愁前路无知己，天下谁人不识君</span>

      <div style={{ float: "right" }}>
        <div style={{ display: "inline", marginRight: 20 }}>欢迎您，<b style={{ color: "#1890ff" }}>{username}</b> 同志</div>
        <Dropdown overlay={menu}>
          <Space>
            <Badge count={1}>
              <Avatar shape="square" src="user.jfif" />
            </Badge>
          </Space>
        </Dropdown>
      </div>
    </Header>
  )

}

const mapStateToProps = ({CollapsedReducer:{isCollapsed}}) => ({
  isCollapsed
})

const mapDispatchToProps = {
  changeCollapsed() {
    return {
      type: "change_collapsed"
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TopHeader))