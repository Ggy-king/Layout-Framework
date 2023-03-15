<template>
  <!-- 地址提示 -->
  <a-breadcrumb style="margin: 16px 0">
  <a-breadcrumb-item>首页</a-breadcrumb-item>
  <a-breadcrumb-item>Welcome!</a-breadcrumb-item>
  </a-breadcrumb>
  <!-- 主体部分 -->
  <div :style="{ padding: '24px', background: '#fff', minHeight: '600px' }">
    <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎来到</div>
      <div class="title">收题后台管理系统</div>
      <div class="desc">
        - Vue3.0+ElementPlus+es6+Python+Mongo共建企业级收题后台管理系统
      </div>
    </div>
    <!-- <div class="img"></div> -->
  </div>
  </div>

</template>
<script>
  
export default {
  name: 'WelcomeView'
};
</script>

<style lang="scss" scoped>
.welcome {
  position: relative;
  height: 400px;
  width: 100%;
  background-image: url(../assets/images/welcomeBack.webp);
  background-size: contain;
  .content {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 100%;
    .sub-title {
      font-size: 32px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 44px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      margin-top: 200px;
      margin-right: 10%;
      text-align: right;
      font-size: 12px;
      color: #999;
    }
  }
  .img {
    margin-left: 85px;
    background-image: url("../assets/images/welcome.png");
    background-size: 100% 100%;
    width: 371px;
    height: 371px;
  }
}
</style>









