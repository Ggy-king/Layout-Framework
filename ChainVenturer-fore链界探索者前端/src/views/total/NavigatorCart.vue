<!-- 导航卡片 -->

<script setup lang="ts">
import UniversalHead from '@/components/widgets/UniversalHead.vue'
</script>

<template>
  <div class="navigator">

    <UniversalHead title="推荐去处" :isMore="false"/>

    <div class="navigator-main">
        <a href="https://rose.ai/" target="_blank">
          <el-card style="max-width: 480px;border-radius: 8px;">
            <div class="nav-img" style="background-position: -300px 0px;"></div>
              <span>Rose.ai</span>
              <template #footer>一个金融云数据平台，旨在帮助用户查找、参与可视化与共享数据</template>
          </el-card>
        </a>
        <a href="https://cherry-ai.com/" target="_blank">
          <el-card style="max-width: 480px;border-radius: 8px; margin-top: 10px;">
              <div class="nav-img" style="background-position: -180px -300px;"></div>
              <span>Cherry Studio</span>
              <template #footer>多模型AI客户端，内置300多个AI助手，各种知识库，支持多服务商统一调度</template>
          </el-card>
        </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigator {
  width: 320px;
  .navigator-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div {
      font-size: 18px;
      font-weight: 700;
      background-image: url('../../assets//images/btc-icon.webp');
      background-position: -34px 0px;
      background-repeat: no-repeat;
    }
    
  }

  .navigator-main {
    :deep(.el-card__body) {
      padding: 16px 20px;
    }
    .nav-img {
        display: inline-block;
        width: 50px;
        height: 50px;
        vertical-align: middle;
        margin-right: 18px;
        background: url('@/assets/images/navigator-img10.png');
        background-repeat: no-repeat;
    }
    span {
        font-size: 16px;
        font-weight: 600;
    }
    
  }

}
</style>
