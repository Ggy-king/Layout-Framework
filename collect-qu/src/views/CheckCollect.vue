<template>
        <!-- 地址提示 -->
        <a-breadcrumb style="margin: 16px 0">
        <!-- <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>总资源库</a-breadcrumb-item> -->
        <HeaderList/>
        </a-breadcrumb>
        <!-- 主体部分 -->
        <div :style="{ padding: '10px', background: '#fff', minHeight: '600px',position:'relative' }">
          <MainList/>
        </div>

</template>
<script>
import { defineComponent } from 'vue';
import HeaderList from './check/HeaderList.vue';
import MainList from './check/MainList.vue';


export default defineComponent({
    name: "CheckCollect",
    components: { HeaderList, MainList }
});
</script>
<style>
</style>






