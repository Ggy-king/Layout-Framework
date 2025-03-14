<!-- 最近查询 -->

<script setup lang="ts">
import IconRecently from '@/components/icons/IconRecently.vue'

const tableData = [

  {
    id: 1,
    codeOne: '31301 日元兑人民币',
    codeTwo: '8850 港币兑人民币',
    codeThree: '37830 英镑兑人民币',
    codeFour: '74805 泰铢兑人民币',
  },
  {
    id: 2,
    codeOne: '67488 韩元兑人民币',
    codeTwo: '83353 港币兑人民币',
    codeThree: '66841 日元兑人民币',
    codeFour: '32131 韩元兑人民币',
  },{
    id: 3,
    codeOne: '76093 美元兑人民币',
    codeTwo: '97232 日元兑人民币',
    codeThree: '1988 日元兑人民币',
    codeFour: '4127 泰铢兑人民币',
  },
  
  {
    id: 4,
    codeOne: '13061 欧元兑人民币',
    codeTwo: '23325 欧元兑人民币',
    codeThree: '69821 韩元兑人民币',
    codeFour: '85229 韩元兑人民币',
  },{
    id: 5,
    codeOne: '51602 英镑兑人民币',
    codeTwo: '42601 泰铢兑人民币',
    codeThree: '58354 韩元兑人民币',
    codeFour: '86056 日元兑人民币',
  },{
    id: 6,
    codeOne: '71482 港币兑人民币',
    codeTwo: '4807 港币兑人民币',
    codeThree: '97601 泰铢兑人民币',
    codeFour: '75896 港币兑人民币',
  },{
    id: 7,
    codeOne: '73335 美元兑人民币',
    codeTwo: '72303 美元兑人民币',
    codeThree: '34959 英镑兑人民币',
    codeFour: '99547 韩元兑人民币',
  },{
    id: 8,
    codeOne: '24989 港币兑人民币',
    codeTwo: '93766 韩元兑人民币',
    codeThree: '91932 港币兑人民币',
    codeFour: '30364 日元兑人民币',
  },{
    id: 9,
    codeOne: '87547 日元兑人民币',
    codeTwo: '32371 泰铢兑人民币',
    codeThree: '95957 港币兑人民币',
    codeFour: '77918 韩元兑人民币',
  },

  
]


</script>

<template>
    <el-card>
        <template #header>
        <div class="card-header">
            <span><IconRecently class="icon"></IconRecently>&nbsp;&nbsp;最近查询</span>
        </div>
        </template>

        <table>
            <tbody>
                <tr v-for="i in tableData" :key="i.id">
                    <td>{{ i.codeOne }}</td>
                    <td>{{ i.codeTwo }}</td>
                    <td>{{ i.codeThree }}</td>
                    <td>{{ i.codeFour }}</td>
                </tr>
            </tbody>
        </table>
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
    table {
        tr {
            border-bottom: 1px solid #ebeef5;
            td {
                text-align: center;
                color: #5c667b
            }
            
        }
    }
}
</style>
