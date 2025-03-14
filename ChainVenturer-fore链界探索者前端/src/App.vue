<script setup lang="ts">
import { onMounted, onBeforeUnmount ,ref} from 'vue';
import {initialShowStore} from '@/stores'

const viewportHeight = ref<number>(window.innerHeight);
 

// 定时器与按钮是否可点击
const num = ref<number>(5);
const isDisabled = ref<boolean>(true)
let timerId: number | null = null;

const ChangeTimer = () => {
  timerId = window.setInterval(() => {
    if (num.value > 0) {
      num.value -= 1
      if(num.value === 0) isDisabled.value = false
    } else {
      clearInterval(timerId!)
      timerId = null
    }
  }, 1000);
}
const ClearChangeTimer = () => {
  if (timerId !== null) {
    clearInterval(timerId)
    timerId = null
  }
}

// 按钮点击关闭大组件 pinia

const initial = initialShowStore() // 创建实例 解构后会丢掉响应式 使用storeToRefs(initial)恢复响应式

const handleClickBtn = () => {
  initial.changeShow()
  console.log(initial.isMsgShow);
  
}


// 生命周期
onMounted(() => {
  ChangeTimer()
  
});
 
onBeforeUnmount(() => {
  ClearChangeTimer()
});

</script>

<template>

  <div class="initial" :style="{minHeight: `${viewportHeight}px`}" v-if="initial.isMsgShow">
    <div class="initial-show">
      <div class="initial-show-title">特别通知！！！</div>
      <p class="initial-show-content">
        本网站正马不停蹄开发中，因作者正忙于毕业，很多功能没有完善，并且服务器也是挂在国外，可能有一点卡，但功能及服务器肯定在未来一段内会解决。功能与后端马上上线，
        目前只支持在PC端访问
      </p>
      <el-button 
        class="initial-show-btn"
        color="#00b98c"
        :disabled="isDisabled"
        @click="handleClickBtn"
      >
          {{ num === 0?'':num }}&nbsp;知晓了
      </el-button>
    </div>
  </div>


  <router-view></router-view>
</template>

<style scoped lang="scss">

.initial {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  z-index: 999;
  &-show {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 420px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    &-title {
      margin-bottom: 6px;
      font-size: 18px;
      font-weight: 600;
      color: red;
    }
    &-content {
      text-indent: 2em;
      margin-bottom: 6px;

    }
    &-btn {
      float: right;
      padding: 4px;
      
    }
  }
}
</style>
