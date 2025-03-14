<script setup lang="ts">
import { onMounted,ref } from 'vue';
import MoCart from './MoCart.vue'

import noData from '@/assets/images/no-data.png'
import { getToolData } from '@/api/tool'
import hooks from '@/utils/hooks';
defineOptions({
    name: 'ToolView'
})

// 请求数据
const mathList = ref<Record<string,any>>([])
const financeList = ref<Record<string,any>>([])
const seniorList = ref<Record<string,any>>([])
const moShow = ref<boolean>(false)
const getToolList = async () => {
    try {
        const res = await getToolData()
        if(res.data.code === '3002') console.log('进行其他操作')
        
        if(res.data.code === '3000') {
            res.data.data.map((item:Record<string,any>) => {
                if(item.db === 1) return mathList.value.push(item)
                if(item.db === 2) return financeList.value.push(item)
                if(item.db === 3) return seniorList.value.push(item)      
            })
            moShow.value = true
            
        }
    } catch (error) {
        hooks.message('请求数据错误！请联系开发者','error')
    }
}


onMounted(() => {
    getToolList()
})

</script>

<template>
        
  <div class="tool" v-if="moShow">
    <!-- 头部图片 -->
    <header>
        <img src="./tool-2.png" alt="">
        <span>探&nbsp;&nbsp;索</span>
    </header>

    <!-- 主体工具显示 -->
    <div class="tool-title"><span>数学计算</span></div>
    <MoCart 
        :moList="mathList"
        :imgShow="true"
        :dbImg="1"
        kindName1="算术公式"
        kindName2="时间运算"
      />

    <div class="tool-title"><span>金融工具</span></div>
    <MoCart 
        :moList="financeList" 
        :imgShow="true" 
        :dbImg="2"
        kindName1="理财工具"
        kindName2="利润探索"
    />


    <div class="tool-title"><span>高级计算</span></div>
    <MoCart 
        :moList="seniorList" 
        :imgShow="false"
        kindName1="货币相关"
        kindName2="精端工具"
    />
  </div>
  <el-empty 
      v-else 
      style="--el-empty-padding: 40px 0 40px;"
      :image-size="600" 
      :image="noData"
      description="数据跑丢了，请等待一会或刷新一下吧！"
    />
</template>

<style scoped lang="scss">
    .tool {
        margin-bottom: 40px;

        header {
            position: relative;
            height: 200px;
            overflow: hidden;
            img {
                width: 100%;
            }
            span {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                font-size: 40px;
                font-weight: 600;
                color: #fff;
                
            }
        }

        &-title {
            margin: 40px 0 20px;
            font-size: 20px;
            font-weight: 600;

            span {
                border-bottom: 4px solid #f7d049;
            }
        }
    }
</style>
