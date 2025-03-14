<script setup lang="ts">
import AboutMy from './AboutMy.vue'
import HobbiesOther from './HobbiesOther.vue'
import MatchSchool from './MatchSchool.vue'
import ProjectPresentation from './ProjectPresentation.vue'
import TechnologyList from './TechnologyList.vue'

defineOptions({
    name: 'DeveloperView'
})


</script>

<template>
  <!-- 占位 -->
  <div class="seat"></div>   

  <div class="overall">
     <!-- 第一部分 关于自己 -->
    <AboutMy/>

    <!-- 第二部分 其他爱好 -->
    <HobbiesOther/>

    <!-- 第三部分 校园荣誉 -->
    <MatchSchool/>

    <!-- 第四部分 项目展示 -->
    <ProjectPresentation/>

    <!-- 第五部分 技术展示 -->
    <TechnologyList />
  </div>

 
</template>

<style scoped lang="scss">
.seat {
    height: 4500px;
}
.overall {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
