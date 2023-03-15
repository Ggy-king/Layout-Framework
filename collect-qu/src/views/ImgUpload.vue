<template>

      <!-- 地址提示 -->
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>IMG收题系统</a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 主体部分 -->
      <div :style="{ padding: '10px', background: '#fff', minHeight: '800px',position: 'relative' }">
          <ImgSearch />
          <StepsA />
          <ImgUp />
          <ImgRight />
      </div>

  
</template>
<script>
import { defineComponent } from 'vue';
import ImgUp from './imgup/ImgUp.vue';
import StepsA from './imgup/StepsA.vue';
import ImgSearch from './imgup/ImgSearch.vue';
import ImgRight from './imgup/ImgRight.vue';
// 公共组件

export default defineComponent({
    name: "PdfUpload",
    components: { StepsA, ImgUp, ImgSearch, ImgRight }
});

</script>
<style>
</style>