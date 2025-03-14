<script setup lang="ts">


</script>

<template>
    <el-card shadow="always" class="point">
        <ul>
        <el-anchor :offset="270" :marker="false">
            <el-anchor-link  href="#one">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
            <el-anchor-link  href="#two">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
            <el-anchor-link  href="#three">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
            <el-anchor-link  href="#four">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
            <el-anchor-link  href="#five">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
            <el-anchor-link  href="#six">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
            <el-anchor-link  href="#seven">
                <li><el-icon><Medal /></el-icon></li>
            </el-anchor-link>
        </el-anchor>
    </ul>
        
    </el-card>
  

</template>

<style scoped lang="scss">
.point {
    position: fixed;
    left: calc(50% - 700px);
    top: 260px;
    width: 60px;
    height: 480px;
    border-radius: 10px;
    :deep(.el-card__body) {
        width: 100%;
        height: 100%;
        padding: 0;
        ul {
            display: flex;
            flex-direction: column;
            height: 100%;
            .el-anchor__list {
                padding-left: 0;
            }

            li {
                height: 60px;
                flex: 1;
                line-height: 60px;
                text-align: center;
                font-size: 28px;
                color: #ae782c;
            }
        }
    }
    
}
</style>
