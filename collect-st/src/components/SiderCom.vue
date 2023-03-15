<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo">
        <img src="../assets/logo.png" />
        <span v-show  ="!collapsed">题集库</span>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        
    

    <a-menu-item key="1">
    <pie-chart-outlined />
    <span>资源题库</span>
    </a-menu-item>

    <a-menu-item key="2">
    <folder-open-outlined />
    <span>我的笔记本</span>
    </a-menu-item>



    <a-menu-item key="3">
    <solution-outlined />
    <span>个人中心</span>
    </a-menu-item>
    
</a-menu>
</a-layout-sider>
</template>

<script>
import { SolutionOutlined,FolderOpenOutlined,PieChartOutlined } from '@ant-design/icons-vue';
import { ref,defineComponent } from 'vue';

export default defineComponent({
    name:'SiderCom',
    components: {
        PieChartOutlined,
        FolderOpenOutlined,
        SolutionOutlined,
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
            this.$router.push({path:'/checkcollect'})
            break;
            case 2:
            this.$router.push({path:'/donecollect'})
            break;
            case 3:
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