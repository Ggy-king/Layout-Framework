<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo">
        <img src="../assets/logo.png" />
        <span v-show  ="!collapsed">收题库</span>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        
    <a-sub-menu key="sub1">
    <template #title>
        <span>
        <to-top-outlined />
        <span>题目上传</span>
        </span>
    </template>
    <a-menu-item key="1">PDF上传</a-menu-item>
    <a-menu-item key="2">图片上传</a-menu-item>
    <!-- <a-menu-item key="5">Alex</a-menu-item> -->
    </a-sub-menu>
    <a-sub-menu key="sub2">
    <template #title>
        <span>
        <star-outlined />
        <span>题集操作</span>
        </span>
    </template>
    <a-menu-item key="3">资源题库</a-menu-item>
    <a-menu-item key="4">学生笔记</a-menu-item>
    </a-sub-menu>
    <!-- <a-menu-item key="5">
    <file-outlined />
    <span>File</span>
    </a-menu-item> -->

    <a-menu-item key="5">
    <team-outlined />
    <span>学生管理</span>
    </a-menu-item>
    <!-- <a-menu-item key="7">
    <desktop-outlined />
    <span>Option 2</span>
    </a-menu-item> -->
</a-menu>
</a-layout-sider>
</template>

<script>
import { TeamOutlined,ToTopOutlined,StarOutlined } from '@ant-design/icons-vue';
import { ref,defineComponent } from 'vue';

export default defineComponent({
    name:'SiderCom',
    components: {
        StarOutlined,
        ToTopOutlined,
        TeamOutlined,
    },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['0']),
    }
  },
  methods: {

  },


  watch: {
    selectedKeys:{
        immediate:true,
        handler(oldValue){
        let numRoute = Number(this.selectedKeys[0])
        switch (numRoute) {
            case 1:
            this.$router.push({path:'/pdfupload'})
            break;
            case 2:
            this.$router.push({path:'/imgupload'})
            break;
            case 3:
            this.$router.push({path:'/checkcollect'})
            break;
            case 4:
            this.$router.push({path:'/donecollect'})
            break;
            case 5:
            this.$router.push({path:'/studentmanage'})
            break;
            default:
                break;
        }
        
      }
    }   
  }
  

})
</script>

<style lang="scss">
/* 导航图 */
.logo {
  position: relative;
}
.logo img {
  height: 30px;
  margin: 16px;
}
.logo span {
  position: absolute;
  top: 40%;
  left: 30%;
  padding-bottom: 20px;
  font-weight: bold;
  color: #fff;
}

/* 导航样式 */
.ant-layout-sider-children,.ant-menu{
  background-color: #2a3542 !important;
}
.ant-layout-sider-trigger {
  background-color: #314154;
}
.ant-menu-item-active {
  color: #f25650 !important;
}
.ant-menu-item-selected {
  color: #f25650 !important;
  background-color: #5a6573 !important;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>