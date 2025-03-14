<!-- 标签式浏览内容页面 -->

<script setup lang="ts">

import { UrlStore, userFromStore } from '@/stores'
import hooks  from '@/utils/hooks'

import { patchCollectEssay } from '@/api/essay'

// 接受不一样的文章
const props = withDefaults(defineProps<{
  essayList: Record<string,any>
  essayType: string
}>(),{
})

// 跳转文章
const url = UrlStore()
const handleToEssay = (id:string) => {
    window.open(`${url.baseUrl}/essay/${id}`)
//   router.push({name: 'essay',params: { id } })
}

// 设置标题块颜色
const handleTopicColor = ( type: string ) => {
  if (type === 'technology') {
    return 'b2'
  } else if (type === 'currency') {
    return 'b3'
  } else {
    return 'b1'
  }
}
// 设置不同标题块
const essayTypeDisplay = (item: Record<string,any>) => {
    if (props.essayType === 'technology') {
      return item.technology
    } else if (props.essayType === 'currency') {
      return item.currency.join(" ")
    } else {
      return item.topic
    }
}
// 设置时间格式

// 文章收藏
const handleCollectEssay = async (id:string) => {
  try {
    const res = await patchCollectEssay(id)
    if(res.data.code === '2007') {
      hooks.message('您还没有登录呢，请您登录一下吧','warning')
      const loginStore = userFromStore()
      loginStore.changeLoginVisible(true)
    } else if(res.data.data === 0) {
      hooks.message('收藏成功！去个人中心查看吧！','success')
    } else if(res.data.data === 1){
      hooks.message('取消收藏成功！','success')

    } else {
      hooks.message('服务端错误！','error')

    }
  } catch (error) {
    hooks.message('系统错误','error')
  }
}


const count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const load = () => {
  // count.value += 2
}


</script>

<template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in props.essayList" :key="i.id" class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.imgPath" :alt="i.title" @click="handleToEssay(i._id)">
              <div class="info-cart-content">
                <span class="title" @click="handleToEssay(i._id)">{{ i.title }}</span>
                <span class="introduce ellipsis">{{ i. summarize}}</span>

                <div class="foot">

                  <span class="foot-left">
                    <b :class="handleTopicColor(props.essayType)">
                      {{ essayTypeDisplay(i) }}
                    </b><strong> · </strong>{{ i.put_time }}
                  </span>

                  <span class="foot-right"> 
                    <span>
                      <el-icon><View /></el-icon> {{ i.view_num }}
                    </span>

                    <span 
                      style="cursor: pointer;"
                      @click="handleCollectEssay(i._id)"
                    >
                      <el-icon><Star /></el-icon>收藏
                    </span>

                    <span>
                      <el-icon><Flag /></el-icon>已展示
                    </span>
                  </span>
                </div>
              </div>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;

}

.info-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid #bac3ce;

  img {
    width: 200px;
    height: 130px;
    margin-right: 14px;
    cursor: pointer;
  }

  .info-cart-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
    width: 586px;
    .title {
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }
    .title:hover {
      color: #ae782c;
    }
    .introduce {
      flex: 1;
      font-size: 14px;
      color: #59636D;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      color: #89939E;
      &-left {
        display: flex;
        align-items: center;
        b {
          display: inline-block;
          padding: 2px 6px;
          max-width: 152px;
          text-align: center;
        }
        .b1 {
          background-color: #f8ecec;
          color: #e96868;
        }
        .b2 {
          background-color: #f1f9f7;
          color: #00b98c;
        }
        .b3 {
          background-color: #f0f4ff;
          color: #4378ff;
        }
        
        strong {
          
          padding: 0 4px;
        }
      }
      &-right {
        display: flex;
        span {
          display: flex;
          align-items: center;
          margin-left: 40px;
          .el-icon {
            font-size: 16px;
            margin-right: 4px;
          }
        }
        
      }
    }
  }
}


</style>
