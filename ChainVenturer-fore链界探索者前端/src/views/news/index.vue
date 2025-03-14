<script setup lang="ts">
import SimpleBrowse from '@/components/cart/SimpleBrowse.vue';
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue';
import NewsList from './NewsList.vue';

defineOptions({
    name: 'NewsView'
})


</script>

<template>
  <!-- 简洁预览 -->
  <SimpleBrowse></SimpleBrowse>

  <!-- 个性语句 -->
  <PersonalizedStatement></PersonalizedStatement>

  <!-- 快讯列表 -->
  <NewsList></NewsList>


</template>

<style scoped lang="scss">

</style>
