<script setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue'
import { ref,onMounted } from 'vue'

import img from '@/assets/images/my/img.png'
import { useRouter } from 'vue-router'
import hooks from '@/utils/hooks'

// 跳转
const router = useRouter()
const handleToHome = () => {
    hooks.message('首页有下面四个图标便是我的联系方式哦，谢谢您的认可！','success')
    router.push({name: 'total'})
}

// 跳转
const handlePathTo = ( url:string ) :void => {
    window.open(url,'_blank')
}


// 图片相关
const loading = ref<boolean>(true)
const imageSources = [img]
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
    <div class="about center">
        <div class="about-title">
            <div class="about">关于我 作者有话说 | <span style="color:#f23f58;">About me</span> Author has something to say</div>
            <div class="info">寒窗苦读十余载，学得全栈方明白。如果您有开发各种网站、小程序、APP等需求，亦或者是跨平台、微服务、分离开发等需要。那希望我们可以深入交流，得到您的赏识将会是我最大前行的动力！
            </div>
            <div class="link">
                <el-card shadow="hover" @click="handleToHome()">
                    <el-icon style="color: #fff;font-size: 30px;"><Avatar /></el-icon>
                    <span>
                        <div>联系我 Contact me</div>
                        <div>希望您有更多的了解我</div>
                    </span>
                </el-card>
                <el-card shadow="hover" @click="handlePathTo('https://github.com/ggy-king')">
                    <IconGithub/>
                    <span>
                        <div>查看我的 Github</div>
                        <div>我的学习成果及我的项目</div>
                    </span>
                </el-card>
            </div>
        </div>
        <el-card class="about-image">
            <el-skeleton 
                style="width: 100%; height: 480px"
                :loading="loading"
                animated
                :throttle="500"
            >
                <template #template>
                    <el-skeleton-item variant="image"  style="height: 100%" />
                </template>
                <template #default>
                    <img :src="img" alt="我的学习记录及项目集成">
                </template>
            </el-skeleton>
        </el-card>
    </div>
</template>

<style scoped lang="scss">


.center {
    width: 1200px;
    margin: 100px auto 0;
    padding: 14px 0;
}

.about {
  height: 600px;
  &-title {
    width: 550px;
    height: 300px;
    margin-top: 150px;
    line-height: 1.2;
    .about {
        width: 510px;
        height: 72px;
        font-size: 30px;
        color: #000;
    }
    .info {
        margin-top: 30px;
        font-size: 18px;
        padding-right: 20px;
        color: #59636D;
    }
    .link {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        padding-right: 20px;
        height: 70px;
        .el-card:hover {
            cursor: pointer;
        }
        .el-card {
            width: 240px;
            border-radius: 12px;
            :deep(.el-card__body) {
                padding: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    margin-left: 12px;
                    div:first-child {
                        font-size: 16px;
                        font-weight: 600;
                        margin-bottom: 6px;
                    }
                    div:last-child {
                        color: #89939E;
                    }
                }
            }
            
        }

        .el-card:first-child {
            background-color: #0d1829;
            span {
                div:first-child {
                    color: #f8fafc;
                }
                div:last-child {
                        color: #f8fafce3;
                }
            }
        }

    }
  }

  &-image {
    position: absolute;
    top: 150px;
    left: 50%;
    width: 870px;
    height: 500px;
    :deep(.el-card__body) {
        padding: 10px;
    }
  }

}

</style>
