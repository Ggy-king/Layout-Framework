<template>
    <div class="container">
        <header>
            <span class="done-title">已连接设备</span>
            <div class="content done-content">
                设备一
                <span>查看</span>
            </div>
            <div class="delta o"></div>
        </header>
        <main>
            <span class="permit-title">可连接设备</span>
            <div class="content permit-content-first">
                设备一
                <span>查看</span>
            </div>
            <div class="delta q"></div>

            <div class="content permit-content-second">
                设备二
                <span>查看</span>
            </div>
            <div class="delta e"></div>

            <div class="content permit-content-third">
                设备三
                <span>查看</span>
            </div>
            <div class="delta i"></div>

        </main>
    </div>
    <!-- 底部导航栏部分 -->
    <Docker :currentIndex="0" />
</template>

<script>
import Docker from "../../components/Docker";

export default {
    name: 'equipment',
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



    .content {
        height: 1.08rem;
        width: 2.7rem;
        background-color: #fcfcfc;
        font-size: .2rem;
        font-weight: 600;
        line-height: 1.08rem;
        padding-left: .1rem;
        border-bottom: .02rem solid #efefef;
    }

    header {
        // margin-top: .2rem;
        padding-top: .2rem;
        position: relative;

        .done-title {
            margin-left: .1rem;
            font-size: .16rem;
            font-weight: 600;
        }

        .done-content {
            margin-top: .2rem;

            span {
                font-size: .15rem;
                color: #ff5e52;
                position: absolute;
                right: .5rem;
                z-index: 999;
            }

        }

    }

    main {
        margin-top: .2rem;
        position: relative;

        .permit-title {
            margin-left: .1rem;
            font-size: .16rem;
            font-weight: 600;
        }

        .permit-content-first {
            margin-top: .2rem;

            span {
                font-size: .15rem;
                color: #ff5e52;
                position: absolute;
                right: .5rem;
                z-index: 999;
            }

        }

        .permit-content-second {
            span {
                font-size: .15rem;
                color: #ff5e52;
                position: absolute;
                right: .5rem;
                z-index: 999;
            }
        }

        .permit-content-third {
            span {
                font-size: .15rem;
                color: #ff5e52;
                position: absolute;
                right: .5rem;
                z-index: 999;
            }
        }
    }

    .delta {
        border-style: solid;
        border-color: transparent;
        border-width: 0.54rem 0 0.54rem 0.9rem;
        border-left-color: #fcfcfc;

    }

    .o {
        position: absolute;
        top: .59rem;
        left: 2.8rem;
    }

    .q {
        position: absolute;
        top: .39rem;
        left: 2.8rem;
    }

    .e {
        position: absolute;
        top: 1.49rem;
        left: 2.8rem;
    }

    .i {
        position: absolute;
        top: 2.59rem;
        left: 2.8rem;
    }

}
</style>