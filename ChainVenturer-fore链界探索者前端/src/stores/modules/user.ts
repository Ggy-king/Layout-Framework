import { defineStore } from "pinia"
import { ref } from "vue"

export const userFromStore = defineStore('user-from',() => {
    
    const loginFormVisible = ref<boolean>(false)
    const token = ref<string>('')
    const username = ref<string>('')


    const changeLoginVisible = (isVisible:boolean):boolean => loginFormVisible.value = isVisible

    const setToken = (newToken:string) => token.value = newToken
    const removeToken = () => token.value = ''

    const setUser = (newUser:string) => username.value = newUser
    const removeUser = () => username.value = ''

    
    return {
        loginFormVisible,
        changeLoginVisible,
        token,
        setToken,
        removeToken,
        username,
        setUser,
        removeUser
    }
},{
    persist:{
        key: 'user-from',
        storage: localStorage,
        pick:['token','username']
    }
})