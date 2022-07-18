<template>
    <div class="mask">
        <div class="mask__content">
            <h3 class="mask__content__title">确认离开收银台吗？</h3>
            <p class="mask__content__desc">请进快完成支付，否则将会被取消</p>
            <div class="mask__content__btns">
                <div
                @click="handleCancelOrder"
                class="mask__content__btn mask__content__btn--first">取消订单</div>
                <div 
                @click="handleConfirmOrder"
                class="mask__content__btn mask__content__btn--last">确认支付</div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter} from 'vue-router'


export default {
    name:'OrderMask',
    setup() {
        const router = useRouter()
        const handleCancelOrder = () => {
            router.push({name:'Home'})
            console.log('已取消')
        }
        const handleConfirmOrder = () => {
            router.push({name:'Home'})
            console.log('已发送')

        }
        return {handleCancelOrder,handleConfirmOrder}
    },
}
</script>

<style lang="scss" scoped>

@import '../../style/Viriables';
.mask{
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.50);
    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 3rem;
        height: 1.56rem;
        background: $bgColor;
        border-radius: .04rem;
        text-align: center;
        &__title {
            margin: .24rem 0 0 0;
            line-height: .26rem;
            font-size: .18rem;
            color: $content-fontColor;
        }
        &__desc {
            margin: .08rem 0 0 0;
            font-size: .14rem;
            color: $medium-fontColor;
        }
        &__btns {
            display: flex;
            margin: .24rem .58rem 0 .58rem;
        }
        &__btn {
            flex: 1;
            width: .8rem;
            line-height: .32rem;
            border-radius: .16rem;
            font-size:  .14rem;
            &--first {
                margin-right: .12rem;
                border: .01rem solid #4FB0F9;
                color: #4FB0F9;

            }
            &--last {
                margin-left: .12rem;
                background: #4FB0F9;
                color: $bgColor;
            }
        }
    }
}
</style>    