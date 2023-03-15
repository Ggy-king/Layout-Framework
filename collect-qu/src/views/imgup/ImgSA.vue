<template>
<a-input-group compact style="display:inline-block;width: 400px; margin-left: 80px;">
    <a-input v-model:value="valueSubOne" style="width: 300px" placeholder="请确定试卷名称" />
    <a-button type="primary">保存提交</a-button>
</a-input-group>

<a-input-group compact style="display:inline-block;width: 80%; margin-top: 20px;">
    <a-input v-model:value="valueSubTwo" style="width: calc(100% - 200px)" placeholder="请描述相关知识点"/>
    <a-button type="primary">保存提交</a-button>
</a-input-group>

</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
name: 'ImgSA',
setup() {
    const valueSubOne = ref('')
    const valueSubTwo = ref('')

    return {
        valueSubOne,
        valueSubTwo
    };
},

});
</script>