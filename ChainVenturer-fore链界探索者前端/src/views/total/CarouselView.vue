<script setup lang="ts">
import { onMounted , ref } from 'vue';

import { getCarouselImg } from '@/api/total'
import { UrlStore } from '@/stores'

interface ImgObject {
  _id: string,
  imgPath: string,
  title: string
}
const imgPath = ref<ImgObject[]>([])

const getCarouseDate = async () => {
  try {
    const res = await getCarouselImg()
    imgPath.value = res.data.data
    
  } catch (error) {
    console.log('错误')
  }
}

// 跳转文章
const url = UrlStore()
const handleToEssay = (id:string) => {
    window.open(`${url.baseUrl}/essay/${id}`)
}

// 图片加载器
const loading = ref<boolean>(true)
const handleImageLoad = () => {
    loading.value = false
}


onMounted(() => {
  getCarouseDate()
})

</script>

<template>
  <!-- 轮播图 -->
  <div class="block text-center">
    <el-carousel height="260px" :motion-blur="true">
      <el-carousel-item v-for="i in imgPath" :key="i._id">
        <el-skeleton 
          style="height: 260px;"
          :loading="loading"
          animated
          :throttle="1000"
        >
          <template #template>
              <el-skeleton-item variant="image" style="height: 100%" />
          </template>
          <template #default>
            <img 
              :src="i.imgPath" 
              :alt="i.title" 
              :title="i.title"
              @click="handleToEssay(i._id)"
              @load="handleImageLoad"
            >
          </template>
        </el-skeleton>
        
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.el-carousel {
  margin: 14px 6px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  .el-carousel__arrow {  
    color: pink;
  }

  .el-carousel__item {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
