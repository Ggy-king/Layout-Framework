<script setup lang="ts">

import hobbies1 from '@/assets/images/my/hobbies-1.jpg'
import hobbies2 from '@/assets/images/my/hobbies-2.jpg'
import hobbies3 from '@/assets/images/my/hobbies-3.jpg'
import hobbies4 from '@/assets/images/my/hobbies-4.jpg'
import hobbies5 from '@/assets/images/my/hobbies-5.png'
import hobbies6 from '@/assets/images/my/hobbies-6.jpg'

</script>


<template>
    <div class="hobbies">
        <div class="center">
            <div class="hobbies-title">了解我更多的兴趣 | Learn more about my interests</div>
            <div class="hobbies-subtitle">金融期货、量化算法 - Financial futures, Quantitative algorithms</div>
            <el-card class="hobbies-main">
                <div class="futures">
                    <div class="futures-top">
                        <el-icon><TrophyBase /></el-icon>
                        <div class="futures-top-info">
                            <h3>观赏我的期货盈率及荣誉</h3>
                            <div>学习过缠论、波浪理论、江恩理论，擅做波段交易</div>
                        </div>
                    </div>
                    <div class="futures-bottom">
                        <el-popover
                        :width="650"
                        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                        >
                        <template #reference>
                            <div class="futures-bottom-box" style="width: 200px;"><el-icon><PieChart /></el-icon> 期货盈率(虽为历史)</div>
                        </template>

                        <template #default>
                            <div
                                style="width: 300px; height: 700px;"
                            >
                                <p
                                style="font-size: 14px; color: var(--el-color-info);display: block;"
                                >
                                虽然做的不是很好，但也算是自己当时的经历
                                </p>

                                <div style="display: flex;">
                                    <img :src="hobbies1" alt="期货盈亏比" style="width: 100%;height: 100%;margin-right: 10px;">
                                    <img :src="hobbies2" alt="期货排名" style="width: 100%;height: 100%;">
                                </div>
                            </div>
                        </template>
                        </el-popover>

                        <el-popover
                        :width="1100"
                        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                        >
                        <template #reference>
                            <div class="futures-bottom-box"><el-icon><GoldMedal /></el-icon>荣誉查询</div>
                        </template>

                            <template #default>
                                <div
                                    style="width: 500px; height: 640px;"
                                >
                                    <p
                                        style="font-size: 14px; color: var(--el-color-info);display: block;"
                                    >
                                    大学大部分时间都在写代码，所以只参加了一次比赛
                                    </p>

                                    <div style="display: flex;">
                                        <img style="width: 70%;height: 100%;margin-right: 10px;" :src="hobbies3" alt="期货奖状" >
                                        <img style="width: 140%;height: 100%;" :src="hobbies4" alt="期货奖状净值">
                                    </div>
                                
                                </div>
                            </template>
                        </el-popover>
                    </div>
                </div>
                <div class="algorithms">
                    <div class="futures-top">
                        <el-icon><Monitor /></el-icon>
                        <div class="futures-top-info">
                            <h3>量化算法、AI算法</h3>
                            <div>基于skdj，使用大数据模型、多因子模型、趋势跟踪等</div>
                        </div>
                    </div>
                    <div class="futures-bottom">
                        <el-popover
                        :width="1220"
                        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                        >
                        <template #reference>
                            <div class="futures-bottom-box" style="width: 160px;"><el-icon><Tickets /></el-icon> 算法代码展示</div>
                        </template>

                            <template #default>
                                <div
                                    style="width: 600px; height: 450px;"
                                >
                                    <p
                                    style="font-size: 14px; color: var(--el-color-info);display: block;"
                                    >
                                    算法是基于vnpy平台，搭配缠论及算法实现
                                    </p>

                                    <div style="display: flex;">
                                        <img style="width: 96%;height: 100%;margin-right: 10px;" :src="hobbies5" alt="代码展示">
                                        <img style="width: 100%;height: 100%;" :src="hobbies6" alt="程序展示">
                                    </div>
                                </div>
                            </template>
                        </el-popover>

                    </div>
                </div>
            </el-card>
            <el-card class="hobbies-tip">
                <el-icon style="font-size: 20px;"><WarningFilled /></el-icon>
                <span>&nbsp;这只是我之前做过兴趣爱好，但现在更加努力的方向是全栈</span>
            </el-card>
            
        </div>
    </div>
</template>

<style scoped lang="scss">


.center {
    width: 1200px;
    margin: 0 auto;
}

.hobbies {
    height: 600px;
    background-color: #f0f5f9;
    text-align: center;

    &-title {
        font-size: 28px;
        font-weight: 600;
        color: #000;
        padding-top: 60px;
    }
    &-subtitle {
        font-size: 16px;
        color: #89939e;
        padding-top: 10px;
    }
    &-main {
        margin: 40px auto 0;
        width: 1000px;
        height: 300px;
        border-radius: 20px;
        :deep(.el-card__body) {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;

        }
        .futures {
            flex: 1;
            border-right: 1px solid #cad5e0;
            &-top {
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                .el-icon {
                    width: 60px;
                    height: 60px;
                    background-color: #d8e0ff;
                    border-radius: 14px;
                    font-size: 30px;
                    color: #4378ff;
                    margin-right: 20px;
                }
                &-info {
                    display: flex;
                    flex-direction: column;
                    h3 {
                        color: #304254;
                        text-align: left;
                    }
                    div {
                        color: #304254;
                    }
                }
            }
            &-bottom {
                display: flex;
                justify-content: center;
                &-box {
                    .el-icon {
                        color: #89939e;
                        font-weight: 600;
                        font-size: 20px;
                        vertical-align: middle;
                        line-height: 14px;
                        margin-right: 6px;
                        padding-bottom: 4px;

                    }
                    width: 140px;
                    padding: 10px 20px;
                    font-weight: 600;
                    border: 1px solid #cad5e0;
                    border-radius: 10px;
                    margin-left: 20px;
                    margin-top: 20px;
                    color: #445668;
                }
            }
        }
        .algorithms {
            flex: 1;
            
        }
        
    }
    &-tip {
        margin: 40px auto 0;
        
        width: 480px;
        height: 50px;
        border: 2px solid#cad5e0;
        border-radius: 10px;
        background-color: #f0f5f9;
        font-size: 16px;
        color: #304254;
        :deep(.el-card__body) {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;

        }
    }
}



</style>
