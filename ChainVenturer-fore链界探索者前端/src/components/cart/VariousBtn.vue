<!-- 各种功能的小按钮 -->
<script setup lang="ts">
import { ref,onUnmounted } from 'vue'

// 定义props类型
interface Props {
    title?: string
    moreCount?: number
}

const props = withDefaults(defineProps<Props>(),{
    title: '加载更多内容',
    moreCount: 10
})

// 控制按钮是否禁止
const isDisabled = ref<boolean>(false)
let timer: number | null = null; // 用于存储定时器的 ID

// 定义emits
const emit = defineEmits(['message-more-essay'])


const handleEvents = (count:number) => {
    if (timer !== null) {
        clearTimeout(timer);
    }
    isDisabled.value = true;
    timer = setTimeout(() => {
      isDisabled.value = false;
    }, 2000);
  
    // 在这里添加其他点击后的逻辑处理
    emit('message-more-essay','更多文章加载中')
}

// 当组件卸载时清除定时器
onUnmounted(() => {
  if (timer !== null) {
    clearTimeout(timer)
  }
})



</script>

<template>
    <div class="is-more">
        <el-button 
            class="is-more-btn"
            color="#f2f3f5" 
            :disabled="isDisabled"
            @click="handleEvents(props.moreCount)"
        >{{ props.title }}</el-button>
    </div>
</template>

<style scoped lang="scss">
.is-more {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-btn {
      color: #89939e;
      font-weight: 600;
      letter-spacing: 2px;
      padding: 20px;
    }
}
</style>
