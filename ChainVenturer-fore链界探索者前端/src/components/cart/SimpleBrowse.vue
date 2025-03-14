<!-- 简洁浏览   -->

<script setup lang="ts">
import hooks from '@/utils/hooks'
import {  ref } from 'vue'

import { getContractSimple } from '@/api/market'
import { onMounted } from 'vue'

const browseList = ref<Record<string,any>>([])
const browseShow = ref<boolean>(false)
const getContractList = async () => {
  try {
    const res = await getContractSimple()
    if(res.data.code === '3002') browseShow.value = false
    if(res.data.code === '3000') {
        browseList.value = res.data.data
        browseShow.value = true
        
    }
  } catch (error) {
    hooks.message('行情数据获取出现问题，请您等待后重新尝试','error')
  }
}

onMounted(() => {
  getContractList()
})

</script>

<template>
    <div class="browsing" v-if="browseShow">
      <ul class="browsing-roll roll-anima">
            <li v-for="i in browseList" :key="i.name">
                <a href="javascript:;">
                    <span style="color: #89939e;">&nbsp;{{i.name}}&nbsp;</span>
                    <span>￥{{ i.price }}&nbsp;</span>
                    <span :style="{color: i.increaseRate > 0 ? '#f23f58' : '#00b98c'}">{{ i.increaseRate }}%&nbsp;
                        <el-icon v-if="i.increaseRate < 0"><Bottom /></el-icon>
                        <el-icon v-else><Top /></el-icon>
                    </span>
                </a>
            </li>
      </ul>
    </div>
</template>

<style scoped lang="scss">
@keyframes roll-anima{
    from{
        left: 400px;
    }
    to{
        left: -3000px;
    }
}
.roll-anima {
    animation: roll-anima 40s linear 0s infinite normal backwards;
}

.browsing {
    position: relative;
    overflow: hidden;
    height: 38px;
    margin-bottom: 14px;
    margin-top: 8px;
    border-top: 1px solid #d0d1d3;
    border-bottom: 1px solid #d0d1d3;
    font-size: 13px;

    &-roll {
    position: absolute;
    left: 400px;
    display: flex;
    height: 100%;
   
    &:hover {
        animation-play-state: paused;
    }
        li {
            margin: auto 16px;
            a {
                display: flex;
                height: 16px;
                line-height: 16px;
                white-space: nowrap;
                span {
                    font-size: 12px;
                    color: #24292E;
                    font-weight: 600;
                    .el-icon {
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
            }
        }
        li:last-child {
            margin-right: 1000px;
        }
}
}

</style>
