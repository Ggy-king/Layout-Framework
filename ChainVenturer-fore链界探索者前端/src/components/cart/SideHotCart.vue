<!-- 专题卡片 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
import IconHot from '@/components/icons/IconHot.vue'
import {ref,onMounted} from 'vue'

import { getContractHot } from '@/api/market'
import { getArticlesHot } from '@/api/articles'
import { UrlStore } from '@/stores'


interface Props {
    title?:string
    typeIndex?: number

}
const props = withDefaults(defineProps<Props>(),{
    title: '汇总列表',
    typeIndex: 1,
})
const title: string = props.title


const coinList = ref<Record<string,any>>([
    {
        name:'纯碱主连',
        exchange:'CZCE',
        price: 1568,
        initPrice: 1600,
        increaseRate: 2.95
    },
    {
        name:'300股指主连',
        exchange:'CFFEX',
        price: 3959.8,
        initPrice: 3955.3,
        increaseRate: -0.52
    }
])
const articlesList = ref<Record<string,any>>([
        {
            title:'智慧医疗领域的投资机遇与挑战',
            author:'ggy',
            view_num:'1332',
        },
        {
            title:'大连商品交易所：2025年度手续费减免措施详解及影响分析',
            author:'ggy',
            view_num:'1220',
        },
    ])

const getMarketHotList = async () => {
    try {
    const res = await getContractHot()
    if(res.data.code === '3002') return 
    if(res.data.code === '3000') coinList.value = res.data.data
  } catch (error) {
    
  }
}

const getArticlesHotList = async () => {
    try {
    const res = await getArticlesHot()
    if(res.data.code === '3002') return 
    if(res.data.code === '3000') articlesList.value = res.data.data
  } catch (error) {
    
  }
}

// 颜色
const changeBgColor = (index: any): string => {
    if(index === 0) {
        return '#bf2c24'
    } else if(index === 1) {
        return '#e67225'
    } else if(index === 2){ 
        return '#e6bf25'
    } else {
        return '#ededed'
    }
}
// 跳转文章
const url = UrlStore()
const handleToEssay = (id:string) => {
    window.open(`${url.baseUrl}/essay/${id}`)
//   router.push({name: 'essay',params: { id } })
}

onMounted(() => {
    if(props.typeIndex === 0) {
        getArticlesHotList()
    } else {
        getMarketHotList()
    }
})


</script>

<template>
  <div class="topic">
    <!-- 头部 -->
    <UniversalHead :title="title"/>

    <!-- 主体 -->
    <div v-if="typeIndex === 1" class="coin-main">
      <table>
        <thead>
            <tr>
                <th>名称</th>
                <th style="text-align: right;">价格</th>
                <th style="text-align: right;">一天内涨幅</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(i,index) in coinList">
                <td>
                    <div 
                    class="bg-img"
                    :style="{
                            backgroundPosition: `${index as any * -36}px 0px`
                        }"
                    ></div>
                    <span>
                        <div>{{ i.name }}</div>
                        <div>{{ i.exchange }}</div>
                    </span>
                </td>
                <td class="price">
                    <div class="price-new">￥{{ i.price }}</div>
                    <div class="price-init">开盘 {{ i.initPrice }}</div>
                </td>
                <td>
                    <div class="rate" :style="{ backgroundColor: i.increaseRate > 0 ? '#f23f58' : '#00b98c'}">{{ i.increaseRate }}%</div>
                </td>
            </tr>
        </tbody>
      </table>
    </div>


    <div v-else class="title-main">
        
        <!-- 表格主体 -->
        <ul>
            <li v-for="(i,index) in articlesList">
                <div 
                class="img"
                :style="{ backgroundColor: changeBgColor(index), color: Number(index) > 2 ?  '#666666' : '#fff'}"
                 >{{ index + 1 }}</div>
                <div class="title-con">
                    <div class="title ellipsis2" @click="handleToEssay(i._id)">{{ i.title }}</div>

                    <div class="info">
                        <span>作者：{{ i.author }}</span>
                        <span><IconHot style="width: 12px; height: 12px;"/> {{ i.view_num }}</span>
                    </div>
                </div>
                    
            </li>
        </ul>
    </div>
  </div>

  
</template>

<style scoped lang="scss">
.topic {
  width: 320px;
  margin-bottom: 40px;
  

  .coin-main {
    position: relative;
    background-color: #fff;
    table {
        thead {
            th {
                font-size: 12px;
                color: #89939e;
            }
        }
        tbody {
            tr {

                td:first-child {
                    display: flex;
                    align-items: center;
                    .bg-img {
                        width: 28px;
                        height: 28px;
                        background-image: url('@/assets/images/com-coin.png');
                        background-size: 352px 28px;
                        background-repeat: no-repeat;
                        background-position: 0px 0px;
                    }
                    span {
                        margin-left: 8px;
                        div:first-child {
                            color: #ae782c;
                        }
                        div:last-child {
                            font-size: 12px;
                            color: #89939e;
                        }
                    }
                }

                .price {
                    text-align: right;
                    font-weight: 600;

                    &-new {
                        font-size: 14px;
                    }
                    &-init {
                        color: #89939e;
                        font-size: 12px;
                    }

                }

                .rate {
                    // float: right;
                    // width: 60px;
                    text-align: center;
                    padding: 4px 0px;
                    color: #fff;
                    border-radius: 4px;
                    background-color: #00b98c;
                }
            }
        }
    }
  }

  .title-main {
    position: relative;
    background-color: #fff;

        ul {
            li {
                display: flex;
                margin-bottom: 10px;
                .img {
                    width: 28px;
                    height: 28px;
                    margin-top: 4px;
                    margin-right: 8px;
                    background-color: #ededed;
                    color: #666666;
                    text-align: center;
                    line-height: 28px;
                    font-weight: 600;
                }
                .title-con {
                    width: 100%;
                    .title {
                        font-weight: 600;
                        color: #000;
                        letter-spacing: .8px;
                        margin-bottom: 8px;
                        cursor: pointer;
                    }
                    .title:hover {
                        color: #4378ff;
                    }
                    .info {
                        display: flex;
                        justify-content: space-between;
                        span:first-child {
                            color: #999;
                            font-size: 12px;
                        }
                        span:last-child {
                            padding: 2px 10px 2px 8px;
                            font-size: 12px;
                            border-radius: 10px;
                            color: #fff;
                            background: linear-gradient(to right, #6a75e5, #a867ff);
                        }

                    }
                }
            }
        }
    }
}
</style>
