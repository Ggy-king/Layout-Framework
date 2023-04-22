<template>
    <div class="container">
        <div class="shop-title">
            <input class="shop-title-sea" type="text" name="shop">
            <input class="shop-title-btn" type="button" value="搜索">
        </div>
        <span class="shop-name">商品列表</span>
        <div class="shop-main">
            <ul class="shop-main-top">
                <li>
                    <img src="../../assets/com.png" alt="1">
                    <div class="text">内容1</div>
                </li>
                <li>
                    <img src="../../assets/com.png" alt="1">
                    <div class="text">内容2</div>
                </li>
            </ul>

            <ul class="shop-main-top">
                <li>
                    <img src="../../assets/com.png" alt="1">
                    <div class="text">内容3</div>
                </li>
                <li>
                    <img src="../../assets/com.png" alt="1">
                    <div class="text">内容4</div>
                </li>
            </ul>

            <ul class="shop-main-top">
                <li>
                    <img src="../../assets/com.png" alt="1">
                    <div class="text">内容5</div>
                </li>
                <li>
                    <img src="../../assets/com.png" alt="1">
                    <div class="text">内容6</div>
                </li>
            </ul>
        </div>
    </div>
    <Docker :currentIndex="1" />
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
    overflow-y: auto;

    .shop-title {
        padding: .2rem 0 .2rem .1rem;
        background-color: #fcfcfc;

        &-sea {
            outline: 0;
            border: .02rem solid #f55d74;
            border-radius: .2rem;
            height: .2rem;
            width: 70%;
            padding-left: .1rem;

        }

        &-btn {
            height: .25rem;
            width: 15%;
            background-color: #f55d74;
            border: .02rem solid #f55d74;
            border-radius: .1rem;
            font-size: .14rem;
            font-weight: 600;
            color: #f8e5eb;
            margin-left: .05rem;
        }
    }

    .shop-name {
        display: block;
        font-size: .16rem;
        font-weight: 700;
        color: #1d1e22;
        margin: .2rem 0 .2rem .1rem;
    }

    .shop-main {

        &-top {
            padding: 0;
            list-style-type: none;
            display: flex;
            height: 2.4rem;

            li {
                position: relative;
                flex-direction: column;
                flex: 1;
                img {
                    height: 100%;
                    width: 100%;
                }
                .text {
                    position: absolute;
                    bottom: .1rem;
                    left: .05rem;
                    font-size: .16rem;
                    font-weight: 600;
                    
                }
            }
        }
    }

}</style>