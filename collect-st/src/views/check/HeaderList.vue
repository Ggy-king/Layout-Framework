<template>
    <div style="position:relative">
        <div style="margin-bottom:10px">
        <div style="display: inline-block;margin-right: 20px;">年级：</div>
        <a-radio-group v-model:value="valueGrade" name="grade">
            <a-radio value="mo">初一</a-radio>
            <a-radio value="mt">初二</a-radio>
            <a-radio value="mth">初三</a-radio>
            <a-radio value="so">高一</a-radio>
            <a-radio value="st">高二</a-radio>
            <a-radio value="sth">高三</a-radio>
        </a-radio-group><br />
        </div>
        <div style="display: inline-block;margin-right: 20px;">学科：</div>
        <a-radio-group v-model:value="valueSubject" name="subject">
            <a-radio value="all">全部题目</a-radio>
            <a-radio value="chinese">语文</a-radio>
            <a-radio value="math">数学</a-radio>
            <a-radio value="english">英语</a-radio>
            <a-radio value="pysics">物理</a-radio>
            <a-radio value="chemistry">化学</a-radio>
            <a-radio value="politics">生物</a-radio>
            <a-radio value="history">历史</a-radio>
            <a-radio value="geography ">地理</a-radio>
        </a-radio-group>
        <a-input-search
            style="position: absolute;top: 0;right: 0;width: 20%;"
            v-model:value="value"
            placeholder="搜索"
            enter-button
            @search="onSearch"
            />
    </div>
    
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
name:'HeaderList',
setup() {
    const valueGrade = ref('mo');
    const valueSubject = ref('all');
    const value = ref('');

    const onSearch = searchValue => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
    return {
        valueGrade,
        onSearch,
        valueSubject
    };
},

});
</script>