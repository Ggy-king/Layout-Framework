<template>
    <div class="img_con_right">
    <a-button class="img_btn">已确定，并上传提交</a-button>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
name: 'ImgRight',
setup() {
    

    return {
       
    };
},

});
</script>

<style lang="scss">
.img_con_right {
    position: absolute;
    top: 150px;
    left: 800px;
}
.img_btn {
    display: inline-block;
}
</style>