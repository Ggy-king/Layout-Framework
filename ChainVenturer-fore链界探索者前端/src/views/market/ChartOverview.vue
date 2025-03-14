<!-- 图表总览 -->

<script setup lang="ts">
import {ref,reactive,onMounted} from 'vue';

import * as echarts from 'echarts/core';
import {  TitleComponent, GridComponent ,TooltipComponent, LegendComponent, } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';


import type { GridComponentOption,TooltipComponentOption,TitleComponentOption, LegendComponentOption } from 'echarts/components'
import type { BarSeriesOption } from 'echarts/charts';


echarts.use([TitleComponent,GridComponent, BarChart, CanvasRenderer,TooltipComponent,LegendComponent]);

type EChartsOption = echarts.ComposeOption<
   TitleComponentOption | GridComponentOption | BarSeriesOption | TooltipComponentOption | LegendComponentOption
>;


const chartContainer = ref<HTMLDivElement | null>(null);

const option: EChartsOption = reactive({
  title: {
    text: '全市场涨跌分布',
    textStyle: {
        fontSize: '14px',
        color: '#538fcb'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    
  },
  legend: {
    right: '0',
    data: ['下跌数量','上涨数量']
  },

  grid: {
    left: '1%',
    right: '1%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    nameLocation: 'middle',
    axisLabel: {
        interval: 0
    },
    data: ['-2%以上','-2%', '-1.5%', '-1%', '-0.5%', '-0.2%','-0.1%','0.2%','0.5%', '1%', '1.5%','2%','2.5%','2.5%以上']
  },
  yAxis: {
    type: 'value'
  },
     
  series: [
  {
      name: '下跌数量',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
            color: '#00b98c'
      },
      label: {
        show: true,
        position: 'top'
      },
      data: [2, 1, 2, 3, 13, 5, 11,'-','-','-','-','-','-','-']
    },
    {
      name: '上涨数量',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
            color: '#f23f58'
      },
      label: {
        show: true,
        position: 'top'
      },
      data: ['-','-','-','-','-','-','-',13,7, 13, 5, 4, 1, 2]
    },
  ]
});

const initChart = () => {

    var myChart = echarts.init(chartContainer.value)

    myChart.setOption(option)
}
const sectorList = [
    {
        plate: '工业品',
        funds: '2063.49 亿',
        increase: -0.04,
        view: '196'
    },
    {
        plate: '农产品',
        funds: '817.66 亿',
        increase: 0.73,
        view: '89'
    },
    {
        plate: '贵金属',
        funds: '767.16 亿',
        increase: -0.47,
        view: '91'
    },
    {
        plate: '石油板块',
        funds: '140.90 亿',
        increase: -0.95,
        view: '21'
    },
    {
        plate: '化工板块',
        funds: '570.27 亿',
        increase: 0.54,
        view: '77'
    },
    {
        plate: '有色板块',
        funds: '601.55 亿',
        increase: -0.52,
        view: '80'
    },
    {
        plate: '建材板块',
        funds: '210.50 亿',
        increase: 0.53,
        view: '30'
    },
    {
        plate: '钢铁板块',
        funds: '354.37 亿',
        increase: -0.09,
        view: '42'
    },
    {
        plate: '煤炭板块',
        funds: '106.35 亿',
        increase: 0.79,
        view: '24'
    },
    {
        plate: '钛合金',
        funds: '49.20 亿',
        increase: -0.36,
        view: '9'
    },
    {
        plate: '黑链指数',
        funds: '509.92 亿',
        increase: 0.14,
        view: '71'
    },
    {
        plate: '塑化链',
        funds: '108.92 亿',
        increase: 0.62,
        view: '18'
    },
    {
        plate: '聚酯链',
        funds: '107.25 亿',
        increase: -0.18,
        view: '19'
    },
    {
        plate: '谷物板块',
        funds: '88.82 亿',
        increase: 1.95,
        view: '24'
    },
    {
        plate: '油脂板块',
        funds: '245.39 亿',
        increase: 0.42,
        view: '37'
    },
    {
        plate: '饲料板块',
        funds: '306.22 亿',
        increase: 1.33,
        view: '50'
    },
    {
        plate: '软商板块',
        funds: '121.57 亿',
        increase: -0.12,
        view: '18'
    }
]

onMounted(() => {
    initChart()

})
</script>

<template>
    <div class="chart">
        <div class="title">热门板块 <span>(对不起各位客官，小生的经费实在有限，这个行情页面的数据api就不做了，太烧钱了。每天更新一次吧)</span></div>
        <div class="sector">
            <ul class="sector-main">
                <li v-for="i in sectorList" :key="i.plate">
                    <el-card>
                        <div>{{ i.plate }}</div>
                        <div :style="{color: i.increase > 0 ? '#f23f58' : '#00b98c'}">{{ i.funds }}</div>
                        <div :style="{color: i.increase > 0 ? '#f23f58' : '#00b98c'}">{{ i.increase < 0 ? i.increase : '+' + i.increase}}% &nbsp;&nbsp;<span>{{ i.view }}万人讨论</span></div>
                    </el-card>
                </li>
            </ul>
        </div>  
        <!-- 标题 -->
        <div class="title">期货市场总览</div>
        <div class="market-chart">
            <el-card>
                <div class="market-whole" ref="chartContainer"></div>
            </el-card>
            <el-card class="market-rate">
                <div class="rate-title">大盘评级</div>
                <el-progress type="dashboard" :percentage="81" color="#f23f58" :width="150" :stroke-width="8">
                    <template #default="{ percentage }">
                        <span class="percentage-value">{{ percentage }}分</span>
                        <span class="percentage-label">注意风险</span>
                    </template>
                </el-progress>
                <div class="rate-bottom">
                    <span class="rate-info">投资建议</span>
                    <div class="rate-more">大盘震荡，适当参与</div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
.chart {
    width: 100%;
    margin-bottom: 24px;
    .title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        span {
            font-size: 14px;
            color: #89939e;
        }
    }
    .sector {
        
        &-main {
            display: flex;
            flex-wrap: wrap;
            .el-card {
                width: 190px;
                height: 100px;
                text-align: center;
                margin-left: 12px;
                margin-bottom: 10px;

                div:nth-child(2) {
                    font-size: 20px;
                    color: #f23f58;
                    margin: 4px 0;
                }
                div:last-child {
                    color: #f23f58;
                    span {
                        color: #89939e;
                    }
                }
                :deep(.el-card__body) {
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
            li:nth-child(6n + 1) {
                .el-card {
                    margin-left: 0;
                }
            }
        }
    }

    .market-chart {
        display: flex;
        justify-content: space-between;
        height: 370px;
        .el-card {
            width: 910px;
            height: 370px;
            .market-whole {
            height: 370px;
            }
        }
        .market-rate {
            width: 260px;
            position: relative;
            .rate-title {
                font-size: 16px;
                font-weight: 600;
                text-align: center;
                margin: 10px 0;
                padding-bottom: 10px;
                border-bottom: 1px solid #f1f1f1;
            }
            .el-progress {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            .percentage-value {
                display: block;
                margin-top: 10px;
                font-size: 32px;
                color: #f23f58;
            }
            .percentage-label {
                display: block;
                margin-top: 10px;
                font-size: 12px;
            }
            .rate-bottom {
                position: absolute;
                bottom: 10%;
                left: 50%;
                transform: translate(-50%,0);
                text-align: center;
                .rate-info {
                    display: inline-block;
                    margin-bottom: 10px;
                    padding: 2px;
                    color: #fff;
                    background-color: #4378ff;
                }
                    
                
            }

            
        }
    }




}
</style>
