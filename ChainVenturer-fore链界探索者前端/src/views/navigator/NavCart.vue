<!-- 导航卡片 -->
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'

// 接受数据
const props = withDefaults(defineProps<{
    title: string
    navList: Record<string,any>
    db: number
    firstKind: string
    secondKind: string
    thirdKind: string
}>(),{})

const list = ref<Record<string,any>>([])


// 切换标签
const kindList = ref<Record<string,any>>([])
const handleClickTab = (tab: TabsPaneContext, event: Event) => {
    kindList.value = list.value.filter((item:Record<string,any>) => {
        if(item.kind === tab.paneName) return item
    })
}

onMounted(() => {
    if(props.navList) {
        props.navList.map((item:Record<string,any>) => {
            if(item.db === props.db) list.value.push(item)
        })
    }
})


</script>

<template>
    <!-- 头部标题 -->
    <header>
        <el-icon color="#ae782c">
            <slot></slot>
        </el-icon>
        <span>&nbsp;{{ props.title }}</span>
    </header>

    <el-tabs
        type="card"
        @tab-click="handleClickTab"
    >
        <el-tab-pane label="全部">

            <el-card v-for="i in list" shadow="hover">
                <a :href="i.url" target="_blank" class="nav">
                    <div 
                        class="nav-img" 
                        :style="{
                            backgroundPosition: `${i.imgOrder * -48}px ${i.db * -48}px`
                        }"
                    ></div>
                    <div class="nav-main">
                        <div>{{ i.title }}</div>
                        <div class="ellipsis">{{ i.info }}</div>
                    </div>
                </a>
            </el-card>
            
        </el-tab-pane>
        <el-tab-pane :label="props.firstKind">
            <el-card v-for="i in kindList" shadow="hover">
                <a :href="i.url" target="_blank" class="nav">
                    <div 
                        class="nav-img" 
                        :style="{
                            backgroundPosition: `${i.imgOrder * -48}px ${i.db * -48}px`
                        }"
                    ></div>
                    <div class="nav-main">
                        <div>{{ i.title }}</div>
                        <div class="ellipsis">{{ i.info }}</div>
                    </div>
                </a>
            </el-card>
        </el-tab-pane>
        <el-tab-pane :label="props.secondKind">
            <el-card v-for="i in kindList" shadow="hover">
                <a :href="i.url" target="_blank" class="nav">
                    <div 
                        class="nav-img" 
                        :style="{
                            backgroundPosition: `${i.imgOrder * -48}px ${i.db * -48}px`
                        }"
                    ></div>
                    <div class="nav-main">
                        <div>{{ i.title }}</div>
                        <div class="ellipsis">{{ i.info }}</div>
                    </div>
                </a>
            </el-card>
        </el-tab-pane>
        <el-tab-pane :label="props.thirdKind">
            <el-card v-for="i in kindList" shadow="hover">
                <a :href="i.url" target="_blank" class="nav">
                    <div 
                        class="nav-img" 
                        :style="{
                            backgroundPosition: `${i.imgOrder * -48}px ${i.db * -48}px`
                        }"
                    ></div>
                    <div class="nav-main">
                        <div>{{ i.title }}</div>
                        <div class="ellipsis">{{ i.info }}</div>
                    </div>
                </a>
            </el-card>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">
header {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 10px;
    .el-icon {
        font-size: 24px;
    }
    
}

.el-tabs {
    margin-bottom: 20px;
    :deep(.el-tabs__header) {
        border: none;
        .el-tabs__nav {
            border: none;
        }
        .el-tabs__item {
            height: 38px;
            margin: 0 5px;
            border-radius: 20px;
            border: 1px solid#f5f5f5;
            font-weight: 600;
            color: #89939e;
            background-color: #f2f3f5;
            
        }
        .el-tabs__item.is-active {
            color: #ae782c;
            background-color: #fff7dd;
        }
        .el-tabs__item:hover {
            color: #ae782c;
        }
        
    }
    :deep(.el-tabs__content) {
        padding-top: 10px;
    }
    
    .el-tab-pane {
        display: flex;
        flex-wrap: wrap;
        .el-card {
            width: 220px;
            height: 76px;
            margin-right: 25px;
            margin-bottom: 20px;
            border-radius: 14px;
            :deep(.el-card__body) {
                padding: 14px 10px;
                height: 100%;
                width: 100%;
            }
            .nav {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                cursor: pointer;
                &-img {
                    flex-shrink: 0;  // 0为空间不足时不收缩 默认为1表示收缩
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    background: url('@/assets/images/navigator-img10.png');
                    background-size: 616px 328px;
                    background-repeat: no-repeat;
                    background-position: 0px 0px;
                }
                .nav-main {
                    height: 40px;
                    margin-left: 10px;
                    overflow: hidden;

                    div:first-child {
                        font-size: 14px;
                        font-weight: 600;
                        color: #000;
                    }
                    div:last-child {
                        font-size: 12px;
                        color: #677788;
                    }
                }
            }
            
        }
        .el-card:nth-child(5n) {
            margin-right: 0;
        }
    }
}

</style>
