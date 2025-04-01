<script setup lang="ts">
import NewsCart from '@/components/cart/NewsCart.vue'
import PersonalityView from './PersonalityView.vue'
import TopicCart from './TopicCart.vue'
import TabMain from './TabMain.vue'
import NavigatorCart from './NavigatorCart.vue'
import CarouselView from './CarouselView.vue'

</script>

<template>

  <!-- 个性渲染 -->
  <PersonalityView></PersonalityView>

  <div class="main-show">

    <div>
      <!-- 轮播图 -->
      <CarouselView></CarouselView>
      <!-- 标签页 主体内容 -->
      <TabMain></TabMain>
      
    </div>

    <!-- 侧边栏展示 -->
    <div class="aside-show">
      <!-- 热议专题 -->
      <TopicCart></TopicCart>
      <!-- 推荐去处 -->
      <NavigatorCart style="margin-top: 40px;"></NavigatorCart>
      <!-- 快讯时间线展示 -->
      <NewsCart style="margin-top: 40px;"></NewsCart>
    </div>
  </div>


 
</template>

<style scoped lang="scss">


  .main-show {
    display: flex;
    justify-content: space-between;
    min-height: 1600px;
    .aside-show {
      width: 320px;
      margin-top: 20px;
    }

  }



</style>
