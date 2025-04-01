<!-- 多数文章跳转页面 -->
<script setup lang="ts">
import PersonalizedStatement from '@/components/cart/PersonalizedStatement.vue'
import EssayShow from './EssayShow.vue'

defineOptions({
    name: 'EssayView'
})

</script>

<template>
    <!-- 个性语句 -->
    <PersonalizedStatement />

    <!-- 文章展示 -->
    <EssayShow /> 
    
</template>


<style scoped lang="scss">


</style>