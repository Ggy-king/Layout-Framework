import { defineStore } from "pinia";
import { ref } from "vue";

export const initialShowStore = defineStore('initial-show',() => {
    // pinia一共三个周期
    // state数据 getters计算属性 actions方法(包括同步异步 是比vueX最明显的改进)

    // 数据
    const isMsgShow = ref<boolean>(true)

    // 方法
    const changeShow = () => isMsgShow.value = false

    return {
        isMsgShow,
        changeShow
    }
},{
    // persist: true,  // 开启本地缓存 其实就是缓存在localStore
    persist: {
        key: 'initial-show',   // local中的键名
        storage: sessionStorage,  // 存储位置
        pick: ['isMsgShow']   // state中哪些数据需要缓存
    }
    
})