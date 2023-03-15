<template>
<div>
    <a-divider style="margin-top: 30px;"/>
    <a-steps progress-dot :current="4" direction="vertical" size= "small">
    <a-step style="padding-bottom: 70px" title="第一步" description="请点击上传按钮(最多15张图片)" />
    <a-step style="padding-bottom: 70px" title="第二步" description="请选择仅包含图片的文件夹" />
    <a-step style="padding-bottom: 70px" title="第三步" description="请在上方配置属性项" />
    <a-step style="padding-bottom: 70px" title="第四步" description="右侧配置提交属性" />
    <a-step style="padding-bottom: 70px" title="第五步" description="等待上传完成" />
    </a-steps>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'StepsA',
    // setup() {
    //     cons
    // },
})
</script>
