<!-- 详细列表 -->

<script setup lang="ts">
import hooks from '@/utils/hooks'
import { computed, ref } from 'vue'

import { getContractDate } from '@/api/market'
import { onMounted } from 'vue'
import noData from '@/assets/images/no-data.png'


interface Contract {
  order: number
  name: string
  price: number
  increaseRate: number   // 涨幅
  riseFall: number   // 涨跌
  turnover:number   // 成交量
  position:number   // 持仓量
  dailyIncrease: number   // 日增仓
  yesFinish: number // 昨结
  initPrice: number   // 开盘价
  high: number   // 最高价
  low: number   // 最低价
  capitalFlow: number   // 资金流向
  market: number  // 沉淀资金
  exchange: string  // 沉淀资金
}


const tableData = ref<Contract[]>([])
const search = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

// 获取行情数据
const detailShow = ref<boolean>(false)
const getContractList = async () => {
  try {
    const res = await getContractDate()
    if(res.data.code === '3002') return hooks.message('服务端错误，行情查询失败','error')
    if(res.data.code === '3000') {
        tableData.value = res.data.data
        detailShow.value = true
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
    <div class="detail" v-if="detailShow">
        <el-table
            :data="filterTableData" 
            style="width: 100%;" 
            empty-text="请主子刷新页面，数据马上就来！"
            :header-cell-style="{color: '#89939e',fontWeight: 400,fontSize: '12px'}"
            cell-class-name="cell-body"
        >
            <el-table-column label="序号" width="48px" prop="order" sortable class-name="order" />
            <el-table-column label="合约名称" width="100px" prop="name" class-name="name"/>
            <el-table-column label="实时价格" prop="price" sortable>
              <template #default="scope">
                <span style="color: #ae782c;">
                  ￥ {{ scope.row.price }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="涨幅" prop="increaseRate" sortable class-name="amplitude" >
              <template #default="scope">
                <span :style="{color: scope.row.increaseRate > 0 ? '#f23f58' : '#00b98c'}">
                  {{ scope.row.increaseRate < 0 ? scope.row.increaseRate : '+' + scope.row.increaseRate }} %
                </span>
              </template>
            </el-table-column>
            <el-table-column label="成交量" prop="turnover" sortable  />
            <el-table-column label="涨跌" prop="riseFall" sortable >
              <template #default="scope">
                <span :style="{color: scope.row.riseFall > 0 ? '#f23f58' : '#00b98c'}">
                  {{ scope.row.riseFall }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="持仓量" prop="position" sortable  />
            <el-table-column label="日增仓" prop="dailyIncrease" sortable  />
            <el-table-column label="开盘价" prop="initPrice" sortable > 
              <template #default="scope">
                <span :style="{color: scope.row.initPrice > scope.row.yesFinish ? '#f23f58' : '#00b98c'}">
                  {{ scope.row.initPrice }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="最高价" prop="high" sortable >
            <template #default="scope">
                <span :style="{color: scope.row.high > scope.row.init ? '#f23f58' : '#00b98c'}">
                  {{ scope.row.high }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="最低价" prop="low" sortable >
            <template #default="scope">
                <span :style="{color: scope.row.low > scope.row.yesFinish ? '#f23f58' : '#00b98c'}">
                  {{ scope.row.low }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="资金流向" prop="capitalFlow" sortable>
            <template #default="scope">
                <span :style="{color: scope.row.capitalFlow > 0 ? '#f23f58' : '#00b98c'}">
                  {{ scope.row.capitalFlow }} 亿
                </span>
              </template>
              </el-table-column>
            <el-table-column label="沉淀资金" prop="market" sortable>
              <template #default="scope">
                  <span>
                    {{ scope.row.market }} 亿
                  </span>
                </template>
            </el-table-column>
            <el-table-column label="交易所" prop="exchange" sortable  />

            
            <el-table-column fixed="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="输入品种名称/代码" />
            </template>
            <span style="color: #00c6d8;">#国内期货</span>
            </el-table-column>
            <!-- <template #append>
                无限滚动
            </template> -->
        </el-table>
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
.detail {
    width: 100%;
    min-height: 600px;
    margin-bottom: 60px;
    .table-header {
        font-size: 16px;
    }

    .el-table {
      color: #000;
      :deep(.cell) {
        padding: 0;
        text-align: center;
      }
      :deep(.cell-body) {
        height: 46px;
        text-align: center;
      }
      :deep(.order) {
        color: #409eff;
      }
      :deep(.name) {
        padding-right: 10px;
      }
    }

  
    
  }
</style>
