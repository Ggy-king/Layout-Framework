<!-- 登录组件 -->
<script setup lang="ts">
import { reactive,ref } from 'vue'
import { userFromStore } from '@/stores'


import type { TabsPaneContext } from 'element-plus'
import { User,Lock, Phone } from '@element-plus/icons-vue';

import hooks from '@/utils/hooks'
import {postLoginFrom} from '@/api/user'

// ----------调控login组件中from是否显示
// 控制组件的显隐我给定到pinia中了
const loginStore = userFromStore()



// ----------登录相关内容


const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  if(tab.index === '1') {
    hooks.message('手机号的api后续会开通，本作者资金有限请谅解','info')
  }
}

const username = ref('')
const password = ref('')

const resetLogin = () => {
  username.value = ''
  password.value = ''
}

const handleSubmit = async (): Promise<void> => {
  // 获取当前输入的值
  const userNameValue = username.value.trim();
  const passwordValue = password.value.trim();
 
  // 用户名验证规则
  const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
 
  if (!userNameValue || !passwordValue) {
    hooks.message('请输入账户名称及密码','error')
    return;
  }

  if (!usernameRegex.test(userNameValue)) {
    hooks.message('账户名称只能包含英文和数字，且最小长度为3','error')
    return;
  }
 
  if (!passwordRegex.test(passwordValue)) {
    hooks.message('密码必须包含英文和数字，且最小长度为6','error')
    return;
  }
 


  // 前端验证通过，后端验证返回
  try {
    const res = await postLoginFrom(userNameValue,passwordValue)

    switch (res.data.code) {
      case '2000':
        hooks.message('恭喜您登录成功！欢迎加入小高的探索者家庭','success')
        loginStore.setUser(username.value)
        loginStore.setToken(res.data.token)
        loginStore.changeLoginVisible(false)
        console.log(res);
      break;

      case '2006':
        hooks.message('账户已被注册或密码错误！','error')
      break;

      case '3000':
        hooks.message('恭喜您注册成功！请重新登录一遍吧','success')
        resetLogin()
      break;

      case '3003':
        hooks.message('注册失败，请联系开发者(我)或重试','error')
      break;

      default:
        hooks.message('请重试','warning')
        console.log(res);
        break;
    }
      
  } catch (error) {
    console.log('登录相关错误')
  }
}


const phone = ref('')
const verification = ref('')

</script>

<template>
    <el-dialog 
      v-model="loginStore.loginFormVisible" 
      :open-delay="100"
      :close-delay="100"
      :close-on-click-modal="false"
      :lockScroll="false"
      width="860"
      append-to="html"

    >

      <div class="login">
        <div class="login-show">
          <div class="login-show-bg">
            <!-- <img class="all" src="@/assets/images/nav-login-1.png" alt=""> -->
            <img class="top" src="@/assets/images/nav-login-2.png" alt="">
            <img class="bottom" src="@/assets/images/nav-login-3.png" alt="">
            <div class="bottom-title">
              <div>@开发者：高广源</div>
              <div style="font-size: 14px;">加入我 <el-icon style="font-weight: 600;font-size: 18px;vertical-align: middle;"><Right /></el-icon></div>
              <div style="font-size: 14px;text-align: right;"></div>
            </div>
            <div class="bottom-info">
              <div>欢迎登录！登录享更多功能</div>
              <div>链界探索者提示您，投足有风险，理财需谨慎</div>
              
            </div>
          </div>
          
        </div>
        <div class="login-form">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号登录" name="first">
              <div class="login-form-list">
                <el-input
                  v-model="username"
                  style="width: 300px;margin: 20px 0;"
                  size="large"
                  placeholder="请输入账号名"
                  maxlength="12"
                  :prefix-icon="User"
                  oninput="value = value.replace(/[^\w]/g,'')"
                />

                <div class="login-form-list-pass">
                  <el-input
                    v-model="password"
                    style="width: 300px"
                    size="large"
                    type="password"
                    placeholder="请输入6-12位密码"
                    maxlength="12"
                    show-password
                    :prefix-icon="Lock"
                    oninput="value = value.replace(/[^\w]/g,'')"
                    @keyup.enter="handleSubmit"

                  />
                  <span class="forget" @click="hooks.message('请您联系我吧，服务人数太少懒得做了','info')">忘记密码?</span>
                </div>
                
                <el-button @click="handleSubmit">登录 / 注册</el-button>
                <div style="color: #000;font-size: 12px;margin: 6px 0;">没有注册过的账号会自动注册</div>

                <div style="font-size: 12px;">登录/注册即代表我已同意<span 
                  style="color: #24a5ff;">用户协议</span>、<span 
                  style="color: #24a5ff;">隐私协议</span></div>

              </div>

            </el-tab-pane>
            <el-tab-pane label="短信登录" name="second">
              <div class="login-form-list">
                <el-input
                  v-model="phone"
                  style="width: 300px;margin: 20px 0;"
                  size="large"
                  placeholder="请输入手机号码"
                  maxlength="11"
                  :prefix-icon="Phone"
                  oninput ="value = value.replace(/[^0-9.]/g,'')"
                  :disabled="true"
                  
                />

                <div class="login-form-list-pass">
                  <el-input
                    v-model="verification"
                    style="width: 300px"
                    size="large"
                    type="text"
                    placeholder="请输入验证码"
                    maxlength="6"
                    oninput ="value = value.replace(/[^0-9.]/g,'')"
                    :disabled="true"
                  >
                  <template #suffix>
                    <a href="#" style="color: #ff7b25;font-size: 12px;line-height: 16px;">获取验证码</a>
                  </template>
                  </el-input>
                </div>
                
                <el-button :disabled="true">登 录</el-button>
                <div style="color: #000;font-size: 12px;margin: 6px 0;">未注册的手机，通过验证后将自动注册账号</div>

                <div style="font-size: 12px;">登录/注册即代表我已同意<span 
                  style="color: #24a5ff;">用户协议</span>、<span 
                  style="color: #24a5ff;">隐私协议</span></div>

              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        
      </div>
      
    </el-dialog>
</template>

<style scoped lang="scss">


.login {

  height: 420px;
  display: flex;
  overflow: hidden;
  &-show {
    flex: 3;
    &-bg {
      position: absolute;
      overflow: hidden;
      width: 44%;
      height: 100%;
      top: 0;
      left: 0;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;

      .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 98%;
        box-shadow: -3px 5px 15px rgba(0, 0, 0, 0.2);
      }
      .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 98%;
        box-shadow: 2px -4px 15px rgba(0, 0, 0, 0.2);
      }
      .bottom-title {
        position: absolute;
        bottom: 160px;
        right: 40px;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        text-align: right;
      }
      .bottom-info {
        position: absolute;
        bottom: 20px;
        right: 40px;
        font-size: 14px;
        color: #fff;
        text-align: right;
      }
    }
  }
  &-form {
    flex: 4;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-list {
      text-align: center;
      .el-input {
        --el-input-focus-border-color: #c0c4cc;
        --el-input-hover-border-color: #dcdfe6;
      }
      &-pass {
        position: relative;
        width: 300px;
        margin: auto;
        padding-bottom: 24px;

        .forget {
          position: absolute;
          bottom: 0;
          right: 0;
          &:hover {
            cursor: pointer;
            color: #ae782c;
          }
        }
      }
      .el-button {
        width: 256px;
        height: 44px;
        margin-top: 20px;
        border-radius: 128px;
        background-color: #f23f58;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        --el-button-active-border-color: none;

      }

    }
  }
}
// :deep(.el-tabs__item) {
//   font-size: 16px;
// }
:deep(.el-tabs__nav-wrap::after) {
  display: none;
}
:deep(.el-tabs__nav-scroll) {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  .el-tabs__item {
    font-size: 16px;
    font-weight: 600;
    color: #444;
    &:hover {
      color: #111;
    }
    
  }
  .el-tabs__item.is-active {
    color: #000;
  }
  .el-tabs__active-bar {
    width: 40px !important;
    background-color: #FFD700;
    margin-left: 13px;
  }

  // :deep(.el-tab-pane) {
  //   display: flex;
  // }
  
}

</style>