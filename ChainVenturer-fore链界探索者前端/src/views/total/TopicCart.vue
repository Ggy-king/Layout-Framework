<!-- 专题卡片 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
import { ref,onMounted } from 'vue'

import { UrlStore } from "@/stores"
import { getTopicData } from '@/api/total'
import { getEssayOne } from '@/api/essay'

// 获取数据
const topicList = ref<Record<string,any>>({})
const getTopicList = async () => {
  try {
    const res = await getTopicData()
    topicList.value = res.data.data[0]
  } catch (error) {
  }
}

// 跳转专题
const url = UrlStore()
const handleToTopic = (id:string) => {
  window.open(`${url.baseUrl}/essay?topic=${id}`)
//   router.push({name: 'essay',params: { id } })
}

onMounted(() => {
  getTopicList()
})
</script>

<template>
  <div class="topic">
    
    <UniversalHead title="热议专题"/>

    <div class="topic-main" @click="handleToTopic(topicList._id)">
      <img :src="topicList.imgPath" :alt="topicList.title">
      <div class="upper-info"></div>
      <div class="upper-info-title">{{ topicList.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic {
  width: 320px;
  .topic-header {
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

  .topic-main {
    position: relative;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      
    }
    .upper-info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40%;   
      background-color: #000;
      opacity: .5;
    }
    .upper-info-title {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40%;
      padding: 0 6px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;

    }
  }
}
</style>
