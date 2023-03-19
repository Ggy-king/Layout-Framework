<template>
    <div class="container">

    </div>
    <Docker :currentIndex="1"/>
</template>

<script>
import Docker from "../../components/Docker";

export default {
    name: 'shop',
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