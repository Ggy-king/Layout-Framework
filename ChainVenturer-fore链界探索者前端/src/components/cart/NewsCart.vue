<!-- 快讯卡片 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
import { ref,onMounted } from 'vue'

import { getNewsDate } from '@/api/news'
import hooks from '@/utils/hooks'


const newsSimple = ref<Record<string,any>>()

const getNewsList = async(type:string) => {
    try {
        const res = await getNewsDate(type)
        newsSimple.value = res.data.data.map((item:Record<string,any>,index:number) => {
          const newItem = { ...item }
          newItem.timestamp = [
            '2分钟前','3分钟前','6分钟前','6分钟前','8分钟前',
            '13分钟前','17分钟前','18分钟前','19分钟前','22分钟前',
            '28分钟前','29分钟前','29分钟前','30分钟前','31分钟前',
            '33分钟前','37分钟前','40分钟前','41分钟前','54分钟前',
          ][index]
          return newItem
        })

    } catch (error) {
        hooks.message('快讯内容获取失败，请等待重试','error')
    }
}

onMounted(() => {
  getNewsList('last')
})
</script>

<template>
  
  <div class="news">
    <UniversalHead title="最新资讯" />

    <div class="news-main">
        <el-timeline style="max-width: 600px">
            <el-timeline-item
                v-for="(item, index) in newsSimple"
                :key="index"
                :timestamp="item.timestamp"
                hollow
                type="primary"
            >
            {{ item.title }}
        </el-timeline-item>
  </el-timeline>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news {
  width: 320px;
  .news-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      font-size: 18px;
      font-weight: 700;
      background-image: url('../../assets//images/btc-icon.webp');
      background-position: -34px 0px;
      background-repeat: no-repeat;
    }
    a {
      font-size: 14px;
      color: #f0b90b;
      display: flex;
      align-items: center;
      span {
        margin-right: 4px;
      }
    }
  }

  .news-main {
    .el-timeline-item {
        font-weight: 600;
    }
    ::v-deep(.el-timeline-item__node--primary) {
        border-color: #000;
    }
  }
  
}
</style>
