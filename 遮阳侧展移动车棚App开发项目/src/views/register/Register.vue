<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="头像">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
        </div>
        <div class="wrapper__input">
            <input autocomplete="new-password" type="password" class="wrapper__input__content" placeholder="请输入密码"
                v-model="password" />
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content" placeholder="确认密码" v-model="surePassword" />
        </div>
        <div class="wrapper__register-button" @click="handleRegister">注册</div>
        <div class="wrapper__register-link" @click="handleLoginClick">已有账号去登陆</div>
        <Toast v-if="data.showToast" :message="data.toastMessage" />
    </div>
    <img src="../../assets/bg-log.jpg" class="space" />
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router'
import Toast from '../../components/Toast'


export default {
    name: 'Register',
    components: { Toast },
    setup() {
        const data = reactive({
            username: '',
            password: '',
            surePassword: '',
            showToast: false,
            toastMessage: ''
        })
        const router = useRouter();

        const changeToast = (message) => {
            data.showToast = true
            data.toastMessage = message
            setTimeout(() => {
                data.showToast = false
                data.toastMessage = ''
            }, 2000)
        }
        const handleRegister = async () => {
            try {
                const { username, password, surePassword } = data
                if (username === '') {
                    return changeToast('用户名不能为空')
                } else if (password === '') {
                    return changeToast('密码不能为空')
                } else if (surePassword !== password) {
                    return changeToast('两次密码不一致')
                }

                if (username && password && surePassword) {
                    // localStorage.isLogin = true
                    changeToast('测试版本不允许注册，高广源管理员规定的')
                    setTimeout(() => {
                        router.push({ name: 'Login' })
                    }, 2000);

                } else {
                    changeToast('注册失败')
                }
            } catch (e) {
                changeToast('请求失败')
            }
        }


        const handleLoginClick = () => {
            router.push({ name: 'Login' })
        }

        const { username, password, surePassword } = toRefs(data)
        return {
            username, password, surePassword, data,
            handleLoginClick, handleRegister
        }
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
        padding-left: .1rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0, 0, 0, 0.10);
        border-radius: .06rem;

        &__content {
            line-height: .48rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: .16rem;
            color: rgba(0, 0, 0, 0.60);

            &::placeholder {
                color: $content-login-fontColor;
            }
        }
    }

    &__register-button {
        margin: .32rem .4rem .16rem .4rem;
        line-height: .48rem;
        background: $btn-bgColor;
        box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
        border-radius: .1rem;
        color: $bgColor;
        font-size: .16rem;
        text-align: center;
    }

    &__register-link {
        text-align: center;
        font-size: .14rem;
        color: $content-login-fontColor;
    }
}

.space {
    height: 100%;
    width: 100%;
    vertical-align: bottom;
    z-index: 9999;
}
</style>