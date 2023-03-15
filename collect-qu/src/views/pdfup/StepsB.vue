<template>
<div>
    <a-divider style="margin-top:0px;"/>
    <a-steps progress-dot :current="4" direction="horizontal">
    <a-step title="第一步" description="请点击并选择PDF文件" />
    <a-step title="第二步" description="等待上传成功自动展示" />
    <a-step title="第三步" description="在右侧完成相应配置" />
    <a-step title="第四步" description="点击提交" />
    <a-step title="第五步" description="等待提交完成" />
    </a-steps>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StepsB',
    // setup() {
    //     cons
    // },
})
</script>
