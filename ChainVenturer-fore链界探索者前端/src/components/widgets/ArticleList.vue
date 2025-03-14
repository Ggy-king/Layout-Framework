<!-- 文章列表 -->

<script setup lang="ts">
import VariousBtn from '../cart/VariousBtn.vue'

import { useRouter } from 'vue-router'

import { Delete, Edit } from '@element-plus/icons-vue'

import { userFromStore } from '@/stores'
import hooks  from '@/utils/hooks'
import { deleteWriteOne } from '@/api/write'
import { patchCollectEssay } from '@/api/essay'

// -------------接收文章列表的渲染参数
const articlesProps = withDefaults(defineProps<{
  list: any,
  isModify?: boolean
}>(),{
  list: [],
  isModify: false
})

// 文章操作 跳转 修改 删除
const router = useRouter()
const emit = defineEmits(['update-essay'])

const handleToEssay = (id:string) => {
  router.push({name: 'essay',params: { id } })
}
const handleToWrite = (id:string) => {
  router.push({name: 'write',params: { id } })
}
const handleEssayDelete = (id:string,imgUrl:string,index:number) => {
  hooks.confirm('您确定要删除此文章吗？','链界探索者提示您：')
  .then(async () => {
    try {
      const res = await deleteWriteOne(id,imgUrl)
      if(res.data.code === '3000') {
        emit('update-essay',{ listIndex: index })
        hooks.message('文章删除成功！期待您更多的创作','success')
      }
      if(res.data.code === '3006') hooks.message('文章删除失败！请刷新一下页面试试，若没有文章则是删除成功','error')
    } catch (error) {
      console.log(error)
      hooks.message('文章删除内定出错！请联系开发者(我)','error')
    }
  })
}

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

// 获取更多文章
const handleMoreEssay = (more:string) => {
  console.log(more)
}

const load = () => {
  // count.value += 2
}




</script>

<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="(i,index) in articlesProps.list" :key="i._id" class="infinite-list-item">
      <div class="info-cart">
        <img :src="i.imgPath" :alt="i.title" @click="handleToEssay(i._id)">
        <div class="info-cart-content">
          <span class="title" @click="handleToEssay(i._id)" >{{ i.title }}</span>
          <span class="introduce ellipsis">{{ i.summarize }}</span>
          <div class="foot">
            <span class="foot-left"><b>{{ i.topic }}</b><strong> · </strong>{{ i.put_time }}</span>
            <span class="foot-right" v-if="!articlesProps.isModify"> 
                <span>
                  <el-icon><View /></el-icon>{{ i.view_num }}
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
            <span class="foot-right" v-else>
              <el-button 
                style="font-size: 12px;" 
                color="#4378ff" 
                :icon="Edit" 
                round
                @click="handleToWrite(i._id)"
              >编辑</el-button>
              <el-button 
                style="font-size: 12px;" 
                color="#f23f58" 
                :icon="Delete" 
                round
                @click="handleEssayDelete(i._id,i.imgPath,index)"
              >删除</el-button>
            </span>
           </div>
        </div>
      </div>
    </li>

    <VariousBtn @message-more-essay="handleMoreEssay"/>
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
  border-bottom: 1px solid #f2f2f2;

  img {
    width: 200px;
    height: 136px;
    border-radius: 6px;
    margin-right: 14px;
    cursor: pointer;
  }

  .info-cart-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 136px;
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
      color: #89939E;
      position: relative;
      &-left {
        b {
          background-color: #f8ecec;
          padding: 2px 6px;
          color: #e96868;
        }
        strong {
          padding: 0 4px;
        }
      }
      &-right {
        float: right;
        display: flex;
        span {
          display: flex;
          align-items: center;
          margin-left: 30px;
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
