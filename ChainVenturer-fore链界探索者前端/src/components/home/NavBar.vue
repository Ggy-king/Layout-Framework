<!-- 顶部导航栏 -->
<script setup lang="ts">
import LoginView from '@/components/widgets/LoginView.vue'

import { ref,toRefs,reactive,watch,onMounted } from 'vue'
import { useRouter,useRoute } from 'vue-router'


import { Search } from '@element-plus/icons-vue'
import avatar from '@/assets/images/user-avatar.png'
import avatarL from '@/assets/images/user-avatar-1.png'

import { UrlStore,userFromStore } from '@/stores'
import hooks from '@/utils/hooks'




// ---------头像相关
const avatarImg = reactive({
  circleUrl:avatar,
  circleUrlL:avatarL,
})

const { circleUrl,circleUrlL } = toRefs(avatarImg)

//---------- 搜索相关
const router = useRouter()
const route = useRoute()
const querySearch = ref('')
const url = UrlStore()
const isSearchPath = ref(false)


const handleSearch = ():void => {
  if(querySearch.value.trim() === '') {
    hooks.message('请输入搜索内容','warning')
  } else {
    if(isSearchPath.value) {
      router.push({query: {keyword: querySearch.value}})
      querySearch.value = ''
    } else {
      window.open(`${url.baseUrl}/search?keyword=${encodeURIComponent(querySearch.value)}`)
      querySearch.value = ''
    }
  }
}

// 监听路径 总感觉不是好办法 日后看看能不能解决
watch(
    () => route.path,
    (newQuery,oldQuery) => {
      newQuery === '/search' ? isSearchPath.value = true : isSearchPath.value = false
    },
    { immediate: true }
)

// 搜索提示
interface LinkItem {
  value: string
}

const links = ref<LinkItem[]>([])
let timeout: ReturnType<typeof setTimeout>
const loadAll = () => {
  return [
    { value: '政策' },
    { value: '交易所' },
    { value: '黄金' },
    { value: '市场' },
    { value: '美元汇率动向' },
    { value: '小高同志' },
  ]
}
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 2000)
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

onMounted(() => {
  links.value = loadAll()
})



// -----------登录/注册
const loginStore = userFromStore()
const handleLogin = () => {
  loginStore.changeLoginVisible(true)
}
const handleLoginOut = () => {
  hooks.confirm('您确定要退出账户吗？','链界探索者提示您：')
  .then(() => {
    loginStore.removeToken()
    loginStore.removeUser()
    hooks.message('退出成功，期待与您下次相见','success')
  })
}

</script>

<template>
  <div class="con_nav">
    <div class="center">

      <!-- 图标 -->
      <div class="logo">
        <h1><a href="/" title="返回首页">链界探索者-基于数字货币的智域探索平台</a></h1>
      </div>

      <!-- 导航栏 -->
      <ul class="nav">
        <li><router-link :to="{ name:'total'  }">首页</router-link></li>
        <li><router-link :to="{ name:'topic' }">专题</router-link></li>
        <li><router-link :to="{ name:'articles' }">文章</router-link></li>
        <li><router-link :to="{ name:'market' }">行情</router-link></li>
        <li><router-link :to="{ name:'write' }">创作</router-link></li>
        <li><router-link :to="{ name:'news' }">快讯</router-link></li>
        <li><router-link :to="{ name:'tool' }">工具</router-link></li>
        <li><router-link :to="{ name:'rates'}">汇率</router-link></li>
        <li><router-link :to="{ name:'navigator' }">导航</router-link></li>
        <li><router-link :to="{ name:'developer' }">开发者</router-link></li>
      </ul>

      <div class="component">

        <el-autocomplete
          v-model="querySearch"
          :fetch-suggestions="querySearchAsync"
          :popper-append-to-body="false"
          placeholder="请搜索"
          @keyup.enter="handleSearch"
        >
          <template #append>
            <el-icon @click="handleSearch">
              <Search />
            </el-icon>
          </template>
        </el-autocomplete>

        <!-- 头像 -->
        <el-avatar v-if="!loginStore.token" :size="40" :src="circleUrl" @click="handleLogin"/>

        <el-dropdown v-if="loginStore.token"  :teleported="false" placement="bottom">
          <el-avatar :size="40" :src="circleUrlL"/>
          <template #dropdown>
            <el-dropdown-menu>
              <router-link :to="{ name:'person',query:{mode: 'user'} }">
                <el-dropdown-item>个人中心</el-dropdown-item>
              </router-link>
              <router-link :to="{ name:'person',query:{mode: 'set'} }">
                <el-dropdown-item>用户设置</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- 登录 -->
        <el-button class="login" v-if="!loginStore.token" @click="handleLogin"><el-icon><Position /></el-icon>&nbsp;&nbsp;登录账户</el-button>
        <el-button class="login" v-if="loginStore.token" @click="handleLoginOut"><el-icon><Position /></el-icon>&nbsp;&nbsp;退出登录</el-button>
        <LoginView />

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.con_nav {
 
  height: 60px;
  // background: #444;
  background: #36526f;
  // background: #174e85;

  
  box-shadow:0 4px 10px rgba(0,0,0,0.3);
  font-size: 12px;

  color: #fff;
  line-height: 60px;
  transition: all .8s ease;
  
  .center {
    width: 1200px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;

    .logo {
      display: flex;
      justify-content: start;

      width: 240px; /* 设置宽度，根据Logo大小调整 */

        h1 {
          margin: 0;
          font-size: 1.5em;
          text-indent: -9999px; /* 隐藏文字 */

          background-position: center center;
          background-image: url('@/assets/images/logo.png'); /* 使用背景图像作为Logo */
          background-size: contain; /* 保持图像比例 */
          background-repeat: no-repeat; /* 不重复图像 */
          width: 220px; /* 设置宽度，根据Logo大小调整 */
          height: 100%; /* 设置高度，根据Logo大小调整 */
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          
      }
    }
    .nav {
      display: flex;
      font-size: 14px;
      font-weight: 600;
      li {
        padding: 0 10px;
        &:hover {
          color: #ae782c;
        }
        a.router-link-active {
          color: #FFD700;
        }
      }
    }
    
    .component {
      display: flex;
      
        :deep(.el-autocomplete) {
          margin-left: 20px;
          width: 260px;
          font-size: 12px;

          .el-input {
            --el-input-placeholder-color: #70757b;
            --el-input-text-color: #000;
            --el-input-bg-color: #f2f3f4;
            --el-input-focus-border-color: #f2f3f4;
            --el-input-hover-border-color: #f2f3f4;
            --el-input-border-color: #f2f3f4;
            --el-input-focus-bg-color: #fff;
          }
          .el-icon:hover {
            cursor: pointer;
          }
        }


        .el-avatar {
          margin: auto 10px;
          margin-left: 40px;
          width: 36px;
          height: 36px;
          img {
            width: 100%;
          }
          &:hover {
            cursor: pointer;
          }
        }

        :deep(.el-dropdown__popper) {
          --el-dropdown-menuItem-hover-color:#ae782c;
        }
        :deep(.el-dropdown-menu__item:not(.is-disabled):hover) {
          background-color: #fdf7ef;
        }

        .login {
          margin: auto 0;
          border-color: #275787;
          border-radius: 20px;
          height: 36px;
          font-size: 12px;
          font-weight: 600;
          color: #000;
          background-color: #fff;
          &:hover {
            color: #ae782c;
          }
        }
        
    }
    
  }

}


</style>
