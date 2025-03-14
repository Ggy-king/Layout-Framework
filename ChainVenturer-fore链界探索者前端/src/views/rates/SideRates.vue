<!-- 专题卡片 -->

<script setup lang="ts">
import IconTable from '@/components/icons/IconTable.vue'

const tableData = [
  {
    name: '美元',
    buy: 729.21,
    sell: 732.28,
    median: 718.84,
  },{
    name: '欧元',
    buy: 753.89,
    sell: 759.41,
    median: 752.57,
  }, {
    name: '英镑',
    buy: 910.93,
    sell: 917.7,
    median: 907.65,
  }, {
    name: '港币',
    buy: 93.85,
    sell: 94.23,
    median: 92.6,
  }, {
    name: '澳门元',
    buy: 91.11,
    sell: 91.53,
    median: 89.85,
  }, {
    name: '日元',
    buy: 4.628,
    sell: 4.6642,
    median: 4.6233,
  }, {
    name: '澳大利亚元',
    buy: 450.6,
    sell: 454.18,
    median: 450.7,
  }, {
    name: '加拿大元',
    buy: 506.14,
    sell: 510.12,
    median: 504.98,
  }, {
    name: '新加坡元',
    buy: 532.82,
    sell: 536.83,
    median: 532.14,
  }, {
    name: '泰国铢',
    buy: 21.19,
    sell: 21.37,
    median: 21.26,
  }, {
    name: '韩国元',
    buy: 0.4907,
    sell: 0.4991,
    median: 0.4938,
  }, {
    name: '新台币',
    buy: '',
    sell: '',
    median: 22.29,
  }, {
    name: '瑞士法郎',
    buy: 802.09,
    sell: 808.29,
    median: 799.77,
  }, {
    name: '瑞典克朗',
    buy: 65.77,
    sell: 66.29,
    median: 65.65,
  }, {
    name: '丹麦克朗',
    buy: 101.04,
    sell: 101.86,
    median:100.84,
  }, {
    name: '挪威克朗',
    buy: 63.9,
    sell: 64.42,
    median: 63.87,
  }, {
    name: '林吉特',
    buy: 162.82,
    sell: 164.29,
    median: 161.99,
  }, {
    name: '卢布',
    buy: 6.71,
    sell: 7.06,
    median: 6.61,
  }, {
    name: '新西兰元',
    buy: 407.45,
    sell: 410.51,
    median: 409.55,
  }, {
    name: '南非兰特',
    buy: 	38.47,
    sell: 38.92,
    median: 38.44,
  },{
    name: '印尼卢比',
    buy: 	38.47,
    sell: 38.92,
    median: 38.44,
  },{
    name: '菲律宾比索',
    buy: 	12.45,
    sell: 12.71,
    median: 12.63,
  },{
    name: '沙特里亚尔',
    buy: 	193.08,
    sell: 195.8,
    median: 192.84,
  },{
    name: '土耳其里拉',
    buy: 	19.21,
    sell: 22.11,
    median: 20.51,
  },{
    name: '人民币',
    buy: 	100,
    sell: 100,
    median: 100,
  }
]

// 时间
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const time = new Date().toLocaleTimeString()

</script>

<template>
  <div class="side-rates">
    <el-card>
        <template #header>
        <div class="card-header">
            <h3><IconTable class="icon"></IconTable>&nbsp;&nbsp;今日中国银行外汇牌价</h3>
            <span>( 以 100 单位外币兑换人民币,{{ year }}-{{ month }}-{{ day }} {{ time }} )</span>
        </div>
        </template>


        <el-table 
          :data="tableData" 
          style="width: 100%"
          :header-cell-style="{backgroundColor: '#fff',color:'#000'}"
          :cell-style="{textAlign: 'center'}"
        >

          <el-table-column 
            prop="name" 
            label="货币名称" 
            width="110px" 
            algin="center"
            header-align="center"
          />

          <el-table-column label="现汇"  header-align="center"> 
            <el-table-column prop="buy" label="买入价"/>
            <el-table-column prop="sell" label="卖出价" />
            <el-table-column prop="median" label="中间价" />
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.side-rates {
  width: 360px;
  margin-bottom: 40px;
  :deep(.el-card__header) {
        padding-left: 10px;
    }
  .icon {
    vertical-align: top;
    background-color: #35afbf;
    padding: 2px;
  }

  :deep(.el-card__body) {
      padding: 0;
    }
    :deep(.el-table__header tr) {
      background-color: #fff;
    }
    
}
</style>
