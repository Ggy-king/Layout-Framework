<!-- 相关阅读 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
import ArticleList from '@/components/widgets/ArticleList.vue'



</script>

<template>
   <div class="related">
    <!-- 头部 -->
    <UniversalHead title="相关阅读" :is-more="false"/>

    <!-- 文章列表 -->
    <ArticleList />
   </div>
</template>


<style scoped lang="scss">
.related {
    margin-top: 60px;
}




</style>