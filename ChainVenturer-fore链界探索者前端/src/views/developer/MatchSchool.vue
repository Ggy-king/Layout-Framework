<script setup lang="ts">
import { ref,onMounted } from 'vue'


import match1 from '@/assets/images/my/match-1.jpg'
import match2 from '@/assets/images/my/match-2.jpg'
import match3 from '@/assets/images/my/match-3.png'
import match4 from '@/assets/images/my/match-4.png'
import match5 from '@/assets/images/my/match-5.png'
import match6 from '@/assets/images/my/match-6.png'


const urlList = [
    match1,
    match2,
    match3,
    match4,
    match5,
    match6
]

// 图片相关
const loading = ref<boolean>(true)

// 通用图片加载器
const loadImage = (src:string) => new Promise((resolve, reject) => {
  const img = new Image()
  img.src = src
  img.onload = () => resolve(src)
})
const imageIsShow = async () => {
    try {
        await Promise.all(urlList.map(src => loadImage(src)))
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
    <div class="match">
        <div class="center">
            <div class="match-title">展示校园荣誉 | Showcasing campus honors</div>
            <div class="match-info">虽然不值一提，但还是喜欢记录一下(Although it's not worth mentioning, I still like to record it)</div>
            <div class="match-img">
                <el-skeleton 
                    style="width: 100%;height: 150px;"
                    :loading="loading"
                    animated
                    :throttle="500"
                >
                    <template #template>
                        <div class="match-img-skeleton">
                            <el-skeleton-item v-for="i in 6" variant="image" style="width: 150px;height: 150px;"/>
                        </div>
                    </template>
                    <template #default>
                        <el-image
                            v-for="i in urlList" 
                            :key="i"
                            style="width: 150px; height: 150px;margin-left: 10px;"
                            :src="i"
                            :zoom-rate="1.2"
                            :max-scale="7"
                            :min-scale="0.2"
                            :preview-src-list="urlList"
                            :initial-index="urlList.indexOf(i)"
                            fit="cover"
                        />
                    </template>
                </el-skeleton>
                
            </div>
            <div class="match-bottom">其实好多奖，好多经历都已经不记得了，人这一生总是很匆忙</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.match {
    height: 600px;
    background-color: #1c2a3a;
    text-align: center;
    padding-top: 100px;
    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 1000px;
        height: 400px;
        margin: 0 auto;
        border: 2px solid #3e64ff;
        border-radius: 20px; /* 设置圆角 */

    }

    &-title {
        font-size: 30px;
        color: #fff;
    }
    &-info {
        margin-top: 10px;
        font-size: 16px;
        color: #e1e5e5;
    }
    &-img {
        margin-top: 40px;
        &-skeleton {
            display: flex;
            justify-content: space-around;
            margin: 0 20px;
        }
    }
    &-bottom {
        color: #e1e5e5;
        margin-top: 40px;
    }
    .demo-image__error .image-slot {
        font-size: 30px;
    }
    .demo-image__error .image-slot .el-icon {
        font-size: 30px;
    }
    .demo-image__error .el-image {
        width: 100%;
        height: 200px;
    }
}



</style>
