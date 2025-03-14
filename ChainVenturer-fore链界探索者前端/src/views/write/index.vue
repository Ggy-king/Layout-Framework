<script setup lang="ts">
import WriteCom from './WriteCom.vue'
import WriteSummary from './WriteSummary.vue'

import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { getPersonArticle } from '@/api/articles'
import noData from '@/assets/images/no-data.png'

defineOptions({
    name: 'WriteView'
})

// ---------------获取文章进行回显
const isShow = ref<boolean>(false)

const route = useRoute()
const essayId = route.params.id
const essayList = ref<Record<string,any>>({})
const handleToEssay = async (id:string) => {
  const res = await getPersonArticle(id)
  essayList.value = res.data.data[0]
  isShow.value = true
}

onMounted(() => {
  if(essayId) {
    handleToEssay(essayId as string)
  } else {
    isShow.value = true
  }
})

</script>

<template>
  <div class="write">
    <!-- 书写主体 -->
    <WriteCom v-if="isShow" :writeHtml="essayList.writeHtml"/>

    <!-- 书写后的表单 -->
    <WriteSummary v-if="isShow" :essayFrom="essayList"/>

    <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，或者是您探索到了未知秘密"
    />
  </div>
    
</template>

<style scoped lang="scss">


.write {
  width: 1200px;
  min-height: 800px;
}

</style>
