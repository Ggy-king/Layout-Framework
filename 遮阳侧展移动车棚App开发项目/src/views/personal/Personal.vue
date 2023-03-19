<template>
    <div class="container">

    </div>
    <Docker :currentIndex="4"/>
</template>

<script>
import Docker from "../../components/Docker";


export default {
    name: 'personal',
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