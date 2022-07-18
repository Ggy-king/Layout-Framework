<template>
  <!-- 页面主部分 -->
  <div class="wrapper">
    <!-- 首页静态头部组件 -->
    <Staticpart />
      <!-- 首页竖列表 -->
    <Nearby />
  </div>
    <!-- 底部导航栏部分 -->
    <Docker :currentIndex="0"/>
</template>

<script>
import Staticpart from './Staticpart'
import Nearby from './Nearby'
import Docker from '../../components/Docker'

export default {
    name:'Home',
    components: {
        Staticpart,
        Nearby,
        Docker
    }
}
</script>

<style lang="scss" scoped>

.wrapper {
    // 可纵向滚动
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem .1rem .18rem;
  }
</style>
