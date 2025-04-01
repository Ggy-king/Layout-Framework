<script setup lang="ts">
import LabelBrowse from './LabelBrowse.vue'
import VariousBtn from '@/components/cart/VariousBtn.vue'

import { ref , onMounted } from 'vue'

import type { TabsPaneContext } from 'element-plus'

import { getVariousEssay } from '@/api/total.js'
import hooks from '@/utils/hooks'

defineOptions({
    name: 'TotalView'
})


/**
 * tabs栏切换
 * - 获取数据
 * - 实现切换
 */

const essayList = ref<string[]>([])
const essayType = ref<string>('')
const getTabsList = async(type: string , value?: string) => {
  try {
      const res = await getVariousEssay(type,value as string)
      essayList.value = res.data.data
      essayType.value = type
  } catch (error) {
    hooks.message('获取出错，请重试','error')
  }
}


const activeName = ref('first')
const handleTabClick = (tab: TabsPaneContext, event: Event) => {
  switch (tab.index) {
    case '0':
      getTabsList('hot')
      break;
    case '1':
      getTabsList('topic',tab.props.label)
      break;
    case '2':
      getTabsList('topic',tab.props.label)
      break;
    case '3':
      getTabsList('technology',tab.props.label)
      break;
    case '4':
      getTabsList('technology',tab.props.label)
      break;
    case '5':
      getTabsList('currency',tab.props.name as string)
      break;
  
    default:
      getTabsList('hot',tab.props.label)
      break;
  }
  
}

// 获取更多文章
const handleMoreEssay = (more:string) => {
  console.log(more)
  hooks.message('对不起，暂时没有那么多的数据','warning')
}



onMounted(() => {
  getTabsList('hot')
})

</script>

<template>
  <!-- 标签页 主体内容 -->
  <el-tabs v-model="activeName" @tab-click="handleTabClick" stretch>
    <el-tab-pane label="最热" name="first">
      <LabelBrowse :essayList="essayList" :essayType="essayType" />
      <VariousBtn @message-more-essay="handleMoreEssay"/>
    </el-tab-pane>

    <el-tab-pane label="交易心得" name="second" :lazy="true">
      <LabelBrowse :essayList="essayList" :essayType="essayType" />
      <VariousBtn @message-more-essay="handleMoreEssay" />
    </el-tab-pane>

    <el-tab-pane label="期货品种分析" name="fifth" :lazy="true">
      <LabelBrowse :essayList="essayList" :essayType="essayType" />
      <VariousBtn @message-more-essay="handleMoreEssay" />
    </el-tab-pane>

    <el-tab-pane label="人工智能" name="third" :lazy="true">
      <LabelBrowse :essayList="essayList" :essayType="essayType" />
      <VariousBtn @message-more-essay="handleMoreEssay" />
    </el-tab-pane>

    <el-tab-pane label="大数据" name="fourth" :lazy="true">
      <LabelBrowse :essayList="essayList" :essayType="essayType" />
      <VariousBtn @message-more-essay="handleMoreEssay" />
    </el-tab-pane>

    <el-tab-pane label="化工期货" name="化工" :lazy="true">
      <LabelBrowse :essayList="essayList" :essayType="essayType" />
      <VariousBtn @message-more-essay="handleMoreEssay" />
    </el-tab-pane>

  </el-tabs>
  
</template>

<style scoped lang="scss">

.el-tabs {
  width: 820px;

  :deep(.el-tabs__nav-scroll){
    padding-right: 200px;
    border-bottom: none;
    .el-tabs__item {
      font-size: 14px;
      font-weight: 600;
      color: #4e5662;
      &:hover {
        color: #000;
      }
    }
    .el-tabs__active-bar {
      background-color: #f7d049;
    }
    .is-active {
      color: #000;
    }

  }

  :deep(.el-tabs__nav-wrap:after){
    height: 1px;
  }

  
}

</style>
