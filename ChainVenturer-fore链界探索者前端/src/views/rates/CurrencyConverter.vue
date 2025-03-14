<!-- 汇率换算器 -->
<script setup lang="ts">
import IconConversion from '@/components/icons/IconConversion.vue'
import { onMounted } from 'vue';

import { ref } from 'vue'

import { getRatesDate } from '@/api/rates'
import hooks from '@/utils/hooks'
import { eventBus } from '@/utils/eventBus'

// 金额
const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}

// 持有
const buy = ref('')
const sell = ref('')
const rates = ref<Record<string,any>>([])

// 时间
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const time = new Date().toLocaleTimeString()

// 汇率计算
const handleConversion = (exchange: boolean) => {
    
    const [buyObj] = rates.value.filter((i:Record<string,any>) => i.currencyName === buy.value)
    const [sellObj] = rates.value.filter((i:Record<string,any>) => i.currencyName === sell.value)
    if(!num.value || !buyObj || !sellObj) {
        return hooks.message('请您将金额、持有及兑换输入完整再进行操作','warning')
    }
    if(exchange) {
        const relay = buy.value
        buy.value = sell.value
        sell.value = relay
    } 

    // 更新结果显示
    showRatesResult(buyObj,sellObj)
}


// 汇率显示
const buyNum = ref<number>(1)
const sellResult = ref<string>()
const sellReResult = ref<string>()

const buyCode = ref<string>('USD')
const currencyBuy = ref<string>('美元')
const sellCode = ref<string>('CNY')
const currencySell = ref<string>('人民币')
const showRatesResult = (buyObj:Record<string,any>,sellObj:Record<string,any>) => {
    // 默认是以美元为基础的换算 美元的汇率固定为1
    const result = (num.value / buyObj.rate) * sellObj.rate
    const reResult = (num.value / sellObj.rate) * buyObj.rate
    buyNum.value = num.value
    sellResult.value = result.toFixed(4)
    sellReResult.value = reResult.toFixed(4)
    buyCode.value = buyObj.currencyName.split(' ')[0]
    currencyBuy.value = buyObj.currency
    sellCode.value = sellObj.currencyName.split(' ')[0]
    currencySell.value = sellObj.currency
}

// 获取汇率 并给兄弟组件传值(流行汇率)
const popularList = ref<Record<string,any>>([])
const getRatesList = async() => {
    try {
        const res = await getRatesDate()
        rates.value = res.data.data
        rates.value.forEach((i:Record<string,any>) => {
            if(i.currency === '中国人民币')  {
                sellResult.value = i.rate
                sellReResult.value = (1 / i.rate).toFixed(4)
                popularList.value.push(i)
            } else if
            (
                i.currency === '美元' ||
                i.currency === '欧元' ||
                i.currency === '日元' ||
                i.currency === '韩元' ||
                i.currency === '港币' ||
                i.currency === '英镑'
            ) popularList.value.push(i) 
        })
        // 事件总线 兄弟组件发送
        eventBus.emit('DataRatesPopular',popularList.value)
        
    } catch (error) {
        console.log('汇率数据获取失败')
    }
}

onMounted(() => {
    getRatesList()
})

</script>

<template>
    <el-card>
        <template #header>
        <div class="card-header">
            <span><IconConversion class="icon" />&nbsp;&nbsp;实时汇率换算器</span>
        </div>
        </template>
        
        <div class="rates-count">
            <!-- 金额 -->
            <div class="sum">
                <span>金额</span>
                <el-input-number
                    v-model="num"
                    :min="1"
                    controls-position="right"
                    size="large"
                    @change="handleChange"
                />
            </div>

            <!-- 持有 -->
            <div class="hold">
                <span>持有</span>
                <el-select
                    v-model="buy"
                    filterable
                    placeholder="请选择国家"
                    size="large"
                    style="width: 240px"
                >
                    <el-option
                        v-for="item in rates"
                        :key="item.currencyName"
                        :label="item.currencyName"
                        :value="item.currencyName"
                    />
                </el-select>
            </div>



            <div class="station">
                <strong style="cursor: pointer;" @click="handleConversion(true)">交换</strong>
            </div>


            <!-- 兑换 -->
            <div class="exchange">
                <span>兑换</span>
                
                <el-select
                    v-model="sell"
                    filterable
                    placeholder="请选择国家"
                    size="large"
                    style="width: 240px"
                >
                    <el-option
                        v-for="item in rates"
                        :key="item.currencyName"
                        :label="item.currencyName"
                        :value="item.currencyName"
                    />
                </el-select>
            </div>
        </div>


        <div class="rates-result">
            <div class="result-fore">{{ buyNum }} {{ currencyBuy }} （{{buyCode}}）= </div>
            <div class="result-back">{{ sellResult }} {{ currencySell }}（{{sellCode}}）</div>
            <div class="result-all">反向汇率：{{ buyNum }} {{ sellCode }} = {{ sellReResult }} {{ buyCode }}   更新时间：{{ year }}-{{ month }}-{{ day }} {{ time }}</div>

            <el-button color="#35afbf" class="key-count" @click="handleConversion(false)">立刻换算</el-button>
        </div>

    </el-card>
       
</template>

<style scoped lang="scss">
.el-card {
    margin-bottom: 10px;
    :deep(.el-card__header) {
        padding-left: 10px;
    }
    .card-header {
        font-size: 16px;
        font-weight: 600;
        .icon {
            vertical-align: top;
            background-color: #35afbf;
            padding: 2px;
        }
        
    }

    .rates-count {
        height: 110px;
        display: flex;
        
        div {
            flex: 2;
            span {
                font-size: 20px;
                font-weight: 600;
                line-height: 50px;
            }
        }
        .el-input-number {
            margin-top: 10px;
        }
        .el-select {
            margin-top: 10px;
        }
        .station {
            flex: 1;
            height: 60px;
            margin-top: 50px;
            line-height: 60px;
            text-align: center;
            strong {
                padding: 10px;
                border-radius: 4px;
                color: #fff;
                background-color: #35afbf;
            }
            
        }
    }

    .rates-result {
        position: relative;
        height: 130px;
        .result-fore {
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #5c667b;
        }

        .result-back {
            height: 50px;
            line-height: 50px;
            font-weight: 600;
            font-size: 22px;
            color: #e45f17;
        }

        .result-all {
            height: 40px;
            line-height: 40px;
            color: #5c667b;
        }
        .key-count {
            position: absolute;
            top: 40px;
            right: 20px;
            height: 50px;
            width: 200px;
            border-radius: 4px;
            font-size: 22px;
            color: #fff;
        }
    }
    
}
</style>