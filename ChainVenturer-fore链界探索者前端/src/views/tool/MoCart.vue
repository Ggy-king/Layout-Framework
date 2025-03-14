<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { onMounted , ref} from 'vue'

import tool1 from '@/assets/images/tool-1.png'
import tool2 from '@/assets/images/tool-2.png'

const imgPath = ref<string>('')

const props = withDefaults(defineProps<{ 
    moList: Record<string,any>
    imgShow: boolean
    dbImg?: number
    kindName1: string
    kindName2: string
}>(),{})

const kindList = ref<Record<string,any>>([])



const handleToTool = (url:string) => {
    window.open(url,'_blank')
}

const handleClickTab = (tab: TabsPaneContext, event: Event) => {
    kindList.value = props.moList.filter((item:Record<string,any>) => {
        if(item.kind === tab.paneName) return item
    })
}

onMounted(() => {
    if(props.dbImg) {
        props.dbImg === 1 ? imgPath.value = tool1 : imgPath.value = tool2
    }
})

 
</script>

<template>
  <el-tabs type="border-card" @tab-click="handleClickTab">
        <el-tab-pane label="全部">

            <!-- 每一个卡片 -->
            <el-card v-for="i in props.moList" @click="handleToTool(i.url)" shadow="hover">
                <template #header >
                    <div class="card-head">
                        <div>
                            <div 
                            v-if="imgPath"
                            class="img-tool" 
                            :style="{
                                backgroundImage: `url(${imgPath})` ,
                                backgroundPosition: `${i.imgOrder * -24}px 0px`
                                }"></div>
                            <span>{{ i.title }}</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content ellipsis2">{{ i.info }}</p>
                <span class="card-bottom">
                    <span v-if="i.statistics" class="statistics"><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span v-if="i.risk" class="risk"><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span v-if="i.precise" class="precise"><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

        </el-tab-pane>


        <el-tab-pane :label="kindName1">
            <!-- 每一个卡片 -->
            <el-card v-for="i in kindList" @click="handleToTool(i.url)" shadow="hover">
                <template #header >
                    <div class="card-head">
                        <div>
                            <div 
                            v-if="imgShow"
                            class="img-tool" 
                            :style="{
                                backgroundImage: `url(${imgPath})` ,
                                backgroundPosition: `${i.imgOrder * -24}px 0px`
                                }"></div>
                            <span>{{ i.title }}</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content ellipsis2">{{ i.info }}</p>
                <span class="card-bottom">
                    <span v-if="i.statistics" class="statistics"><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span v-if="i.risk" class="risk"><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span v-if="i.precise" class="precise"><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

        </el-tab-pane>

        <el-tab-pane :label="kindName2">
            <!-- 每一个卡片 -->
            <el-card v-for="i in kindList" @click="handleToTool(i.url)" shadow="hover">
                <template #header >
                    <div class="card-head">
                        <div>
                            <div 
                            v-if="imgShow"
                            class="img-tool" 
                            :style="{
                                backgroundImage: `url(${imgPath})` ,
                                backgroundPosition: `${i.imgOrder * -24}px 0px`
                                }"></div>
                            <span>{{ i.title }}</span>
                        </div>
                        
                        <el-icon><Operation /></el-icon>
                    </div>
                </template>
                <p class="card-content ellipsis2">{{ i.info }}</p>
                <span class="card-bottom">
                    <span v-if="i.statistics" class="statistics"><el-icon><Opportunity /></el-icon>&nbsp;统计</span>
                    <span v-if="i.risk" class="risk"><el-icon><WarnTriangleFilled /></el-icon>&nbsp;风险</span>
                    <span v-if="i.precise" class="precise"><el-icon><TrendCharts /></el-icon>&nbsp;精密</span>
                </span>
            </el-card>

        </el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">
.el-tabs {
    :deep(.el-tabs__header) {
        background-color: #fff;
        .el-tabs__item {
            color: #89939e;
        }
        .el-tabs__item.is-active {
            color: #ae782c;
        }
        .el-tabs__item:hover {
            color: #ae782c;
        }
    }
    .el-tab-pane {
        display: flex;
        flex-wrap: wrap;
        
        .el-card {
            position: relative;
            margin: 20px;
            color: #89939e;
            width: 340px;
            height: 160px;
            cursor: pointer;
            .card-head {
                display: flex;
                justify-content: space-between;
                height: 18px;
                div {
                    
                    span {
                        font-size: 16px;
                        font-weight: 600;
                        color: #ae782c;
                    }
                    .img-tool {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        border-radius: 4px;
                        vertical-align: bottom;
                        margin-right: 10px;
                        background-repeat: no-repeat;
                        background-position: 0px 0px;
                    }
                    
                }
                .el-icon {
                    font-size: 20px;
                    color: #ae782c;
                }
            }

            .card-content {
                font-size: 12px;
                margin-bottom: 20px;
            }

            .card-bottom {
                position: absolute;
                bottom: 14px;
                display: inline-block;
                font-size: 12px;
                font-style: none;
                span {
                    padding: 4px;
                    border-radius: 4px;
                }
                .statistics {
                    color: #4378ff;
                    background-color: #f0f4ff;
                    margin-right: 10px;
                }
                .risk {
                    color: #f23f58;
                    background-color: #f8ecec;
                    margin-right: 10px;

                }
                .precise {
                    color: #00b98c;
                    background-color: #f1f9f7;
                }
            }
    }
}
}
</style>
