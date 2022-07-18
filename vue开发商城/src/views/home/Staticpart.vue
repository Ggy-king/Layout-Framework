<template>
    <!-- 静态首页头部 -->
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号什么什么的
      <span class="iconfont position__notice">&#xe60b;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      <span class="search__text">
      高式大酒店欢迎您全场五折
      </span>
    </div>
    <!-- banner部分 -->
    <div class="banner">
    <img 
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt="banner" />
    </div>
    <!-- 列表部分 nav -->
    <div class="icons">
       <div
        v-for="item in iconItem"
        :key="item.id"
        class="icons__item">
        <img class="icons__item__img"
         :src="item.imgUrl" 
         :alt="item.iconName">
        <p class="icons__item__desc">{{item.iconName}}</p>
      </div> 
    </div>
     <!-- 隔层 -->
     <div class="gap"></div>
</template>

<script>

export default {
    name:'Staticpart',
    setup() {
        const iconItem = [
            {id : 1, iconName:"超市便利",imgUrl:"http://www.dell-lee.com/imgs/vue3/超市.png"},
            {id : 2, iconName:"菜市场",imgUrl:"http://www.dell-lee.com/imgs/vue3/菜市场.png"},
            {id : 3, iconName:"水果店",imgUrl:"http://www.dell-lee.com/imgs/vue3/水果店.png"},
            {id : 4, iconName:"鲜花绿植",imgUrl:"http://www.dell-lee.com/imgs/vue3/鲜花.png"},
            {id : 5, iconName:"医药健康",imgUrl:"http://www.dell-lee.com/imgs/vue3/医药健康.png"},
            {id : 6, iconName:"家居时尚",imgUrl:"http://www.dell-lee.com/imgs/vue3/家居.png"},
            {id : 7, iconName:"烘焙蛋糕",imgUrl:"http://www.dell-lee.com/imgs/vue3/蛋糕.png"},
            {id : 8, iconName:"签到",imgUrl:"http://www.dell-lee.com/imgs/vue3/签到.png"},
            {id : 9, iconName:"大牌免运",imgUrl:"http://www.dell-lee.com/imgs/vue3/大牌免运.png"},
            {id : 10, iconName:"红包套餐",imgUrl:"http://www.dell-lee.com/imgs/vue3/红包.png"},
        ];
        return {iconItem}
    }
}
</script>


<style lang="scss" scoped>
// 引入变量文件
@import '../../style/_Viriables.scss';
@import '../../style/_mixins.scss';

.position {
    position: relative; 
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontColor;
    // 多余文字省略号 mixin混合引入
    @include ellipsis;
    // 写全提高优先级
    .position__icon {
      position: relative;
      top: .01rem;
      font-size: .2rem;
    }
    .position__notice {
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .2rem;
    }
  }


// 搜索栏
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}

// banner部分
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  // 防止抖动 占位隐藏
  &__img {
    width: 100%;
  }
}

// nav-icon部分
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}

// 中间隔层
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}

</style>