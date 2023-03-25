<template>
    <!-- 底部导航栏部分 -->
    <div class="docker">
        <div v-for="(item, index) in dockerList"
            :class="{ 'docker__item': true, 'docker__item--active': (index === currentIndex) }" :key="item.text">

            <router-link :to="item.to">
                <a class="docker__title">{{ item.text }}</a>
            </router-link>

        </div>
        <div class="more" @click="handlePopShowClick"><img src="../assets/jia.jpg"></div>
    </div>
    <div class="pop" v-if="show">
        <div class="pop-main">
            <span class="pop-main-title">输入设备代码</span>
            <div class="pop-main-in">
                <input type="text" name="" id="">
            </div>
            <input class="pop-main-sure" type="button" value="确认" @click="handleToastSuClick">
            <input class="pop-main-no" type="button" value="取消" @click="handleToastNoClick">
        </div>
    </div>
    <Toast v-if="data.showToast" :message="data.toastMessage" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import Toast from '../components/Toast'

export default {
    name: 'Docker',
    props: ['currentIndex'],
    components:{
        Toast
    },
    setup() {
        const data = reactive({
            show: false,
            showToast: false,
            toastMessage: ''
        })

        const changeToast = (message) => {
            data.showToast = true
            data.toastMessage = message
            setTimeout(() => {
                data.showToast = false
                data.toastMessage = ''
            }, 2000)
        }

        const dockerList = [
            { text: '设备', to: { name: 'Equipment' } },
            { text: '商城', to: { name: 'Shop' } },
            { text: '     ', to: { name: 'More' } },
            { text: '资讯', to: { name: 'News' } },
            { text: '我的', to: { name: 'Personal' } }
        ];


        const handlePopShowClick = () => {
            let showP = data.show
            data.show = !showP
            console.log(data.show);
        }

        const handleToastSuClick = () => {
            handlePopShowClick()
            changeToast('添加成功')
        }
        const handleToastNoClick = () => {
            handlePopShowClick()
            changeToast('已取消添加')
        }

        const { show } = toRefs(data)

        return {
            show,
            data,
            dockerList,
            handlePopShowClick,
            handleToastSuClick,
            handleToastNoClick
        }
    }

}
</script>

<style lang="scss" scoped>
// scoped 使该组件下的style标签只对该组件下的内容生效
@import '../style/_Viriables.scss';


// 底部导航栏
.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: .14rem .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    background-color: #fcfcfc;
    z-index: 9999;

    &__item {
        flex: 1;
        text-align: center;

        a {
            color: #7d7e82;
            text-decoration: none;
        }

        &--active {
            a {
                color: #1d1e22;
            }
        }
    }

    &__title {
        font-size: .17rem;
        font-weight: 700;
    }
}

.more {
    position: absolute;
    top: -.1rem;
    left: 50%;
    margin-left: -.25rem;
    height: .5rem;
    width: .5rem;
    border-radius: .25rem;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
    }
}

.pop {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
    background: #232323;
    opacity: 0.8;
    font-size: .3rem;
    z-index: 999;

    &-main {

        position: absolute;
        height: 1.8rem;
        width: 2.8rem;
        top: 2rem;
        left: 50%;
        border: .02rem solid #1d1e22;
        margin-left: -1.4rem;
        background-color: #ededed;
        z-index: 9999;

        &-title {
            font-size: .16rem;
            font-weight: 700;
            margin-left: .1rem;
        }

        &-in {
           input {
            width: 90%;
            margin-top: .2rem;
            margin-left: .1rem;
            outline:0; 
            background-color: #DCE2F1;
            border: none;
            border-bottom: .01rem solid #1d1e22;
           }
        }
        &-sure {
            height: .3rem;
            width: .6rem;
            font-size: .16rem;
            font-weight: 600;
            margin-left: 1rem;
            margin-top: .3rem;
            background-color: #3993d8;
        }
        &-no {
            height: .3rem;
            width: .6rem;
            font-size: .16rem;
            font-weight: 600;
            margin-left: .3rem;

        }
        
    }
}

.showPop {
    display: block;
}
</style>