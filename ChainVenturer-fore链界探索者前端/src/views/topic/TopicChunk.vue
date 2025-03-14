<!-- 专题块 -->

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import noData from '@/assets/images/no-data.png'

import { UrlStore } from '@/stores'
import { getTopicDate } from '@/api/topic'
import hooks from '@/utils/hooks';

const topicList = ref<any>({})
const topicShow = ref<boolean>(false)
const getTopicInit = async () => {
    try {
        const res = await getTopicDate()
        if(res.data.code === '3000') {
            topicList.value = res.data.data
            topicShow.value = true
        }
        if(res.data.code === '3002') hooks.message('专题模块数据获取失败,稍后重试','error')
    } catch (error) {
        hooks.message('数据加载出错，刷新重试','error')
    }
}

const url = UrlStore()
const handleToEssay = (id:string) => {
    window.open(`${url.baseUrl}/essay/${id}`)
//   router.push({name: 'essay',params: { id } })
}
const handleToTopic = (id:string) => {
    window.open(`${url.baseUrl}/essay?topic=${id}`)
//   router.push({name: 'essay',params: { id } })
}

onMounted(() => {
    getTopicInit()
})
</script>

<template>
    <ul class="chunk" v-if="topicShow">
        <li v-for="(item,index) in topicList" :key="index">
            <header>{{ item.subject }}</header>
            <main>
                <div class="topic-info">
                    <img :src="item.main.imgPath" :alt="item.main.title" @click="handleToTopic(item.main._id)">
                    <div class="title"  @click="handleToTopic(item.main._id)">{{ item.main.title }}</div>
                    <div class="info ellipsis3">
                        {{ item.main.summarize }}
                    </div>
                    <span>
                        <div><el-icon><Timer /></el-icon> {{ item.main.put_time }}</div>
                        <div>{{ item.main.topic }}</div>
                    </span>
                </div>

                <ul class="topic-list">
                    <li v-for="i in item.list" :key="i._id">
                        <img :src="i.imgPath" :alt="i.title" @click="handleToEssay(i._id)">
                        <div class="list-info">
                            <div class="list-info-title" @click="handleToEssay(i._id)">{{ i.title }}</div>
                            <div class="list-info-dir ellipsis">{{ i.summarize }}</div>
                            <div class="list-info-date">
                                {{ i.put_time }}
                            </div>
                            <el-tag
                                effect="dark"
                                color="#f4f4f5"
                            >
                                    {{ i.topic }}
                            </el-tag>
                        </div>
                    </li>
                </ul>
            </main>
        </li>
    </ul>

    <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，请等待一会或刷新一下吧！"
    />
</template>

<style scoped lang="scss">
    .chunk {
        width: 100%;
        margin-bottom: 24px;
        min-height: 500px;
        li {
            height: 500px;
            box-sizing: border-box;
            margin-bottom: 40px;
            header {
                height: 80px;
                font-size: 32px;
                font-weight: 700;
                color: #000;
                line-height: 80px;

            }
            main {
                display: flex;
                height: 420px;
                .topic-info {
                    position: relative;
                    border: 1px solid #ccc;
                    padding: 14px;
                    border-radius: 20px;
                    
                    img {
                        height: 180px;
                        width: 100%;
                        border-radius: 10px;
                        cursor: pointer;
                    }
                    .title {
                        height: 70px;
                        margin: 10px 0;
                        overflow: hidden;
                        font-size: 20px;
                        font-weight: 600;
                        color: #000;
                        cursor: pointer;
                    }
                    .title:hover {
                        color: #ae782c;
                    }
                    .info {
                        height: 74px;
                        padding: 6px 2px;
                        line-height: 22px;
                        font-size: 14px;
                        color: #5b7187;
                        text-indent: 2em;
                        background-color: #fffbeb;
                        border-radius: 10px;
                    }
                    span {
                        position: absolute;
                        bottom: 14px;
                        left: 18px;
                        display: flex;
                        width: 340px;
                        justify-content: space-between;
                        color: #5b7187;

                        div:first-child {
                            font-size: 13px;
                        }
                        div:last-child {
                            padding: 0 8px;
                            border-radius: 8px;
                            color: #e96868;
                            background-color: #fef0f0;
                        }

                    }
                }
                .topic-list {
                    padding: 0 14px;
                    li {
                        width: 800px;
                        height: 138px;
                        display: flex;
                        align-items: center;
                        word-break: break-all;
                        border-bottom: 1px solid #ccc;
                        margin: 0;
                        img {
                            height: 118px;
                            width: 200px;
                            margin-right: 10px;
                            cursor: pointer;
                        }
                        .list-info {
                            position: relative;
                            width: 590px;
                            height: 120px;
                            border-left: 1px solid #ccc;
                            padding: 0 10px;
                            &-title {
                                font-size: 18px;
                                font-weight: 600;
                                cursor: pointer;
                            }
                            &-title:hover {
                                color: #ae782c;
                            }
                            &-dir {
                                height: 24px;
                                color: #5b7187;
                                margin-top: 4px;
                            }
                            &-date {
                                position: absolute;
                                bottom: 0;
                                font-size: 12px;
                                color: #878b99;
                            }
                            .el-tag {
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                border: none;
                                border-radius: 0;
                                color: #878b99;
                            }

                        }
                    }

                    li:last-child {
                        border: none;
                    }

                }
            }
        }
    }
</style>
