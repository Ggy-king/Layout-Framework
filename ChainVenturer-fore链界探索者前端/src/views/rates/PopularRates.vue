<!-- 热门汇率 -->
<script setup lang="ts">
import IconHotWrite from '@/components/icons/IconHotWrite.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import america from '@/components/icons/country/america.svg'
import europe from '@/components/icons/country/europe.svg'
import japan from '@/components/icons/country/japan.svg'
import korea from '@/components/icons/country/korea.svg'
import hongKong from '@/components/icons/country/hongKong.svg'
import britain from '@/components/icons/country/britain.svg'


import { eventBus } from '@/utils/eventBus'

const tableData = ref<Record<string,any>>([
  {
    id: 1,
    currency: '美元',
    url: america,
    rate: 1,
    couRate: 'USD',
    rateP: '0.0000',
  },
  {
    id: 2,
    currency: '欧元',
    url: europe,
    rate: 1,
    couRate: 'EUR',
    rateP: '0.0000',
  },
  {
    id: 3,
    currency: '日元',
    url: japan,
    rate: 1,
    couRate: 'JPY',
    rateP: '0.0000',
  },
  {
    id: 4,
    currency: '韩元',
    url: korea,
    rate: 1,
    couRate: 'KRW',
    rateP: '0.0000',
  },
  {
    id: 5,
    currency: '港币',
    url: hongKong,
    rate: 1,
    couRate: 'HKD',
    rateP: '0.0000',
  },
  {
    id: 6,
    currency: '英镑',
    url: britain,
    rate: 1,
    couRate: 'GBP',
    rateP: '0.0000',
  }
])

const updatePopular = (rateDate:Record<string,any>) => {
    tableData.value.map((item:Record<string,any>) => {
        let CNY:number
        rateDate.map((i:Record<string,any>) => {
            if(i.currency === '中国人民币') CNY = i.rate
            if(item.currency === i.currency) item.rate = ( CNY / i.rate).toFixed(4)
        })
    })
    console.log(tableData.value)
    
}

onMounted(() => {
  eventBus.on('DataRatesPopular', updatePopular)
})
 
onUnmounted(() => {
  eventBus.off('DataRatesPopular')
})

</script>

<template>
    <el-card>
        <template #header>
        <div class="card-header">
            <span><IconHotWrite class="icon"></IconHotWrite>&nbsp;&nbsp;今日热门换算汇率</span>
        </div>
        </template>

        <table>
            <tbody>
                <tr v-for="i in tableData" :key="i.id">
                    <td><img :src="i.url" alt="">{{ i.currency }}</td>
                    <td>
                        {{ i.rate }}
                        <div class="rate-dir">{{ i.couRate }}_CNY</div>
                    </td>
                    <td>{{ i.rateP }}%</td>
                </tr>
            </tbody>
        </table>
    </el-card>
       
</template>

<style scoped lang="scss">
.el-card {
    margin-bottom: 10px;
    :deep(.el-card__body) {
      padding: 0;
    }
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
    table {
        tr {
            display: flex;
            height: 44px;
            border-bottom: 1px solid #ebeef5;
            td {
                flex: 1;
            }
            td:first-child {
                font-size: 16px;
                img {
                    margin-right: 8px;
                }
            }
            td:nth-child(2) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                .rate-dir {
                    font-size: 10px;
                    color: #89939e;
                }
            }
            td:last-child {
                text-align: right;
                color: #40b068;
            }
        }
    }
}
</style>