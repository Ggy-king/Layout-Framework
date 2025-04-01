<script setup lang="ts">
import { ref,onMounted } from 'vue'

import project1 from '@/assets/images/my/project-1.png'
import project2 from '@/assets/images/my/project-2.png'
import project3 from '@/assets/images/my/project-3.png'
import project4 from '@/assets/images/my/project-4.png'
import project5 from '@/assets/images/my/project-5.png'

// 图片相关
const loading = ref<boolean>(true)
const imageSources = [project1,project2,project3,project4,project5]
// 通用图片加载器
const loadImage = (src:string) => new Promise((resolve, reject) => {
  const img = new Image()
  img.src = src
  img.onload = () => resolve(src)
})
const imageIsShow = async () => {
    try {
        await Promise.all(imageSources.map(src => loadImage(src)))
        loading.value = false
    } catch (error) {
        loading.value = true
    }
}

onMounted(() => {
    imageIsShow()
})

</script>


<template>
    <div class="project">
        <div class="center">
            <div class="head">
                <div class="head-title">项目展示 | Project show</div>
                <div class="head-info">这里展示我在大学里做过的项目，包括校企合作的、独立接活的、自己练习的，大大小小20多个，因篇幅有限故少罗列几个</div>
            </div>
            
            <div class="project-detail" style="height: 280px;">
                <el-skeleton 
                    style="width: 554px; height: 280px; padding-right: 40px;"
                    :loading="loading"
                    animated
                    :throttle="500"
                >
                    <template #template>
                        <el-skeleton-item variant="image" style="height: 100%" />
                    </template>
                    <template #default>
                        <img :src="project1" alt="项目一" style="padding-right: 40px;">
                    </template>
                </el-skeleton>
                <div class="project-detail-characters">
                    <h3>链界探索者-基于数字货币的智域探索平台</h3>
                    <span>这个当然是本网站啦，使用vue3、vue-router、pinia、vite、sass、typescript、eslint、prettier、echarts、nodejs、express、mongodb、mongoose、阿里云等技术搭建，着重以最完善的网站开发。</span>
                </div>
            </div>
            
            <div class="project-detail" style="height: 370px; padding-right: 20px;">
                <div class="project-detail-characters">
                    <h3>环球新闻管理后台</h3>
                    <span>实现较为完善的后台权限搭建，精细的权限控制、支持角色分配和权限继承、身份验证机强化、制菜单结构清晰、高效的后台处理逻辑。采用react、redux、Auth0、antd、json-server及Apifox使用。</span>
                </div>
                <el-skeleton 
                    style="width: 705px; height: 370px;"
                    :loading="loading"
                    animated
                    :throttle="500"
                >
                    <template #template>
                        <el-skeleton-item variant="image" style="height: 100%" />
                    </template>
                    <template #default>
                        <img :src="project2" alt="项目二">
                    </template>
                </el-skeleton>
            </div>

            <div class="project-detail" style="height: 350px;">
                <el-skeleton 
                    style="width: 482px; height: 350px;padding-right: 80px;"
                    :loading="loading"
                    animated
                    :throttle="500"
                >
                    <template #template>
                        <el-skeleton-item variant="image" style="float: right;width: 197px;height: 100%;" />
                        <el-skeleton-item variant="image" style="width: 194px;height: 100%;margin-right: 10px;" />
                    </template>
                    <template #default>
                        <img :src="project3" alt="项目三" style="padding-right: 10px;">
                        <img :src="project4" alt="项目四" style="padding-right: 80px;">
                    </template>
                </el-skeleton>
                
                <div class="project-detail-characters">
                    <h3>移动商场app 及 教育微信小程序</h3>
                    <span>前者移动端项目主要练习vue2、vuex、两套布局实现(重写两套代码)：rem布局及vmin布局、webpack优化、跨平台兼容。</span>
                    <span>后者为实现微信小程序开发，使用wxml开发，并没有过多深入实现小程序，后续打算深入uni-app框架。</span>
                </div>
            </div>

            <div class="project-detail" style="height: 300px;">
                <div class="project-detail-characters" >
                    <h3>其他想法</h3>
                    <span>就不展示更多项目了，未来对Uni-app、Docker、Flutter、Web3、区块链技术、Svelte、Solid等更多技术都会有所涉猎与展望。</span>
                </div>
                <el-skeleton 
                    style="width: 662px; height: 300px;padding-left: 100px;"
                    :loading="loading"
                    animated
                    :throttle="500"
                >
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 562px;height: 100%" />
                    </template>
                    <template #default>
                        <img :src="project5" alt="其他" style="padding-left: 100px;">
                    </template>
                </el-skeleton>
            </div>


        </div>
    </div>
</template>

<style scoped lang="scss">
.project {
    background-color: #0d1829;
    padding: 90px 0;
    .center {
        width: 1200px;
        margin: 0 auto;
    }
    .head {
        text-align: center;
        margin-bottom: 40px;
        &-title {
            font-size: 32px;
            color: #fff;
        }
        &-info {
            margin: auto;

            margin-top: 10px;
            width: 400px;
            font-size: 16px;
            color: #e1e5e5;
        }
    }
    &-detail {
        display: flex;
        justify-content: center;
        height: 200px;
        margin-bottom: 40px;
        &-characters {
            width: 410px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h3 {
                color: #fff;
                margin-bottom: 10px;
            }
            span {
                color: #cad5e0;
                font-size: 16px;
            }
        }

    }
}








</style>
