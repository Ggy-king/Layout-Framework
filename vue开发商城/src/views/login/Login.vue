<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="头像">
        <div class="wrapper__input">
            <input 
            type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="data.username"/>
        </div>
        <div class="wrapper__input">
            <input 
            autocomplete="new-password"
            type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="data.password"/>
        </div>

            <!-- autocomplete="new-password" 取消自动填充 -->

        <div class="wrapper__login-button" @click="handleLogin">登陆</div>
        <!-- router-link标签 做跳转时会为子标签包裹a标签 -->
        <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
        <Toast v-if="data.showToast" :message="data.toastMessage" />
    </div>
</template>

<script>
import {reactive , toRefs} from 'vue'
import { useRouter } from 'vue-router'
// import axios from 'axios'
import {post} from '../../utils/request'
import Toast from '../../components/Toast'

// 改变axios接口默认接收格式
// axios.defaults.headers.post['Content-Type'] = 'application/json'


export default {
    // 这里的代码应该精简 但我目前还不行

    name:'Login',
    components:{Toast},
    setup() {
        const data = reactive({
            username:'',
            password:'',
            showToast:false,
            toastMessage:''
        })
        const router = useRouter();

        const changeToast = (message) => {
            data.showToast = true
            data.toastMessage = message
            setTimeout(() => {
            data.showToast = false
            data.toastMessage = ''
            },2000)
        }


        // async await接口语法
        // try catch 尝试语法
        const handleLogin = async () => {
            try{
                const {username,password} = data
                if(username === ''){
                    return changeToast('用户名不能为空')
                }else if(password === ''){
                    return changeToast('密码不能为空')
                }
                const result = await post('/api/user/login',{
                    username,
                    password
                })
                if(result?.errno === 0) {
                    localStorage.isLogin = true
                    router.push({name:'Home'})
                } else {
                   changeToast('登陆失败')
                }
            }catch (e) {
                   changeToast('请求失败')
            }
           }
        const handleRegisterClick = () => {
            router.push({name:'Register'})
        }

        const {username , password} = toRefs(data)
        return {
            username,password,
            handleLogin,handleRegisterClick,data}
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/_Viriables.scss';

.wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img {
        display: block;
        margin: 0 auto .4rem auto;
        width: .66rem;
        height: .66rem;
    }
    &__input {
        height: .48rem;
        margin: 0 .4rem .16rem .4rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        &__content {
            margin-top: .12rem;
            line-height: .22rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: .16rem;
            color: rgba(0,0,0,0.60);
            &::placeholder{
                color: $content-login-fontColor;
            }
        }
    }
    &__login-button {
        margin: .32rem .4rem .16rem .4rem;
        line-height: .48rem;
        background: $btn-bgColor;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
        border-radius: .04rem;
        color: $bgColor;
        font-size: .16rem;
        text-align: center;
    }
    &__login-link {
        text-align: center;
        font-size: .14rem;
        color: $content-login-fontColor;
    }
}

</style>