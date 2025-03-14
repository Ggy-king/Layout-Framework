<script setup lang="ts">
import SimpleBrowse from '@/components/cart/SimpleBrowse.vue'
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue'
import SideHotCart from '@/components/cart/SideHotCart.vue';
import ArticlesList from './ArticlesList.vue';


defineOptions({
    name: 'ArticleView'
})


</script>

<template>
  <SimpleBrowse></SimpleBrowse>
  <PersonalizedStatement></PersonalizedStatement>
  
  <div class="articles">
    <ArticlesList />


    <!-- 侧边栏 -->
    <div class="side">
      <SideHotCart title="热门品种" :type-index="1"></SideHotCart>
      <SideHotCart title="精选文章" :type-index="0"></SideHotCart>
    </div>
  </div>

  <!-- <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，请等待一会或刷新一下吧！"
    /> -->
 

</template>

<style scoped lang="scss">
.articles {
  position: relative;
  width: 820px;
  min-height: 1400px;
  .side {
      position: absolute;
      top: 30px;
      right: -380px;
  }
}

    
</style>
