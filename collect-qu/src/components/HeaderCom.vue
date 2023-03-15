<template>
    <a-layout-header style="background: rgba(24, 144, 255,.2); padding: 0;position:relative">
        <bars-outlined :style="{fontSize: '22px',marginLeft: '10px'}"/>
        <span class="head-title-str">您好 </span>
        <span class="head-title-nor"> <strong class="str-title"> —— </strong> 欢迎体验收题系统</span>
        <div  class="header_person">
          <twitter-outlined :style="{fontSize: '22px',marginRight: '10px',color: '#2a3542'}"/>
          <wechat-outlined :style="{fontSize: '22px',marginRight: '10px',color: '#2a3542'}"/>
          <qq-outlined :style="{fontSize: '22px',marginRight: '10px',color: '#2a3542'}"/>
          <weibo-circle-outlined :style="{fontSize: '22px',marginRight: '30px',color: '#2a3542'}"/>
          <a-popover placement="bottom">
          <template #content>
            <a-space>
            <button class="login_back" @click=handLoginBack()>退出登录</button>
            </a-space>
          </template>
          <template #title>
            <span>用户名:</span>
            <span style="margin-left:10px;color: #40a9ff;">{{$store.state.username}}</span>
          </template>
          <a-button>登录管理</a-button>
        </a-popover>
      </div>
    </a-layout-header>
</template>
  
<script>
import router from '@/router';
import { TwitterOutlined,WechatOutlined,QqOutlined,WeiboCircleOutlined,BarsOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name:'HeaderCom',
  components: {
    TwitterOutlined,
    WechatOutlined,
    QqOutlined,
    WeiboCircleOutlined,
    BarsOutlined
  },
  setup(props) {
    const handLoginBack = () => {
    sessionStorage.removeItem('isLogin')
    message.success('您已成功退出登录')
    router.go(0)
    };

    const error = () => {
    message.error('This is an error message');
    };

    const warning = () => {
    message.warning('This is a warning message');
    };

    return {
    handLoginBack,
    error,
    warning,
    };
  }
  
})

</script>

<style lang="scss">
/* 标题文字样式 */
.head-title-str {
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
}
.head-title-nor {
  font-size: 14px;
  color:rgb(63, 53, 53);
}
.str-title {
  font-weight: 900;
}
.header_person {
  position: absolute;
  top: 0;
  right: 50px;
  border-radius: 10px;
}
.login_back {
  color: #f81d22;
  border: none;
  background-color: #fff;
  margin-left: -4px;
  cursor: pointer;
}
.ant-btn {
  border-radius: 10px;
}
.ant-popover-open {
  // width: 20px;
}

</style>