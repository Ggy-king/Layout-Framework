<template>
    <div class="container">

    </div>
    <Docker :currentIndex="3"/>
</template>

<script>
import Docker from "../../components/Docker";


export default {
    name: 'news',
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