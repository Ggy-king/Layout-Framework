// pinia总入口 独立维护
import { createPinia } from "pinia";
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'   // 这个插件是做持久化的 要不然页面一刷新就没


const pinia = createPinia()  // 创建
pinia.use(piniaPluginPersistedstate )  // 挂载

export default pinia


// 下面这样暴露是为了其他组件引入时更加方便 直接引入 @/stores 就可以
export * from './modules/system.ts'
export * from './modules/url.ts'
export * from './modules/user.ts'
export * from './modules/write.ts'