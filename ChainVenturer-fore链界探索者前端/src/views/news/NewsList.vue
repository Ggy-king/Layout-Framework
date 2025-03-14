<!-- 快讯列表 -->

<script setup lang="ts">
import ButtonDecoration from './ButtonDecoration.vue'
import SideHotCart from '@/components/cart/SideHotCart.vue'

import { ref,onMounted } from 'vue'
import noData from '@/assets/images/no-data.png'

import { CaretRight } from '@element-plus/icons-vue'
import { getNewsDate } from '@/api/news'
import hooks from '@/utils/hooks'

// 进度条
const format:(n:number) => void = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

// 获取快讯新闻
const newsList = ref<Record<string,any>>([])
const newsShow = ref<boolean>(false)

const getNewsList = async(type:string) => {
    try {
        const res = await getNewsDate(type)
        if(res.data.code === '3002') hooks.message('服务端错误，请联系开发者或刷新','error')
        if(res.data.code === '3000') {
            newsList.value = res.data.data
            newsShow.value = true
        }
        
    } catch (error) {
        hooks.message('快讯内容获取失败，请等待重试','error')
    }
}

onMounted(() => {
    getNewsList('last')
    
})

// 切换小标签背景色
const bgcColor = ref<string>('#3d5b99')
const text = ref<string>('最新')

const switchBgcColor = (num:number) => {
    switch (num) {
        case 1:
            bgcColor.value = '#3d5b99'
            text.value = '最新'
            getNewsList('last')
            break;
        case 2:
            bgcColor.value = '#dc4c3a'
            text.value = '领域'
            getNewsList('topic')
            break;
        case 3:
            bgcColor.value = '#03b0f0'
            text.value = '金融'
            getNewsList('currency')
            break;
        case 4:
            bgcColor.value = '#c003ff'
            text.value = '技术'
            getNewsList('technology')
            break;
    }
}

// 日期
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()

</script>

<template>
    <div class="news" v-if="newsShow">
        <!-- 快讯头部 -->
        <div class="news-head">
            <ButtonDecoration @changeBtn="switchBgcColor"></ButtonDecoration>
        </div>


        <div class="news-main">
            <div class="date">链接探索者独家汇报
                <span>{{ year }} - {{ month }} - {{ day }}</span>
            </div>

            <!-- 小进度条 -->
            <el-progress
                :percentage="100"
                color="#f23f58"
                :indeterminate="true"
                :duration="15"
                :stroke-width="2"
                :text-inside="true"
                :format="format"
                >
                <span></span>
            </el-progress>

            <!-- 时间线展示 -->
            <el-timeline>

                <el-timeline-item
                    v-for="(i,index) in newsList"
                    :key="index"
                    :timestamp="i.put_time"
                    :icon="CaretRight"
                    color="#000"
                    hide-timestamp
                    >
                    <div class="news-title">
                        <i :style="{backgroundColor: bgcColor}">{{ text }}</i>{{ i.title }}
                    </div>
                    <el-card class="news-main">
                        <p>{{ i.summarize }}</p>
                    </el-card>
                    <div class="news-date">
                        <el-icon><Clock /></el-icon>
                        <span>{{ i.put_time }}</span>
                        <span :style="{color: bgcColor}">{{ i.topic || i.currency?.join(" ") || i.technology || '链界实时快报' }}</span>
                    </div>
                </el-timeline-item>

            </el-timeline>
        </div>


        <!-- 侧边栏 -->
        <div class="side">
            <SideHotCart title="精选文章" :type-index="0"/>
            <SideHotCart title="热门币种" :type-index="1"/>
        </div>
    </div>

    <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，或者是您探索到了未知秘密"
    />
</template>

<style scoped lang="scss">
.news {
    position: relative;
    width: 820px;
    min-height: 1500px;
    &-head {
        padding-bottom: 20px;
        background-color: #fff;
        border-radius: 20px;
    }
    &-main {
        .date {
            color: #ffd700;
            font-style: italic;
            text-indent: 1em;
            
            span {
                float: right;
            }
        }
        .el-progress {
            margin: 4px 0 20px;
        }
        .el-timeline {
            margin-left: 4px;
            .news-title{
                font-size: 18px;
                font-weight: 600;
                i {
                    font-size: 12px;
                    font-style: normal;
                    padding: 4px;
                    margin-right: 10px;
                    color: #fff;
                    border-radius: 8px;
                }
            }
            .news-main {
                margin: 10px 0;
                line-height: 26px;
                letter-spacing: .5px;
                color: #59636D;
            }
            .news-date{
                display: flex;
                justify-content: start;
                align-items: center;
                margin-bottom: 20px;
                :first-child {
                    color: #ffd700;
                    font-size: 18px;
                }
                :nth-child(2) {
                    margin-left: 10px;
                    margin-right: 10px;
                    font-size: 12px;
                }
                span:last-child {
                    padding: 0 10px;
                    font-weight: 600;
                    background-color: #eff2f5;
                }

            }

        }
    }


    .side {
        position: absolute;
        top: 0;
        right: -380px;
    }
    
}
</style>
