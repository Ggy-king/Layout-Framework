<script setup lang="ts">
import SimpleBrowse from '@/components/cart/SimpleBrowse.vue';
import TopicHeader from './TopicHeader.vue';
import TopicChunk from './TopicChunk.vue';


defineOptions({
    name: 'TopicView'
})


</script>

<template>

  <!-- 简洁预览 -->
  <SimpleBrowse></SimpleBrowse>

  <!-- 专题头部 -->
  <TopicHeader></TopicHeader>

  <!-- 专题主体 -->
  <TopicChunk></TopicChunk>
  
  
</template>

<style scoped lang="scss">

</style>
