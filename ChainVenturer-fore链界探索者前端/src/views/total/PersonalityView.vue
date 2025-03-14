<script setup lang="ts">
import { ref , computed,onMounted, watch,onBeforeUnmount  } from 'vue';

import IconEmail from'@/components/icons/IconEmail.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconQQ from'@/components/icons/IconQQ.vue'
import IconWeixin from'@/components/icons/IconWeixin.vue'
import IconTriangle from'@/components/icons/IconTriangle.vue'

import { getSelfData } from '@/api/total'

// 页面高度
const viewportHeight = ref<number>(window.innerHeight);
const viewportHeightCount = computed(() => {
    return viewportHeight.value - 90
})


// 获取个性文字
const textList = [
    '生命是一团欲望，不能满足便痛苦，满足便无聊，人生就在痛苦与无聊之间摇摆',
    '在这个物质至上的时代，我们用金钱丈量幸福，用消费填补空虚，却在堆积如山的物品中愈发感到生命的荒诞',
    '在这个光怪陆离的世界里，我们都是带着假面的演员，只是有些人比其他人更早地忘记了自己原本的摸样',
    '我们用谎言编织成网，将自己围在其中，却还以为那是通向自由的桥梁',
    '我们用算法预测爱情，用数据量化成功，用效率压缩情感时，会不会在追逐最优解的路上，把灵魂也迭代掉了',
    '人的面孔总是比人的嘴巴说出来的东西更多，更有趣。因为嘴巴说出来的是人的思想，而面孔说出来的却是思想的本质',
    '在这个数字化的时代，我们的灵魂被切割成无数个像素点，在虚拟的海洋中漂泊，却始终找不到属于自己一片的陆地',
    '很奇怪，我们不屑与他人为伍，却害怕自己与众不同',
    '一束光照进铁塔，铁塔里的肮脏被显现出来，于是这道光变有了罪',
]

const fullText = ref<string>('');
const displayedText = ref<string>('');
const typingSpeed = ref<number>(180); // 稍微增加打字速度以模拟自然停顿
 

const getSelfObj = async () => {
  try {
    const res = await getSelfData()
    if(res.data.code === '3002') fullText.value = '生命是一团欲望，不能满足便痛苦，满足便无聊，人生就在痛苦与无聊之间摇摆'
    if(res.data.code === '3000') fullText.value = res.data.data[0]!.selfText
  } catch (error) {
    
  }
} 

const typeText = async () => {
  if (displayedText.value.length < fullText.value.length) {
    displayedText.value += fullText.value[displayedText.value.length]
    setTimeout(() => typeText(), typingSpeed.value + Math.floor(Math.random() * 50)) // 增加随机延迟以模拟自然打字
  }
}

const resetText = () => {
  displayedText.value = ''
  setTimeout(() => {
    typeText()
  }, typingSpeed.value * 2)
};
 
watch(fullText, () => {
  resetText()
}, { immediate: true })
 
const triangleRef = ref<HTMLDivElement | null>(null)


onMounted(async () => {
  await getSelfObj()
  typeText()
  
})
onBeforeUnmount(() => {
})

</script>

<template>
  <!-- 个性渲染 -->
  <div class="personality" :style="{ height: (viewportHeightCount + 10) + 'px'}">
      <!-- 文字 -->
      <div class="box">
          <span v-for="(char, index) in displayedText" :key="index" class="char">{{ char }}</span>
      </div>

      <!-- 小形状动态 -->
      <div class="triangle" ref="triangleRef">
        <IconTriangle />
      </div>
      <div class="square" ref="square"></div>
      <div class="circle" ref="circleRef"></div>

      <!-- icon -->
      <div class="icon-link">
        
        <el-popover
          placement="top"
          trigger="click"
          :offset="10"
        >
          <template #reference>
            <span>
              <el-tooltip
                effect="dark"
                content="微信"
                placement="top"
              >
                <span class="icon-m weixin"><IconWeixin /></span>
              </el-tooltip>
            </span>
          </template>
          <template #default>
            <span style="font-size: 12px;">如果二维码失效，请您通过其他方式联系我</span>
            <img style="width: 100%;margin-top: 6px" src="@/assets/images/weixin-friend.png" alt="微信">
          </template>
        </el-popover>

        <el-tooltip
          effect="dark"
          content="QQ"
          placement="top"
        >
          <a href="tencent://AddContact/?fromId=XX&fromSubId=1&subcmd=all&uin=2998483320" target="_blank" class="icon-m"><IconQQ /></a>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="邮件"
          placement="top"
        >
          <a href="mailto:a18581897806@outlook.com?subject=您好，我是小高" class="icon-m"><IconEmail /></a>
        </el-tooltip>

        <el-tooltip
          effect="dark"
          content="Github"
          placement="top"
        >
          <a href="https://www.github.com/ggy-king" target="_blank" class="icon-m"><IconGithub /></a>
        </el-tooltip>
        
      </div>

      <!-- 箭头 -->
      <el-icon class="arrow"><DArrowLeft /></el-icon>
  </div>
  
  <div :style="{ height: viewportHeightCount + 'px'}">
  
  </div>
 
</template>

<style scoped lang="scss">
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


.personality{
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  color: #50505c;
  white-space: pre; /* 保持空格和换行 */
  overflow: hidden; /* 防止内容溢出 */
  background-image: url('@/assets/images/total-bk.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1000px;
    margin-top: -100px;
    .char {
      opacity: 0;
      transform: translateX(0);
      transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
    }
      
    .char-enter-active, .char-leave-active {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .char-enter-from, .char-leave-to {
      opacity: 0;
      transform: translateX(-10px);
    }
    
    .char-enter-to, .char-leave-from {
      opacity: 1;
      transform: translateX(0);
    }
    span {
      display: inline-block;
      animation: fadeIn 0.5s ease-in-out forwards;
      animation-delay: .3s;
    }
  }

  .icon-link {
    position: absolute;
    bottom: 80px;

    .icon-m {
      margin: 10px;
    }
    .weixin {
      cursor: pointer;
    }
  }  
  
  .arrow {
    position: absolute;
    bottom: 16px;
    animation: arrowAn 1s ease infinite alternate;
  }
}
 
.triangle {
  position: absolute;
  top: 100px;
  left: calc(50% - 600px);
  animation: triangleAn 20s linear 0s infinite;
}

.square {
  position: absolute;
  top: 0;
  left: calc(50% + 600px);
  width: 200px;
  height: 200px;
  background-color: #1a0dab;
  border-radius: 20px;
  opacity: .5;
  animation: squareAn 30s linear 0s infinite alternate;
}

.circle {
  position: absolute;
  bottom: 0;
  left: 100px;
  width: 300px;
  height: 300px;
  background-color: #e0f7fa;
  opacity: .9;
  border-radius: 50%;
  transform-origin: 80px 400px; /* 设置旋转中心为容器中心减去圆的一半大小 */
  animation: rotateCircle 30s linear infinite alternate;
}




@keyframes triangleAn{
  from {
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes squareAn {
  from {
    transform: translate(0,0) rotate(0deg);
  }
  to {
    transform: translate(-600px, 200px) rotate(360deg);
  }
}

@keyframes rotateCircle {
    from {
      transform: translate(-50%, -50%) rotate(-50deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(100deg);
    }
}

@keyframes arrowAn {
    from {
      transform: translate(0, 0) rotate(-90deg);
    }
    to {
      transform: translate(0, -100%) rotate(-90deg);
    }
}

</style>
