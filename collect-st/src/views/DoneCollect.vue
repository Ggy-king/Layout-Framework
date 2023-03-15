<template>
    <!-- 地址提示 -->
    <a-breadcrumb style="margin: 16px 0">
    <!-- <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item>已收藏的题目</a-breadcrumb-item> -->
    <MySearch />
    </a-breadcrumb>
    <!-- 主体部分 -->
    <div :style="{ minHeight: '680px' }" class="bgc">
        <MyMainList />
    </div>

</template>
<script>
import { defineComponent } from 'vue';
import MySearch from './done/MySearch.vue';
import MyMainList from './done/MyMainList.vue';



export default defineComponent({
    name: "DoneCollect",
    components: { MySearch, MyMainList }
});
</script>
<style lang="scss">
.bgc {
    // background: linear-gradient(to bottom right, #9FA5D5, #E8F5C8)
    background-color: #fff;
}
</style>






