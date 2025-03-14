<!-- 最顶部风险提示 -->
<script setup lang="ts">
import { useRouter } from 'vue-router';


// 实现父 -> 子 标题更新
// 定义props类型
interface Props {
    title: string
    isMore?: boolean
}

const props = withDefaults(defineProps<Props>(),{
    title: '汇总列表',
    isMore: true
})

// 跳转页面
const router = useRouter()
const handleToOtherView = (view:string) => {
  switch (view) {
    case '热议专题':
      router.push({name: 'topic'})
      break;

    case '最新资讯':
      router.push({name: 'news'})
      break;

    case '精选文章':
      router.push({name: 'articles'})
      break;

    case '热门品种':
      router.push({name: 'market'})
      break;

  
    default:
      break;
  }
  
}

</script>

<template>
  <div class="topic-header">
      <div>{{ title }}</div>
      <a @click="handleToOtherView(title)" v-if="isMore"><span class="more">更多</span><el-icon><ArrowRight/></el-icon></a>
    </div>
</template>

<style scoped lang="scss">

.topic-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      font-size: 18px;
      font-weight: 700;
      background-image: url('@/assets//images/btc-icon.webp');
      background-position: -34px 0px;
      background-repeat: no-repeat;
    }
    a {
      font-size: 14px;
      color: #f0b90b;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        margin-right: 4px;
      }
    }
  }
</style>
