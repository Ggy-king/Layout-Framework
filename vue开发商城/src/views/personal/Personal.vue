<template>
  <!-- 页面主部分 -->
  <div class="wrapper">
   <div class="personal">
    <img class="personal__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="个人中心">
    <div class="personal__title">个人中心</div>
   </div>
  </div>
    <!-- 底部导航栏部分 -->
    <Docker :currentIndex="3"/>
</template>

<script>

import Docker from '../../components/Docker'

export default {
    name:'Personal',
    components: {
        Docker
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/Viriables';
.wrapper {
    // 可纵向滚动
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem .1rem .18rem;
    background: $bgColor;
  }

.personal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &__img {
    width: .84rem;
    height: .84rem;
    padding-bottom:.5rem ;
    padding-left: .1rem;
  }
  &__title {
    font-size: .24rem;
    text-align: center;
    margin-top: .2rem;
    color: $content-fontColor;
  }
}
</style>
