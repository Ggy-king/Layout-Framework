<template>
<span class="remarks">列表中左侧加号点击可展开图片</span>
<a-table :columns="columns" :data-source="data" :scroll="{ y:440,x: 1500 }" style="margin:20px 0 0 0;">
    <template #bodyCell="{ column }">
    <template v-if="column.key === 'action'">
        <!-- action为删除 -->
        <a>Delete</a>
    </template>
    </template>
    <template #expandedRowRender>
        <!-- #expandedRowRender="{ record }" -->
    <div style="margin: 0">
        <img src="../../assets/images/imgs/3.png" :alt="data.name">
    </div>
    </template>
</a-table>
</template>
<script>
import { defineComponent } from 'vue';
const columns = [{
width: '20%',
title: '来源试卷',
dataIndex: 'Cname',
key: 'Cname',
fixed: true,
}, {
width: '10%',
title: '科目',
dataIndex: 'Csubject',
key: 'Csubject',
}, {
width: '10%',
title: '所属年级',
dataIndex: 'Cnian',
key: 'Cnian',
},{
width: '10%',
title: '题目类型',
dataIndex: 'Ctype',
key: 'Ctype',
}, {
title: '相关知识点',
dataIndex: 'Cknow',
key: 'Cknow',
}];
const data = [{
key: 1,
Cname: '21级物理试卷第13期',
Csubject: '物理',
Cnian: '高一上册',
Ctype: '选择题',
Cknow: '知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点',
}, {
key: 2,
Cname: '21级物理试卷第14期',
Csubject: '数学',
Cnian: '高二上册',
Ctype: '填空题',
Cknow: '知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点',
}, {
key: 3,
Cname: '21级物理试卷第15期',
Csubject: '英语',
Cnian: '初三上册',
Ctype: '判断题',
Cknow: '知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点',
},{
key: 4,
Cname: '21级物理试卷第16期',
Csubject: '英语',
Cnian: '初三上册',
Ctype: '简答题',
Cknow: '知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点知识点',
}];
export default defineComponent({
name: 'CheckList',
setup() {
    return {
    data,
    columns,
    };
},

});
</script>

<style lang="scss" scoped>
.remarks {
    position: absolute;
    top: 80px;
    right: 24px;
    font-size: 13px;
    color: #aaa;
    // background-color: #fafafa;
}
</style>