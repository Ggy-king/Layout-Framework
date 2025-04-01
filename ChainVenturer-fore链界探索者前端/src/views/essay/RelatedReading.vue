<!-- 相关阅读 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
import ArticleList from '@/components/widgets/ArticleList.vue'

import { onMounted,ref } from 'vue'
import { getAboutArticles } from '@/api/articles'

// 接受数据topic
const props = withDefaults(defineProps<{
    topic: string
}>(),{
    topic: '出错'
})

// 发送请求
const list = ref<any>([])
const handleArticlesList = async () => {
  const res = await getAboutArticles(props.topic,4)
  list.value = res.data.data
}

onMounted(() => {
  handleArticlesList()
})

</script>

<template>
   <div class="related">
    <!-- 头部 -->
    <UniversalHead title="相关阅读" :is-more="false"/>

    <!-- 文章列表 -->
    <ArticleList :list="list" :isModify="false"/>
   </div>
</template>


<style scoped lang="scss">
.related {
    margin-top: 60px;
}


</style>