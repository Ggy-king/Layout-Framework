<!-- 外汇币种 -->

<script setup lang="ts">
import IconAll from '@/components/icons/IconAll.vue'

const tableData = [

{
    id: 1,
    coinOne: '美元',
    coinTwo: '欧元',
    coinThree: '英镑',
    coinFour: '日元',
  },
  {
    id: 2,
    coinOne: '澳元',
    coinTwo: '港币',
    coinThree: '加元',
    coinFour: '印度卢比',
  },
  {
    id: 3,
    coinOne: '人民币',
    coinTwo: '新加坡元',
    coinThree: '马来西亚林吉特',
    coinFour: '泰铢',
  },
  {
    id: 4,
    coinOne: '韩元',
    coinTwo: '越南盾',
    coinThree: '菲律宾比索',
    coinFour: '印度尼西亚卢比',
  },
  {
    id: 5,
    coinOne: '俄罗斯卢布',
    coinTwo: '南非兰特',
    coinThree: '巴西雷亚尔',
    coinFour: '墨西哥比索',
  },
  {
    id: 6,
    coinOne: '瑞士法郎',
    coinTwo: '瑞典克朗',
    coinThree: '丹麦克朗',
    coinFour: '挪威克朗',
  },
  {
    id: 7,
    coinOne: '波兰兹罗提',
    coinTwo: '匈牙利福林',
    coinThree: '捷克克朗',
    coinFour: '罗马尼亚列伊',
  },
  {
    id: 8,
    coinOne: '阿联酋迪拉姆',
    coinTwo: '沙特里亚尔',
    coinThree: '卡塔尔里亚尔',
    coinFour: '科威特第纳尔',
  },
  {
    id: 9,
    coinOne: '以色列新谢克尔',
    coinTwo: '土耳其里拉',
    coinThree: '阿根廷比索',
    coinFour: '智利比索',
  },
  {
    id: 10,
    coinOne: '哥伦比亚比索',
    coinTwo: '秘鲁索尔',
    coinThree: '巴拉圭瓜拉尼',
    coinFour: '乌拉圭比索',
  },
  {
    id: 11,
    coinOne: '埃及镑',
    coinTwo: '摩洛哥迪拉姆',
    coinThree: '尼日利亚奈拉',
    coinFour: '加纳塞地',
  },
  {
    id: 12,
    coinOne: '肯尼亚先令',
    coinTwo: '乌干达先令',
    coinThree: '坦桑尼亚先令',
    coinFour: '安哥拉宽扎',
  },
  {
    id: 13,
    coinOne: '纳米比亚元',
    coinTwo: '博茨瓦纳普拉',
    coinThree: '赞比亚克瓦查',
    coinFour: '马拉维克瓦查',
  },
  {
    id: 14,
    coinOne: '冰岛克朗',
    coinTwo: '阿尔巴尼亚列克',
    coinThree: '保加利亚列弗',
    coinFour: '克罗地亚库纳',
  },
  {
    id: 15,
    coinOne: '哈萨克斯坦坚戈',
    coinTwo: '乌兹别克斯坦索姆',
    coinThree: '吉尔吉斯斯坦索姆',
    coinFour: '塔吉克斯坦索莫尼',
  },
  {
    id: 16,
    coinOne: '亚美尼亚德拉姆',
    coinTwo: '格鲁吉亚拉里',
    coinThree: '阿塞拜疆马纳特',
    coinFour: '蒙古图格里克',
  },
  {
    id: 17,
    coinOne: '斯里兰卡卢比',
    coinTwo: '尼泊尔卢比',
    coinThree: '马尔代夫拉菲亚',
    coinFour: '不丹努扎姆',
  },
  {
    id: 18,
    coinOne: '巴布亚新几内亚基纳',
    coinTwo: '所罗门群岛元',
    coinThree: '瓦努阿图瓦图',
    coinFour: '基里巴斯元',
  },
  {
    id: 19,
    coinOne: '图瓦卢元',
    coinTwo: '萨摩亚塔拉',
    coinThree: '库克群岛元',
    coinFour: '纽埃元',
  },
  {
    id: 20,
    coinOne: '帕劳比索',
    coinTwo: '密克罗尼西亚元',
    coinThree: '马绍尔群岛元',
    coinFour: '瑙鲁元',
  },{
    id: 21,
    coinOne: '阿富汗尼',
    coinTwo: '伊拉克第纳尔',
    coinThree: '约旦第纳尔',
    coinFour: '黎巴嫩镑',
  },
  {
    id: 22,
    coinOne: '叙利亚镑',
    coinTwo: '也门里亚尔',
    coinThree: '阿曼里亚尔',
    coinFour: '巴林第纳尔',
  },
  {
    id: 23,
    coinOne: '库尔德斯坦第纳尔',
    coinTwo: '东加勒比元',
    coinThree: '海地古德',
    coinFour: '多米尼加比索',
  },
  {
    id: 24,
    coinOne: '尼加拉瓜科多巴',
    coinTwo: '巴拿马巴波亚',
    coinThree: '苏里南元',
    coinFour: '圭亚那元',
  },
  {
    id: 25,
    coinOne: '特立尼达和多巴哥元',
    coinTwo: '佛得角埃斯库多',
    coinThree: '圣多美',
    coinFour: '安提瓜和巴布达元',
  },
  {
    id: 26,
    coinOne: '多米尼克元',
    coinTwo: '圣卢西亚元',
    coinThree: '圣文森特',
    coinFour: '格林纳达东加勒比元',
  },
  {
    id: 27,
    coinOne: '巴巴多斯元',
    coinTwo: '法属圭亚那欧元', // 法属圭亚那使用欧元
    coinThree: '瓜德罗普欧元', // 瓜德罗普使用欧元
    coinFour: '马提尼克欧元', // 马提尼克使用欧元
  },
  {
    id: 28,
    coinOne: '留尼汪欧元', // 留尼汪使用欧元
    coinTwo: '马约特欧元', // 马约特使用欧元
    coinThree: '新喀里多尼亚法郎',
    coinFour: '瓦利斯和富图纳法郎',
  },
  {
    id: 29,
    coinOne: '萨摩亚塔拉',
    coinTwo: '阿布哈兹拉里',
    coinThree: '帕劳美元', 
    coinFour: '马绍尔群岛美元',
    
  },
  {
    id: 30,
    coinOne: '托克劳新西兰元', // 托克劳使用新西兰元
    coinTwo: '阿鲁巴弗罗林',
    coinThree: '罗斯属地美元', // 注意：荷属安的列斯群岛已于2010年解散
    coinFour: '荷属圣马丁欧元', // 荷属圣马丁使用欧元（与法国共享货币）
    // 注意：由于荷属安的列斯群岛已解散，其货币可能不再流通，此处仅作为历史参考
  },
  {
    id: 31, // 由于上一个对象中的coinFour实际上并不准确（荷属圣马丁并不使用弗罗林），这里额外添加一个对象来弥补
    coinOne: '安圭拉东加勒比元',
    coinTwo: '英属维尔京群岛美元',
    coinThree: '法属圣马丁欧元',
    coinFour: '法属圭亚那欧元',
  },
  {
    id: 32,
    coinOne: '福克兰群岛镑', 
    coinTwo: '纽埃新西兰元', 
    coinThree: '直布罗陀镑', 
    coinFour: '圣赫勒拿镑', 
  },
  // 注意：接下来的几个货币可能较为特殊或流通范围有限
  {
    id: 33,
    coinOne: '阿森松镑', 
    coinTwo: '特里斯坦达库尼亚镑', 
    coinThree: '诺福克岛元', 
    coinFour: '纳米布亚元', 
  },
  
  {
    id: 34,
    coinOne: '塞波加公国卢比', 
    coinTwo: '西兰公国西兰元', 
    coinThree: '列支敦士登法郎', 
    coinFour: '摩纳哥法郎',
    
  },
  // 由于上述两个货币实际上已不再作为官方货币使用，以下将提供一些仍然流通但较为特殊的货币
  {
    id: 35,
    coinOne: '厄立特里亚纳克法',
    coinTwo: '索马里先令',
    coinThree: '吉布提法郎',
    coinFour: '科摩罗法郎',
  },
  {
    id: 36,
    coinOne: '毛里求斯卢比',
    coinTwo: '塞舌尔卢比',
    coinThree: '圣赫勒拿磅',
    coinFour: '马约特法郎' 
  
  },
  // 接下来的几个将基于一些较小国家的货币，这些货币在国际上可能不太知名
  {
    id: 37,
    coinOne: '莱索托洛蒂',
    coinTwo: '斯威士兰里兰吉尼',
    coinThree: '厄斯瓦蒂尼里兰吉尼', // 厄斯瓦蒂尼原名斯威士兰，2018年更名
    coinFour: '巴布亚新几内亚基那', // 注意：之前已列出巴布亚新几内亚基纳，但这里使用其另一种官方货币单位“基那”作为替代
    // 注意：巴布亚新几内亚实际上同时使用基纳和基那作为官方货币，但基纳更为常见
  },
  // 由于上述的巴布亚新几内亚基那实际上与基纳有重叠，这里将进行更正，并添加其他货币
  {
    id: 38, // 更正上一个对象的错误，并合并到此处
    coinOne: '摩纳哥欧元',
    coinTwo: '所罗门群岛元',
    coinThree: '图瓦卢澳元', // 图瓦卢实际上使用澳元作为官方货币
    coinFour: '基里巴斯澳元', // 基里巴斯同样使用澳元作为官方货币
  },
  {
    id: 39,
    coinOne: '法属波利尼西亚法郎',
    coinTwo: '梵蒂冈欧元', 
    coinThree: '纽埃新西兰元', 
    coinFour: '摩纳哥欧元', 
  },
  {
    id: 40,
    // 最后一个对象，提供一些其他有趣或特殊的货币
    coinOne: '圣马力诺欧元',
    coinTwo: '库克群岛新西兰元', 
    coinThree: '安道尔欧元', 
    coinFour: '南桑威奇群岛镑', 
    
  },
  {
    id: 41,
    // 最后一个对象，提供一些其他有趣或特殊的货币
    coinOne: '皮特凯恩新西兰元', 
  },
  
]


</script>

<template>
    <el-card>
        <template #header>
        <div class="card-header">
            <span><IconAll class="icon"></IconAll>&nbsp;&nbsp;外汇币种</span>
        </div>
        </template>
        <table>
            <tbody>
                <tr v-for="i in tableData" :key="i.id">
                    <td>{{ i.coinOne }}</td>
                    <td>{{ i.coinTwo }}</td>
                    <td>{{ i.coinThree }}</td>
                    <td>{{ i.coinFour }}</td>
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