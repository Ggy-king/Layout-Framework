<!-- 文章主体 -->
<script setup lang="ts">
import SideHotCart from '@/components/cart/SideHotCart.vue';
import NewsCart from '@/components/cart/NewsCart.vue'
import MarkComment from './MarkComment.vue'
import RelatedReading from './RelatedReading.vue'

import noData from '@/assets/images/no-data.png'

import { onMounted,ref } from 'vue'
import { useRoute } from 'vue-router'

import { getEssayOne } from '@/api/essay'
import { getTopicEssay } from '@/api/topic'

// ------------获取文章
const route = useRoute()


const essayId = route.params.id
const essayList = ref<Record<string,any>>({})
const essayShow = ref<boolean>(false)
const handleToEssay = async (id:string) => {
    let res
    route.query.topic ?
    res = await getTopicEssay(route.query.topic as string) : res = await getEssayOne(id)
    
    essayList.value = res.data.data[0]
    essayList.value.currency = essayList.value.currency.join(" ")
    essayShow.value = true
}
onMounted(() => {
    handleToEssay(essayId as string)
})
</script>

<template>
    <div class="essay" v-if="essayShow">
        <header>
            <div class="title">{{ essayList.title }}</div>
            <div class="topic">
                <span class="topic-title"><b style="color: #ae782c;">探索者</b> > {{ essayList.topic }} > {{ essayList.technology }}</span>
                <span class="topic-currency">{{ essayList.currency }}</span>
                <span class="topic-timer">&nbsp;&nbsp;<strong>·</strong>&nbsp;&nbsp;{{ essayList.put_time }}</span>
            </div>
            <div class="summarize">
                <div class="summarize-title">摘要</div>
                <p class="summarize-main">{{ essayList.summarize }}</p>
            </div>
        </header>
        
        <main>
            <div class="essay-img">
                <img :src="essayList.imgPath" :alt="essayList.title">
            </div>
            <div class="essay-write" v-html="essayList.writeHtml">
            </div>
            
        </main>

        <!-- 评论区 -->
        <MarkComment />
        <!-- 相关阅读 -->
        <RelatedReading />

         <!-- 侧边栏 -->
         <div class="side">
            <SideHotCart title="精选文章" :type-index="0"/>
            <SideHotCart title="热门币种" :type-index="1"/>
            <NewsCart />
        </div>
    </div>
    
    <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，请等待一会或刷新一下吧！"
    />
</template>


<style scoped lang="scss">
.essay {
    position: relative;
    width: 820px;
    min-height: 3000px;

    header {
        .title {
            font-size: 32px;
            font-weight: 600;
            
        }
        .topic {
            margin: 14px 0;
            &-title {
                margin-right: 10px;
                
            }
            &-currency {
                font-weight: 600;
                color: #4378ff;
                background-color: #f0f4ff;
                padding: 2px 6px;
            }
            &-timer {
                color: #89939e;
            }
        }
        .summarize {
            margin-bottom: 30px;
            padding: 14px;
            border-radius: 10px;
            background-color: #f7f8fa;
            &-title {
                font-size: 18px;
                font-weight: 600;
                color: #4378ff;
                margin-bottom: 10px;

            }
            
        }
    }
    main {
        font-size: 16px;
        margin-bottom: 80px;
        .essay-img {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 30px;
            img {
                width: 100%;
                min-height: 200px;
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