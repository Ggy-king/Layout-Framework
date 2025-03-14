<script setup lang="ts">
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue';
import SideRates from './SideRates.vue';
import CurrencyConverter from './CurrencyConverter.vue';
import PopularRates from './PopularRates.vue';
import RecentQueries from './RecentQueries.vue';
import ForeignCurrency from './ForeignCurrency.vue';

import { ref } from 'vue'

defineOptions({
    name: 'RatesView'
})

const list = ref()


</script>

<template>
  <PersonalizedStatement></PersonalizedStatement>
  
  
  <div class="rates">

    <!-- 汇率换算器 -->
    <CurrencyConverter></CurrencyConverter>
    <!-- 今日热门换算汇率 -->
    <PopularRates></PopularRates>
    <!-- 最近查询 -->
    <RecentQueries></RecentQueries>

    <!-- 外汇币种 -->
    <ForeignCurrency></ForeignCurrency>
      
    
    <!-- 侧边栏 -->
    <div class="side">
      <SideRates></SideRates>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rates {
  position: relative;
  width: 820px;
  .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
}


</style>
