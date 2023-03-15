<template>
    <!-- 地址提示 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>PDF收题体统</a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 主体部分 -->
      <div :style="{ padding: '10px', background: '#fff', minHeight: '1000px',position:'relative' }">
        <StepsB />
        <PdfData />
        <PdfShow />
  </div>
        

</template>
<script>
import { defineComponent } from 'vue';
import StepsB from './pdfup/StepsB.vue';
import PdfData from './pdfup/PdfData.vue';
import PdfShow from './pdfup/PdfShow.vue';

export default defineComponent({
    name: "ImgUpload",
    components: { 
      StepsB, 
      PdfData,
      PdfShow
    }
});

</script>
<style lang="scss">

</style>