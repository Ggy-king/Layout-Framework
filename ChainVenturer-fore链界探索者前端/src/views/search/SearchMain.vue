<script setup lang="ts">

import SearchList from './SearchList.vue'

import { ref,watch,onMounted } from 'vue'
import { useRoute,useRouter,onBeforeRouteLeave } from 'vue-router'

import type { TabsPaneContext } from 'element-plus'

import noData from '@/assets/images/no-data.png'
import hooks from '@/utils/hooks'
import { postSearchAll } from '@/api/search'



defineOptions({
    name: 'TotalView'
})


// 搜索
const route = useRoute()
const router = useRouter()

const searchShow = ref<boolean>(true)
const searchList = ref<Record<string,any>>([])
const inputSearch = ref('')
const handleSearch = async () => {
    if(inputSearch.value.trim() === '') return hooks.message('请输入搜索内容','warning')
    router.push({query: {keyword: inputSearch.value}})

    try {
        const res = await postSearchAll(inputSearch.value)
        if(res.data.code === '3002') {
            hooks.message('搜索意外，服务端错误','error')
            searchShow.value = false
        }
        if(res.data.code === '3000') {
            searchList.value = res.data.data
            const isExist = searchList.value.articles.length + searchList.value.topics.length
            isExist? searchShow.value = true : searchShow.value = false
        }
    } catch (error) {
        
    }
    
}


// 监听一下参数变化，如果后期传数据会自动刷新则取消监听
watch(
    () => route.query.keyword,
    (newQuery,oldQuery) => {
        inputSearch.value = newQuery as string
    },
    { immediate: true }
)

// tab栏切换
const handleClick = (tab: TabsPaneContext, event: Event) => {
}

onMounted(() => {
    handleSearch()
})


</script>

<template>
    <div class="search">
        <!-- 搜索框 -->
        <el-input
            v-model="inputSearch"
            @keyup.enter="handleSearch"
            placeholder="请输入"
            class="input-with-select"
            >
            <template #append>
                <el-button @click="handleSearch">搜索</el-button>
            </template>
        </el-input>
        <div class="search-show" v-if="searchShow">
            <el-tabs @tab-click="handleClick" stretch>
                <el-tab-pane label="全部" :lazy="true">
                    <SearchList :searchList="searchList" :typeNum="0"/>
                </el-tab-pane>

                <el-tab-pane label="文章">
                    <SearchList :searchList="searchList" :typeNum="1"/>
                </el-tab-pane>

                <el-tab-pane label="专题">
                    <SearchList :searchList="searchList" :typeNum="2"/>
                </el-tab-pane>

                <el-tab-pane label="品种">
                    <SearchList :searchList="searchList" :typeNum="3"/>
                </el-tab-pane>

                <el-tab-pane label="快讯">
                    <SearchList :searchList="searchList" :typeNum="4"/>
                </el-tab-pane>

            </el-tabs>
        </div>
        <el-empty 
            v-else 
            style="--el-empty-padding: 40px 0 40px;min-height: 600px;"
            :image-size="600" 
            :image="noData"
            description="没有相关内容哦，请换个关键词搜索吧！比如“交易所"
        />
    </div>

    

</template>

<style scoped lang="scss">
.el-input {
    font-size: 16px;
    width: 800px;
    height: 50px;
    margin-top: 4px;
    --el-input-placeholder-color: #70757b;
    --el-input-text-color: #000;
    --el-input-bg-color: #f1f2f3;
    --el-input-border-color: #f1f2f3;
    --el-input-focus-border-color: #00aeec;
    --el-input-hover-border-color: #f1f2f3;
    --el-input-focus-bg-color: #fff;
    .el-button {
        width: 100px;
        height: 100%;
        background-color: #4378ff;
        font-weight: 600;
        color: #fff;
    }
    .el-button:hover {
        background-color: #5f8bfb;
        color: #fff;
    }
}
.search {
    .el-tabs {
        width: 820px;
        margin-top: 20px;
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

        :deep(.el-tabs__content) {
            min-height: 800px;
        }

    }
    
}

</style>
