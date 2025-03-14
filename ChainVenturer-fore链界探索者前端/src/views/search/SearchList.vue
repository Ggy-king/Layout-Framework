<script setup lang="ts">
import noData from '@/assets/images/no-data.png'
import { onMounted } from 'vue';
import { computed } from 'vue';

// 第二种写法

const props = withDefaults(defineProps<{
    searchList: Record<string,any>
    typeNum: number
}>(),{})



const load = () => {
  // count.value += 2
}


</script>

<template>
    <ul v-if="typeNum === 0"  v-for="item in searchList" class="infinite-list" style="overflow: auto">
      <h2 v-if="item.length !== 0">{{ item[0].type }}</h2>
      <li v-for="i in item" :key="i._id" class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.imgPath" :alt="i.title">
              <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis2">{{ i.summarize }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.put_time }}</span>
                </div>
              </div>
            </div>
        </li>
    </ul>

    <ul v-else-if="typeNum === 1"  v-for="i in searchList.articles" :key="i._id" class="infinite-list" style="overflow: auto">
      <li class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.imgPath" :alt="i.title">
              <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis2">{{ i.summarize }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.put_time }}</span>
                </div>
              </div>
            </div>
        </li>
    </ul>

    <ul v-else-if="typeNum === 2"  v-for="i in searchList.topics" class="infinite-list" style="overflow: auto">
      <li class="infinite-list-item">
            <div class="info-cart">
              <img :src="i.imgPath" :alt="i.title">
              <div class="info-cart-content">
                <span class="title">{{ i.title }}</span>
                <span class="introduce ellipsis2">{{ i.summarize }}</span>

                <div class="foot">
                  <span class="foot-left"><b>{{ i.type }}</b> · {{ i.put_time }}</span>
                </div>
              </div>
            </div>
        </li>
    </ul>

    <el-empty 
      v-else
      style="--el-empty-padding: 40px 0 40px;min-height: 400px;"
      :image-size="600" 
      :image="noData"
      description="没有该类别的数据哦~"
    />
</template>

<style scoped lang="scss">
.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;

  h2 {
    margin-top: 40px;
    margin-bottom: 10px;
  }

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
    }
    .introduce {
      height: 40px;
      margin: 5px 0;
      color: #59636D;
      overflow: hidden;
    }
    .foot {
      color: #89939E;
      &-left b {
        text-decoration: underline;
        color: #e96868;
      }
      &-right {
        float: right;
        .el-icon {
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
  }
}

</style>
