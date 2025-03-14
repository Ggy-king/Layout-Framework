<script setup lang="ts">

const emit = defineEmits(['changeBtn'])  // 接受父组件中定义的事件
const handleClickBtn = (num:number) => {
  emit('changeBtn',num)
}

</script>

<template>

  <!-- 大按钮 -->
  <div class="social-btn">
    <a class="btn bu-one" href="#"><strong class="fa" @click="handleClickBtn(1)">最新</strong></a>
    <a class="btn bu-two" href="#"><strong class="fa" @click="handleClickBtn(2)">领域</strong></a>
    <a class="btn bu-three" href="#"><strong class="fa" @click="handleClickBtn(3)">金融</strong></a>
    <a class="btn bu-four" href="#"><strong class="fa" @click="handleClickBtn(4)">技术</strong></a>
  </div>

</template>

<style scoped lang="scss">

.social-btn .btn,
 .btn:before,
 .btn .fa {
  transition: all 0.35s;
  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
}
.social-btn .btn:before {
  top: 90%;
  left: -110%;
}
.social-btn .btn .fa {
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
}



.social-btn .btn.bu-one:before {
  background-color: #3b5998;
}
.social-btn .btn.bu-one .fa {
  color: #3b5998;
}
.social-btn .btn.bu-two .fa {
  color: #dc4a38;
}
.social-btn .btn.bu-two:before {
  background-color: #dc4a38;
}
.social-btn .btn.bu-three:before {
  background-color: #00aff0;
}
.social-btn .btn.bu-three .fa {
  color: #00aff0;
  width: 80px;
}

.social-btn .btn.bu-four:before {
  background-color: #bf00ff;
}
.social-btn .btn.bu-four .fa {
  color: #bf00ff;
}





.social-btn .btn:focus:before,
.social-btn .btn:hover:before {
  top: -10%;
  left: -10%;
}
.social-btn .btn:focus .fa,
.social-btn .btn:hover .fa {
    display: block;
  color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}




// 按钮
.social-btn {
  height: 90px;
  font-size: 0;

}
.social-btn .btn {
  display: inline-block;
  background-color: #f2f3f5;
  width: 90px;
  height: 90px;
  line-height: 90px;
  margin: 0 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 28%;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
  opacity: 0.99;
}
.social-btn .btn:before {
  content: "";
  width: 120%;
  height: 120%;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social-btn .btn .fa {
  font-size: 30px;
  vertical-align: middle;
}

</style>
