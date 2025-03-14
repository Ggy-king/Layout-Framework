<!-- 标签式浏览内容页面 -->

<script setup lang="ts">
import ArticleList from '@/components/widgets/ArticleList.vue'

import { onMounted,ref } from 'vue'
import { getArticlesData } from '@/api/articles'

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()

// --------------获取文章列表
const list = ref<any>([])
const handleArticlesList = async () => {
  const res = await getArticlesData(1,18)
  list.value = res.data.data
}

onMounted(() => {
  handleArticlesList()
})

</script>

<template>

    <header>
        <strong>文章总汇</strong>
        <span>链接探索者实时更新：{{ year }}-{{ month }}-{{ day }}</span>
    </header>
    
    <!-- 文章列表 -->
    <ArticleList :list="list" :isModify="false"/>

</template>

<style scoped lang="scss">
header {
    width: 820px;
    border-bottom: 1px solid #ffd702;
    padding: 10px;
    strong {
        font-size: 18px;
    }
    span {
        float: right;
        color: #89939e;
    }
}

</style>
