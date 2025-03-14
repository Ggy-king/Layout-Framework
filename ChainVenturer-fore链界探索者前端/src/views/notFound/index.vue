<script setup lang="ts">
import notFound from '@/assets/images/404.png'
import { useRouter } from 'vue-router';

defineOptions({
    name: 'NotFound'
})
const router = useRouter()
const handleToHome = () => {
    router.push({name: 'total'})
}

</script>

<template>
    <div style="height: 630px;">
    
    </div>
    <div class="found">
        <img :src="notFound" alt="404"><br/>
        <el-button @click="handleToHome" round>返回首页</el-button>
    </div>
</template>

<style scoped lang="scss">
.found {
    position: absolute;
    height: 750px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #7bc8f4;
    text-align: center;
    img {
        width: 1200px;
        margin-top: 90px;
    }
    .el-button {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        padding: 22px;
        background-color: #1f1a17;
        border: none;
    } 
}
</style>
