<!-- 发表评论 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
import IconGiveUp from '@/components/icons/IconGiveUp.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import hooks from '@/utils/hooks'
import { userFromStore } from '@/stores'
import { patchMarkData } from '@/api/essay'

const input = ref('')
const route = useRoute()
const loginStore = userFromStore()

const handlePublishMark = async () => {
    const realText = input.value.trim()
    if(realText.length === 0) return hooks.message('评论内容不能为空','warning')
    
    try {
        const res = await patchMarkData(route.params.id as string,realText)
        if(res.data.code === '2007') {
            hooks.message('您还没有登录呢，请您登录一下吧','warning')
            loginStore.changeLoginVisible(true)
        } else if(res.data.code === '3000') {
            hooks.message('评论成功！请刷新看看','success')
        } else if(res.data.code === '3004') {
            hooks.message('评论失败，请检查是否有违禁词，格式是否错误，或者是服务端问题','error')
        } else {
            hooks.message('服务端错误！','error')
        }
    } catch (error) {
        hooks.message('系统错误','error')
    }
    hooks.message('发布评论功能暂且关闭，敬请谅解','warning')
}

</script>

<template>
    <div>
        <!-- 头部 -->
        <UniversalHead title="评论在即" :isMore="false"/>
        <!-- 输入评论 -->
        <div class="mt-4">
            <el-input
            v-model="input"
            @keyup.enter="handlePublishMark"
            placeholder="请尽情发表您的评论吧"
            >
            <template #append>
                <el-button @click="handlePublishMark">发表</el-button>
            </template>
            </el-input>
        </div>
        <!-- 空状态 -->
        <!-- <el-empty description="还没有评论唉"  :image-size="100"/> -->
        <!-- 评论区 -->
        <div class="comment-section">
            <img src="../../assets//images/user-avatar.png" alt="">
            <div class="section-main">
                <div class="avatar-name">小高同志</div>
                <p class="section-content">本课开始，本馋个人理解，缠论进入下半部分。53课的发表时
                    间为2007-05-23，缠师病情确认时间为2008-04-22，缠论最后一课的完成时间为2008
                    -08-29，而缠师仙逝的时间为2008-10-31。这些时间点，似乎预示着什么，不可言说，
                    不可言说。后半部缠论，读起来总感觉什么地方怪怪的，没有了前面精美、严谨的气息，
                    最主要的是似乎后半部缠论脱离了实战，变成了缠师将缠论量化、可视化的理论实验场，
                    总感觉那里不对头，一叹！后半部分笔记，本馋最终定稿，是本缠将个人理解的缠论基本原理
                    ：走势终完美，缠论四大理论基石：中枢、级别、分解、自同构性结构，以及缠逻辑，贯穿其
                    中，尽可能还原缠论逻辑的本来面目，其中有些观点与原文出入较大，请各位斟酌斧正。
                </p>
                <div class="section-bottom">
                    <span>2025-01-06 09:18:29 </span>
                    <div class="icon">
                        <el-icon><Delete /></el-icon>
                        <IconGiveUp />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped lang="scss">
.input-with-select > .el-input-group__prepend {
    background-color: pink;
}
.el-input {
    --el-input-placeholder-color: #757575;
    --el-input-text-color: #000;
    --el-input-focus-border-color: #dcdfe6;
    // --el-input-border-color: #fff;
    --el-input-border-radius: 20px;
    --el-input-focus-border: red;
    --el-input-height:40px;
    // :deep(.el-input-group__prepend){
    //     padding: 0 10px;
    //     background-color: #fff;
    //     border-right: none;
    // }
 
    :deep(.el-input__inner) {
        padding-left: 10px;
    }
    :deep(.el-input-group__append) {
        background-color: #f7931a;
        
        .el-button {
            color: #fff;
            font-size: 16px;
        }
    }
    
}

.comment-section {
    margin-top: 20px;
    img {
        float: left;
        width: 40px;
        height: 40px;
    }
    .section-main {
        margin-left: 50px;
        width: 750px;

        .avatar-name {
            font-weight: 600;
            font-size: 16px;
        }
        .section-content {
            line-height: 22px;
        }
        .section-bottom {
            margin-top: 10px;
            color: #89939e;
            padding-bottom: 10px;
            border-bottom: 1px solid #e4e6e9;

            .icon {
                font-size: 20px;
                float: right;
                .el-icon {
                    margin-right: 20px;
                }
            }
        }
    }
}

</style>