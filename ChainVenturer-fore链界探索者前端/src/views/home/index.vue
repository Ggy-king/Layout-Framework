<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

import NavBar from '@/components/home/NavBar.vue'
import TipBar from '@/components/home/TipBar.vue'
import FooterStatement from '@/components/home/FooterStatement.vue'


defineOptions({
    name: 'HomeView'
})




// 滚动条-头部固定
const navbarRef = ref<HTMLElement | null>(null);
const isFixed = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY || window.pageYOffset || 0; // 兼容性处理
 
  if (navbarRef.value) {
    // 根据滚动位置设置导航栏的固定状态
    isFixed.value = scrollTop > 30;
  }
  
};
 
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

});
 
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<template>
    <div class="common-layout">
      <el-container >

        <!-- 固定头部 -->
        <el-header height="100px"  ref="navbarRef">
          <TipBar></TipBar>
          <NavBar :class=" { fixed: isFixed }"></NavBar>
        </el-header>

        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
          <el-backtop :right="60" :bottom="100" style="color: #f7d049;background-color: #9ea294;"/>

        </el-main>

        <!-- 固定底部 -->
        <el-footer>
          <FooterStatement></FooterStatement>
        </el-footer>
        
      </el-container>
    </div>
</template>


<style scoped lang="scss">

.common-layout {
  .el-container {
    // background-color: pink;
    .el-header {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 0;
      z-index: 9;
      }
      .fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        line-height: 50px;
        opacity: .8;
        transition: all .8s ease;
      }

      
    .el-main {
      width: 1200px;
      margin: 100px auto 0;
      padding: 0;
      padding-bottom: 14px;
    }
    .el-footer {
      padding: 0;
    }
  }
}
</style>