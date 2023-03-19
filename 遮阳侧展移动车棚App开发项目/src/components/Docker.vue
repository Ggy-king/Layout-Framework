<template>
    <!-- 底部导航栏部分 -->
    <div class="docker">
        <div v-for="(item, index) in dockerList"
            :class="{ 'docker__item': true, 'docker__item--active': (index === currentIndex) }" :key="item.text">

            <router-link :to="item.to">
                <a class="docker__title">{{ item.text }}</a>
            </router-link>

        </div>
        <div class="more"><img src="../assets/jia.jpg"></div>
    </div>
</template>

<script>
export default {
    name: 'Docker',
    props: ['currentIndex'],
    setup() {
        const dockerList = [
            { text: '设备', to: { name: 'Equipment' } },
            { text: '商城', to: { name: 'Shop' } },
            { text: '     ', to: { name: 'More' } },
            { text: '资讯', to: { name: 'News' } },
            { text: '我的', to: { name: 'Personal' } }
        ];
        return {
            dockerList
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
</style>