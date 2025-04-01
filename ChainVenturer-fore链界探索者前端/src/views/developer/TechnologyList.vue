<script setup lang="ts">
import { ref,onMounted } from 'vue'

import project6 from '@/assets/images/my/project-6.png'

// 图片相关
const loading = ref<boolean>(true)
const imageSources = [project6]
// 通用图片加载器
const loadImage = (src:string) => new Promise((resolve, reject) => {
  const img = new Image()
  img.src = src
  img.onload = () => resolve(src)
})
const imageIsShow = async () => {
    try {
        await Promise.all(imageSources.map(src => loadImage(src)))
        loading.value = false
    } catch (error) {
        loading.value = true
    }
}

onMounted(() => {
    imageIsShow()
})

</script>


<template>
    <div class="project">
        <div class="center">
            <div class="head">
                <h2 class="head-title">技术展示 | emerging technologies</h2>
                <div class="head-info">只是想到了，罗列部分我熟悉甚至我认为熟练掌握的一些技术。天下语言一家亲，我觉得更重要的还有更多三方包的使用。</div>
                <div class="head-chunk">技术点 - Technical points</div>
            </div>
                <el-card>
                    <el-skeleton 
                        style="width: 850px; height: 485px"
                        :loading="loading"
                        animated
                        :throttle="500"
                    >
                        <template #template>
                            <el-skeleton-item variant="image" style="height: 100%" />
                        </template>
                        <template #default>
                            <img :src="project6" alt="技术栈">
                        </template>
                    </el-skeleton>
                </el-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project {
    padding: 90px 0;
    .center {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    .head {
        text-align: center;
        margin-bottom: 40px;
        &-title {
            font-size: 30px;
            color: #000;
        }
        &-info {
            margin: auto;
            margin-top: 10px;
            width: 600px;
            font-size: 16px;
        }
        &-chunk {
            margin: auto;
            margin-top: 20px;
            width: 200px;
            padding: 4px;
            color: #5c6e76;
            border: 1px solid #cad5e0;
            border-radius: 8px;
        }
        
    }
    .el-card {
            display: inline-block;
            margin: auto;
            margin-top: 10px;
            border-radius: 10px;
            :deep(.el-card__body) {
                padding: 20px;
            }
        }
   
}








</style>
