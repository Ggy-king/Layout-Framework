<template>
<a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    style="position:absolute;width: 400px;"
>
    <a-form-item
    label="Username"
    name="username"
    :rules="[{ required: true, message: '请输入账户名称' }]"
    >
    <a-input v-model:value="formState.username" placeholder="您的账户">
        <template #prefix>
        <UserOutlined class="site-form-item-icon" />
        </template>
    </a-input>
    </a-form-item>

    <a-form-item
    label="Password"
    name="password"
    :rules="[{ required: true, message: '请输入您的密码' }]"
    >
    <a-input-password v-model:value="formState.password" placeholder="您的密码">
        <template #prefix>
        <LockOutlined class="site-form-item-icon" />
        </template>
    </a-input-password>
    </a-form-item>

    <a-form-item style="">
    <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
    </a-form-item>
    <a class="login-form-forgot" href="">忘记密码？</a>
    </a-form-item>

    <a-form-item>
    <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" @click="handleLogin()">
        登录
    </a-button>
    或者
    <a href="">现在创建！</a>
    </a-form-item>
</a-form>
</template>
<script>
import { defineComponent, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import {post} from '../../utils/request'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'


export default defineComponent({
name: 'LoginData',
components: {
    UserOutlined,
    LockOutlined,
},

setup() {
    const formState = reactive({
    username: '',
    password: '',
    remember: true,
    });

    // 配置vuex
    const store = useStore()

    // 配置路由
    const router = useRouter();


    // 成功失败提示
    const loginSuccess = () => {
    message.success('登录成功');
    };

    const loginError = () => {
    message.error('密码或账户错误');
    };

    const loginWarning = () => {
    message.warning('登录错误');
    };

    // 登录账户和密码是否完全格式
    const onFinish = values => {
    console.log('Success:', values);
    // vuex
    store.dispatch('getUserName', formState.username)
    };
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    const disabled = computed(() => {
    return !(formState.username && formState.password);
    });

    // 登录校验
    const handleLogin = async () => {
        try{
            const {username,password} = formState
            const result = await post('/login',{
                username,
                password
            })
            if(username === result?.data.username && password === result?.data.password){
                sessionStorage.isLogin = 'sure'
                loginSuccess()
                router.push('/welcomeview')
            }else {
                loginError()
            }

        }catch(e) {
            loginWarning()
        }
    }
        
    return {
    formState,
    onFinish,
    onFinishFailed,
    disabled,
    handleLogin,
    loginSuccess,
    loginError,
    loginWarning
    };
},

});
</script>
<style>
#components-form-demo-normal-login .login-form {
max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
float: right;
}
#components-form-demo-normal-login .login-form-button {
width: 100%;
}
/* .ant-form-item-required {
    color: #fff !important;
} */
</style>