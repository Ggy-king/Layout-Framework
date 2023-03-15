<template>
<div class="main">
    <a-button class="small" style="margin-right:2px;">第一题</a-button>
    <a-button class="small" style="margin-right:2px;">第二题</a-button>
    <a-button class="small" style="margin-right:2px;">第三题</a-button>
    <a-button class="small" style="margin-right:2px;">第四题</a-button>
    <div style="float:right">
        <a-button style="margin-right:10px" class="small">删除此题</a-button>
        <a-button class="small">上传此题</a-button>
    </div>
    <div class="main_context">
        <div class="before"></div>
    </div>
    <div class="show_title show_cor">裁剪区</div>
    <a-button @click="sureSava" class="show_btn small">裁剪保存</a-button>
    <div class="container">
        <div class="img-container">
            <img src="../../assets/images/imgs/7.png" ref="image" alt=""> 
        </div>
        <div class="afterCropper">
            <img :src="afterImg" alt="">
        </div>
    </div>
</div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { defineComponent } from 'vue';
import { message } from 'ant-design-vue';

export default defineComponent ({
name: 'HelloWorld',
data () {
    return {
    myCropper: null,
    afterImg: ''
    }
},
mounted() {
    this.init()
},
methods: {
    init(){
    this.myCropper = new Cropper(this.$refs.image, {
        viewMode: 2,
        dragMode: 'crop',
        initialAspectRatio: 1,
        aspectRatio: 0,
        preview: '.before',
        background: true,
        autoCropArea: 0.6,
        zoomOnWheel: true,
    })
    },
    sureSava(){
    this.afterImg = this.myCropper.getCroppedCanvas({
        imageSmoothingQuality: 'high'
    }).toDataURL('image/jpeg')
    message.success('已裁剪')
    }
},
})
</script>

<style lang="scss">
.small {
    font-size: 12px;
    height: 26px;
    width: 76px;
}
.main {
position: absolute;
top: 110px;
left: 600px;

}
// .container{
// display: flex;
// }
.show_title {
display: inline-block;
border: 1px solid #ccc;
height: 26px;
width: 60px;
font-size: 12px;
font-weight: bold;
text-align: center;
line-height: 26px;
}
.show_cor {
margin: 5px 0;
}
.show_btn {
float: right;
margin: 5px 0;
}
.main_context { 
margin-top: 5px;
padding: 5px;
width: 660px;
height: 240px;
border: 2px solid black;
background-color: #ccc;
}
.before{
width: 646px;
height: 226px;
overflow: hidden;
/* 这个属性可以得到想要的效果 */
}
.img-container{
width: 660px;
height: 240px;
overflow: hidden;
}
.afterCropper{
height: 294px;
margin-top: 10px;
padding: 5px;
border: 1px solid salmon; 
text-align: center;
line-height: 284px;

background-color: #ccc;

}
.afterCropper img{
width: 500px;
max-height: 280px;
}
</style>