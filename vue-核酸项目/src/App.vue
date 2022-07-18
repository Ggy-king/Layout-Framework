<template>
  <div class="flex">
    <div class="header">
      <div class="header__title">爱上自习室</div>
    </div>
    <div class="timer">
      <div class="timer__data">2022年7月18日</div>
      <div class="timer__computed">
        {{dateFormat(date)}}
      </div>
    </div>
    <div class="content">
      <div class="content__name">高*源</div>
      <div class="content__number">210281********1519</div>
      <div class="content__check">
        <div class="content__check__left">
          <div class="left__top">核酸检测结果</div>
          <div class="left__bottom">
            <div class="one">24</div>
            <div class="two">
              <div class="two__one">小时内</div>
              <div class="two__two">阴性</div>
            </div>
          </div>
        </div>
        <div class="content__check__right">
          <div class="right__top">疫苗接种</div>
          <div class="right__bottom">已接种3针剂</div>
        </div>
      </div>
    </div>
    <div class="svg">查看行程卡</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      date: new Date()
    }
  },
  methods: {
    dateFormat(time) {
      var date = new Date(time);
    
     
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return hours + " : " + minutes + " : " + seconds;
    }
  },
  mounted() {
    //显示当前日期时间
    let _this = this                    // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date();          // 修改数据date
    }, 1000)
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);        // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.flex {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 730px;
  background: #f5f6fa;

}

.header {
  width: 100%;
  height: 220px;
  background-image: url(./img/header.png);
  background-size: 100% 100%;
}

.header__title {
  position: absolute;
  top: 68px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 26px;
  color: #fff;

}
.timer {
  position: absolute;
  top: 158px;
  left: 50%;
  transform: translateX(-50%);
  width: 324px;
  height: 100px;
  border-radius: 6px;
  background: #fff;
}
.timer__data {
  margin-top: 4px;
  font-size:18px;
  color:#6c6c6c;
  text-align: center;
}
.timer__computed {
  margin-top: 8px;
  text-align: center;
  font-size: 54px;
  font-weight: 700;
}
.content {
  width: 324px;
  height: 200px;
  margin:0 auto;
  margin-top: 60px;
  background: #fff;
  border-radius: 6px;
}
.content__name {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 18px;
  font-size:26px;
  font-weight: 500;
  color: #222;
}
.content__number {
  padding-left: 18px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 21px;
  color:#888;
  border-bottom: 1px solid #f5f5f5;
}
.content__check {
  display: flex;
  /* justify-content: center; */
  margin:0 auto;
  margin-top: 16px;
  width:288px;
}
.content__check__left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 140px;
  height: 94px;
  margin-right: 8px;
  background: #01b72f;
  border-radius: 6px;
  text-align: center;
}
.left__top {
  margin-top:12px;
  flex: 1;
  font-size: 16px;
  color:#fff;
}
.left__bottom {
  display: flex;
  flex: 1;
  justify-content: center;
}
.one {
  /* flex: 1; */
  font-size: 50px;
  font-weight: 700;
  color: #fff;

}

.two__one{
  margin-top: 4px;
  font-size:16px;
  color:#fff;
}
.two__two {
  margin-top: 2px;
  font-size:22px;
  font-weight: 700; 
  color: #fff;
}
.content__check__right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 140px;
  height: 98px;
  margin-right: 8px;
  border-radius: 6px;
  background: #f5fafe;
}
.right__top {
  margin-top: 12px;
  flex: 1;
  text-align: center; 
  font-size: 18px;
  color: #333;
} 
.right__bottom {
  /* margin-bottom: 12px; */
  flex: 1;
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  color: #36b6f5;
}

.svg {
  margin: 0 auto;
  margin-top: 20px;
  width:260px;
  height: 50px;
  background: #fff;
  border: 0.5px solid #2bc150;
  border-radius: 25px;
  font-size: 20px;
  text-align: center;
  color: #2bc150;
  line-height: 50px;
}
</style>
