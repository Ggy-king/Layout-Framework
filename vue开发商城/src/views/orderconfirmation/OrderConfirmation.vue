<template>
<div class="wrapper">
    <div class="top">
        <div class="top__bgcor"></div>
        <div class="top__header">
            <!-- <div 
            class="iconfont top__header__back"
            @click="handleBackClick"
            >&#xe6f2;</div> -->
            购物车
        </div>
        <div class="top__receiver">
            <div class="top__receiver__title">收获地址</div>
            <div class="top__receiver__address">河南理工大学国防科技园2皓龙</div>
            <div class="top__receiver__info">
                <span class="top__receiver__info__name">瑶妹 (先生)</span>
                <span class="top__receiver__info__name">111222333444</span>
            </div>
        </div>
        <div class="iconfont top__receiver__icon">&#xe6f2;</div>
    </div>
    <div class="products">
        <div class="products__title">您的商品</div>
        <div class="products__list">  
            <div 
            class="product__item"
            v-for="item in data"
            :key="item.name"

            >
                <img class="product__item__img" :src="item.url" />
                <div class="product__item__detail">
                <h4 class="product__item__title">{{item.name}}</h4>  
                <p class="product__item__price">
                    <span class="product__item__yen">&yen; {{item.price}}</span>
                    <span class="product__item__yen product__item__yen1">&yen; {{item.total}}</span>  
                </p>
                </div>
            </div>
        </div>
    </div>
    <div class="order">
        <div class="order__price">实付金额  <b>￥1325</b></div>
        <div 

        class="order__btn" @click="handleSubmitOrder">提交订单</div>
    </div>
    <Docker :currentIndex="1"/>
    <OrderMask v-show="showConfirm"/>
</div>
    
</template>


<script>
import { useRouter} from 'vue-router'
import OrderMask from './OrderMask.vue'
import{ref} from 'vue'
import Docker from '../../components/Docker.vue'



export default {
    name:'OrderConfirmation',
    components:{ OrderMask, Docker },
    setup() {
        const data = [
            {url:'https://img0.baidu.com/it/u=1730527207,429107742&fm=253&fmt=auto&app=138&f=JPEG?w=530&h=500',name:'番茄',price:'33.3',total:'98'},
            {url:'https://img0.baidu.com/it/u=1730527207,429107742&fm=253&fmt=auto&app=138&f=JPEG?w=530&h=500',name:'黄瓜',price:'25.6',total:'453'},
            {url:'https://img0.baidu.com/it/u=1730527207,429107742&fm=253&fmt=auto&app=138&f=JPEG?w=530&h=500',name:'大葱',price:'45.7',total:'84'}
        ]
        const showConfirm = ref(false)
        const router = useRouter()
        const handleSubmitOrder = () => {
            showConfirm.value = true
        }
        const handleBackClick = () => {
            router.back()
        }
        return {data,handleBackClick,showConfirm,handleSubmitOrder}
    }

    
}

</script>

<style lang="scss" scoped>
@import '../../style/Viriables';
@import '../../style/mixins'; 


.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #eee;

}


.top {
    position: relative;
    height: 1.96rem;
    background-size: 100% 1.59rem;
    background-image: linear-gradient(0deg,rgba(0,145,255,0.00)4%,#0091FF 50%);
    background-repeat: no-repeat;
    overflow-y: scroll;
    &__header {
        position: relative;
        padding-top: .26rem;
        height: .24rem;
        color: $bgColor;
        text-align: center;
        font-size: .16rem;
        &__back {
            position:absolute;
            left: .18rem;
            font-size: .22rem;
        }
    }
    &__receiver {
        position: absolute;
        left: .18rem;
        right: .18rem;
        bottom: 0;
        height: 1.11rem;
        background: $bgColor;
        border-radius: .04rem;
        &__title {
            padding: .16rem 0 .14rem .16rem;
            font-size: .16rem;
            color: $content-fontColor;
            line-height: .22rem;
        }
        &__address {
            line-height: .2rem;
            padding: 0 .4rem 0 .16rem;
            font-size: .14rem;
            color: $content-fontColor;

        }
        &__info {
            padding: .06rem 0 0 .16rem;
            &__name {
                line-height: .18rem;
                margin-right: .06rem;
                font-size: .12rem;
                color: $medium-fontColor;
            }
        }
        &__icon {
            transform: rotate(180deg);
            position: absolute;
            right: .35rem;
            top: 1.3rem;
            color: $medium-fontColor;
            font-size: .2rem;

        }
    }
}

.products {
    margin: .16rem .18rem .1rem .18rem;
    background: $bgColor;
    &__title {
        width: 100%;
        padding-top: .2rem;
        padding-bottom: 2.44rem;
        // margin-bottom: .4rem;
        font-size: .18rem;
        text-align: center;
    }
    &__list {
        overflow-y: scroll;
        position: absolute;
        left: 0;
        right: 0;
        bottom: .6rem;
        top: 2.6rem;
    }
    .product__item {
        position: relative;
        display: flex;
        padding: .2rem .22rem .1rem .22rem;
        
        &__detail{
            // overflow: hidden;
            flex: 1;
        }
        &__img {
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &__title {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontColor;
            @include ellipsis;
        }
        
        &__price {
            position: relative;
            margin: 0;
            margin-top: .08rem;
            line-height: .2rem;
            font-size: .14rem;
            color: $hightLight-fontColor;
        }
        &__yen{
            font-size: .12rem;
        }
        &__yen1 {
            position: absolute;
            right: .05rem;
        }
    }
}

.order {
    position: absolute;
    left: 0;
    right: 0;
    bottom: .49rem;
    display: flex;
    height: .49rem;
    line-height: .49rem;
    background: $bgColor;

    &__price {
        flex: 1;
        text-indent: .24rem;
        font-size: .14rem;
        color: $content-fontColor;
    }
    &__btn {
        width: .98rem;
        background: #4FB0F9;
        color: $bgColor;
        text-align: center;
        font-size: .14rem;
    }
}
    

</style>