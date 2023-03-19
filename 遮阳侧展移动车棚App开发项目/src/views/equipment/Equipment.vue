<template>
    <div class="container">

    </div>
    <!-- 底部导航栏部分 -->
    <Docker :currentIndex="0" />
</template>

<script>
import Docker from "../../components/Docker";

export default {
    name: 'equipment',
    components: {
        Docker
    }
}

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    background-color: #efefef;

}
</style>