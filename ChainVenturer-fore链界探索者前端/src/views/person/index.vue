<script setup lang="ts">
import ArticleList from '@/components/widgets/ArticleList.vue'

import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

import type { TabsPaneContext } from 'element-plus'
import type { Ref } from 'vue'

import { getPersonArticle } from '@/api/articles'
import { getCollectEssay } from '@/api/essay'

import noData from '@/assets/images/no-data.png'

defineOptions({
    name: 'PersonCenter'
})

// --------tab栏切换
const index: Ref<number> = ref(0)

const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
//   index.value = Number(tab.index)
    console.log(tab.index);
    if(tab.index === '1') {
        handleCollectList()
    }
}

// -----------个人中心和用户设置切换
const route = useRoute()

// 渲染用户个人文章
const personList = ref<any>([])
const handleArticlesList = async () => {
  const res = await getPersonArticle()
  personList.value = res.data.data 
}
const handleDeleteCurrent = (payload:{ listIndex: number}) => {
    personList.value.splice(payload.listIndex,1)
}


// 渲染用户收藏文章
const collectList = ref<any>([])
const handleCollectList = async () => {
    const res = await getCollectEssay()
    collectList.value = res.data.data
}

onMounted(() => {
    handleArticlesList()
})

</script>

<template>
  <div class="person">
        <!-- 搜索框 -->
        <div style="font-size: 20px;font-weight: 600;color: #ae782c;">个人中心</div>
        <div 
            class="person-show" 
            v-if="route.query.mode === 'user' || route.fullPath === '/person'"
        >
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="已发布文章" name="first" :lazy="true">
                    <ArticleList
                        v-if="personList.length"
                        :list="personList" 
                        :isModify="true" 
                        @update-essay="handleDeleteCurrent" 
                    />
                    <el-empty 
                        v-else 
                        style="--el-empty-padding: 40px 0 40px;"
                        :image-size="500" 
                        :image="noData"
                        description="您没有发布过文章哦，请去创作一篇吧！"
                    />
                </el-tab-pane>

                <el-tab-pane label="个人收藏" name="second" >
                    <ArticleList
                        v-if="collectList.length"
                        :list="collectList" 
                    />
                    <el-empty 
                        v-else 
                        style="--el-empty-padding: 40px 0 40px;"
                        :image-size="500" 
                        :image="noData"
                        description="您还没有收藏呢，快快去收藏宝贝吧！"
                    />
                </el-tab-pane>

            </el-tabs>
        </div>

        <div class="person-show" v-if="route.query.mode === 'set'">
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="账户修改" name="first" :lazy="true">
                    后续完善3

                </el-tab-pane>

                <el-tab-pane label="Bug反馈" name="second" >
                    后续完善4

                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<style scoped lang="scss">
.person {
    .el-tabs {
        width: 820px;
        :deep(.el-tabs__item) {
            font-size: 16px;
            font-weight: 600;
            color: #4e5662;
        &:hover {
            color: #000;
        }
        }
        :deep(.el-tabs__active-bar){
            background-color: #FFD700;
        }
        :deep(.is-active) {
            color: #000;
        }
        :deep(.el-tabs__content) {
            min-height: 800px;
        }

    }
}
</style>
