<template>
    <div class="container">
        <header>
            <img src="../../assets/row.png" alt="图片1">
            <div class="text">
                <span class="text-top">齐强专属</span>
                <span class="text-bottom">专属号：123456789</span>
            </div>
        </header>

        <main>
            <ul>
                <li>
                    <div>服务</div>
                    <span></span>
                </li>
                <li>
                    <div>收藏</div>
                    <span></span>
                </li>
                <li>
                    <div>卡包服务</div>
                    <span></span>
                </li>
                <li>
                    <div>查询</div>
                    <span></span>
                </li>
                <li>
                    <div>设置</div>
                    <span></span>
                </li>
            </ul>
        </main>
    </div>
    <Docker :currentIndex="4" />
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

    header {
        padding: .4rem 0 .2rem .1rem;
        background-color: #fcfcfc;
        display: flex;
        justify-content: center;

        img {
            width: 30%;
            height: 1rem;
            border-radius: .2rem;

        }

        .text {
            width: 60%;
            display: flex;
            flex-direction: column;
            padding-left: .2rem;

            &-top {
                flex: 2;
                font-size: .2rem;
                font-weight: 700;
                padding-top: .2rem;
                color: #1d1e22;
            }

            &-bottom {
                flex: 1;
                font-size: .12rem;
                color: #929397;
            }
        }
    }

    main {
        margin-top: .2rem;

        ul {
            padding: 0;
            list-style-type: none;

            li {
                position: relative;
                height: .5rem;
                padding-left: .2rem;
                margin-bottom: .02rem;
                background-color: #fcfcfc;
                font-size: .15rem;
                color: #55585c;
                font-weight: 600;
                line-height: .5rem;
            }

            li::after {
                width: .1rem;
                height: .1rem;
                border-top: .02rem solid;
                border-right: .02rem solid;
                border-color: #bbb;
                content: '';
                position: absolute;
                right: .2rem;
                top: .2rem;
                transform: rotate(45deg);
            }
        }
    }
}</style>