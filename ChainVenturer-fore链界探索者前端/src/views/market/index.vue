<script setup lang="ts">
import SimpleBrowse from '@/components/cart/SimpleBrowse.vue';
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue';
import ChartOverview from './ChartOverview.vue';
import DetailView from './DetailView.vue';


defineOptions({
    name: 'MarketView'
})


</script>

<template>
  <!-- 简洁浏览 -->
  <SimpleBrowse></SimpleBrowse>

  <!-- 个性语句 -->
  <PersonalizedStatement></PersonalizedStatement>

  <!-- 图表总览 -->
  <ChartOverview></ChartOverview>

  <!-- 详细列表 -->
  <DetailView></DetailView>
</template>

<style scoped lang="scss">

</style>
