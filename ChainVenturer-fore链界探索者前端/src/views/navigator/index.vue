<script setup lang="ts">
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue';
import NavCart from './NavCart.vue'
import AnchorPoint from './AnchorPoint.vue'

import noData from '@/assets/images/no-data.png'

import {ref,onMounted} from 'vue'
import { getNavigatorData } from '@/api/navigator'
import hooks from '@/utils/hooks';

defineOptions({
    name: 'NavigatorView'
})

// 获取数据
const navList = ref<Record<string,any>>([])
const navShow = ref<boolean>(false)
const getNavigatorList = async () => {
    try {
        const res = await getNavigatorData()
        if(res.data.code === '3002') hooks.message('服务端错误，请联系开发者','error')
        if(res.data.code === '3000') {
          navList.value = res.data.data
          navShow.value = true
        }
    } catch (error) {
      hooks.message('请求数据错误！请联系开发者','error')
    }
}

onMounted(() => {
  getNavigatorList()
})

</script>

<template>
  
      
  <div style="position: relative;" v-if="navShow">
    <!-- 个性语录 -->
    <PersonalizedStatement />

    <!-- 导航卡片 -->
    <div class="tip">注意，该页面的所有链接来自于网络，收录时均合法合规。后期网页内容如出现违规，可以联系开发者删除，如出现问题本站概不承担任何责任！点击页面任何卡片都视为您自动同意此条例！</div>

    <!-- 热门 -->
    <span id="one"></span>
    <NavCart 
      title="AI智能财金"
      :navList="navList" 
      :db="0"
      firstKind="财务税务"
      secondKind="数据分析"
      thirdKind="AI服务"
    />

    <!-- 总览数据 -->
    <span id="two"></span>
    <NavCart 
      title="证券理财网"
      :navList="navList" 
      :db="1"
      firstKind="财经资讯"
      secondKind="股票投资"
      thirdKind="外汇相关"
    />

    <!-- 非同质化代币 -->
    <span id="three"></span>
    <NavCart 
      title="财经资讯服务"
      :navList="navList" 
      :db="2"
      firstKind="财经新闻"
      secondKind="金融知识"
      thirdKind="国际财经"
    />

    <!-- 去中心化 -->
    <NavCart 
      title="DAO工具"
      :navList="navList" 
      :db="3"
      firstKind="投票"
      secondKind="社区"
      thirdKind="统计"
    />

    <!-- 跨链桥 -->
    <span id="five"></span>
    <NavCart
      title="DeFi数据"
      :navList="navList" 
      :db="4"
      firstKind="分析"
      secondKind="工具"
      thirdKind="DEX"
    />

    <!-- 学习 -->
    <span id="six"></span>
    <NavCart 
      title="AI模型与工具"
      :navList="navList" 
      :db="5"
      firstKind="模型及平台"
      secondKind="辅助编程"
      thirdKind="资源工具"
    />

    <!-- 行情数据 -->
    <span id="seven"></span>
    <NavCart 
      title="编程辅助相关"
      :navList="navList" 
      :db="6"
      firstKind="编程助手与工具"
      secondKind="测试分析"
      thirdKind="引擎"
    />

    <!-- 锚点链接 -->
    <AnchorPoint />
  </div>
  <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，请等待一会或刷新一下吧！"
    />
</template>

<style scoped lang="scss">
.tip {
  color: #89939E;
  margin-bottom: 10px;
}
</style>
