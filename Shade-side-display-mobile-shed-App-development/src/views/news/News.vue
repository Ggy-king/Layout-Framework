<template>
    <div class="container">
        <div class="news-nav">
            <span style="color: black;font-weight: 700;">全部</span>
            <span>热点</span>
            <span>数码</span>
            <span>设备</span>
            <span>了解</span>
        </div>

        <div class="news-header">
            <img src="../../assets/big.png" alt="1">
            <span>大图片上的简介声明</span>
        </div>

        <div class="news">
            <div v-for="(item, index) in newsList" :key="index" class="news-main">
                <div class="news-main-text">
                    <span class="news-main-text-top">{{ item.textTop }}</span>
                    <span class="news-main-text-bottom">{{ item.textBottom }}</span>
                </div>
                <img :src="item.img" :alt="item.img">
            </div>
        </div>

    </div>

    <Docker :currentIndex="3" />
</template>

<script>
import Docker from "../../components/Docker";


export default {
    name: 'news',
    components: {
        Docker
    },
    setup() {
        const newsList = [
            { textTop: '上半部分内容显示1', textBottom: '下半部分内容显示1', 'img': require('../../assets/row.png')},
            { textTop: '上半部分内容显示2', textBottom: '下半部分内容显示2', 'img': require('../../assets/row.png') },
            { textTop: '上半部分内容显示3', textBottom: '下半部分内容显示3', 'img': require('../../assets/row.png') },
            { textTop: '上半部分内容显示4', textBottom: '下半部分内容显示4', 'img': require('../../assets/row.png') },
        ]

        return {
            newsList
        }

    }
}

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    background-color: #efefef;

    .news-nav {
        display: flex;
        padding: .2rem 0 .2rem .1rem;
        background-color: #fcfcfc;
        color: #7d7e82;
        font-size: .14rem;
        font-weight: 600;

        span {
            flex: 1;
        }
    }

    .news-header {
        position: relative;
        height: 1.8rem;
        border-bottom: .02rem solid #fcfcfc;
        img {
            height: 100%;
            width: 100%;
        }
        span {
            width: 1.4rem;
            position: absolute;
            bottom: .2rem;
            left: 50%;
            margin-left: -.7rem;
            font-size: .14rem;
            font-weight: 600;
            color: #fcfcfc;
        }
    }

    .news {
        height: 4rem;
        display: flex;
        flex-direction: column;
        margin-left: .1rem;

        &-main {
            flex: 1;
            display: flex;
            flex-direction: row;
            margin-top: .1rem;

            &-text {
                flex: 2;
                display: flex;
                flex-direction: column;
                &-top {
                    font-size: .16rem;
                    font-weight: 700;
                    color: #1d1e22;
                    flex: 2;
                }
                &-bottom {
                    font-size: .12rem;
                    color: #929397;
                    flex: 1;
                }

            }

            img {
                flex: 1;
                // width: 100%;
                height: .8rem;
            }

        }
    }

}</style>