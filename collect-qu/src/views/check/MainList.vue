<template>
    <div id="components-table-demo-size">
    <div>
        <h4></h4>
    </div>
    <a-table :columns="columns" :data-source="data" size="middle" />
</div>
</template>
<script>
import { defineComponent } from 'vue';
const columns = [{
title: '试卷名称',
width:'70%',
dataIndex: 'name',
}, {
title: '题目数量',
width:'10%',
dataIndex: 'num',
}, {
title: '操作',
width:'20%',
dataIndex: 'edit',
}];
const data = [{
key: '1',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '2',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '3',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '4',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '5',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '6',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '7',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '8',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '9',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '10',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}, {
key: '11',
name: '【英语】2021年辽宁省大连市初中结业考试英语真题',
num: 28,
edit: '查看 添加',
}];
export default defineComponent({
name:'MainList',
setup() {
    return {
    data,
    columns,
    };
},

});
</script>
<style>
#components-table-demo-size h4 {
margin-bottom: 16px;
}
</style>