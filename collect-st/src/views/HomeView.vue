<template>
  <a-layout style="min-height: 100vh">
    <SiderCom />
    <a-layout>
      <HeaderCom />
      <a-layout-content style="margin: 0 16px;background-color: #f1f2f7">
        
          <router-view></router-view>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent } from 'vue';
// 公共组件
import SiderCom from '@/components/SiderCom'
import HeaderCom from '@/components/HeaderCom'
export default defineComponent({
  name:'HomeView',
  components: {
    SiderCom,
    HeaderCom,
},
});
</script>
