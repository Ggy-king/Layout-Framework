<template>
        <!-- 地址提示 -->
        <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>学生管理后台</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 主体部分 -->
        <div :style="{ padding: '10px', background: '#fff', minHeight: '640px' }">
          <StudentData />
        </div>

</template>
<script>
import { defineComponent } from 'vue';
import StudentData from './student/StudentData.vue';


export default defineComponent({
name:'StudentManage',
components: {
    StudentData
}
});
</script>
<style>
</style>