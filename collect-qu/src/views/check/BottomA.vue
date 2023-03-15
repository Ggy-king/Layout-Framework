<template>
    <a-input-group compact style="margin-left: 10px;">
    <div class="check-bottom-a-grade">年级 : </div>
    <a-select v-model:value="valueNan" style="width: 10%; margin:0 0 0 20px;">
    <a-select-option value="primary">请选择</a-select-option>
    <a-select-option value="primary-one">初一</a-select-option>
    <a-select-option value="primary-two">初二</a-select-option>
    <a-select-option value="primary-three">初三</a-select-option>
    <a-select-option value="senior-one">高一</a-select-option>
    <a-select-option value="senior-two">高二</a-select-option>
    <a-select-option value="senior-three">高三</a-select-option>
    </a-select>

    <div class="check-bottom-a-grade">科目 : </div>
    <a-select v-model:value="valueSub" style="width: 10%; margin:0 0 0 20px;">
    <a-select-option value="subject">请选择</a-select-option>
    <a-select-option value="physics">物理</a-select-option>
    <a-select-option value="chinese">语文</a-select-option>
    <a-select-option value="english">英语</a-select-option>
    <a-select-option value="mathematics">数学</a-select-option>
    <a-select-option value="geography">地理</a-select-option>
    <a-select-option value="chemistry">化学</a-select-option>
    <a-select-option value="biology">生物</a-select-option>
    </a-select>

    <div class="check-bottom-a-grade">题目类型 : </div>
    <a-select v-model:value="valueTye" style="width: 10%; margin:0 0 0 20px;">
    <a-select-option value="type">请选择</a-select-option>
    <a-select-option value="type-one">类型一</a-select-option>
    <a-select-option value="type-two">类型二</a-select-option>
    <a-select-option value="type-three">类型三</a-select-option>
    <a-select-option value="type-four">类型四</a-select-option>
    </a-select>

    <SearchA />
</a-input-group>
</template>

<script>
import { defineComponent,ref} from 'vue';
import SearchA from './SearchA.vue';

export default defineComponent({
    name: "BottomA",
    setup() {
        const valueNan = ref("primary");
        const valueSub = ref("subject");
        const valueTye = ref("type");
        return {
            valueNan,
            valueSub,
            valueTye
        };
    },
    components: { SearchA }
})

</script>

<style lang="scss">
.check-bottom-a-grade {
    line-height: 32px;
    font-weight: bold;
    margin-left: 20px;
    display: inline-block;
}

</style>