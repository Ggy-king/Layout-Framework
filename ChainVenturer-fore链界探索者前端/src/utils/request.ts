import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError,InternalAxiosRequestConfig } from 'axios'

import { ElLoading } from 'element-plus'
import { userFromStore } from '@/stores'
import hooks from '@/utils/hooks'

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
});

let loadingInstance;

// 请求拦截器
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // ----------在发送请求之前可以做一些处理，
        // 加载效果
        loadingInstance = ElLoading.service({
            lock: true,
            text: '加载中，请耐心等待一会哦...',
            background: 'rgba(255, 255, 255, .8)',
        })

        // token
        const userStore = userFromStore()
        if (!config.headers) {
            config.headers = {};
        }
        if(userStore.token) {
            config.headers.Authorization = userStore.token 
        }


        return config as InternalAxiosRequestConfig<any>;  // 不推荐这个做法它实际上是在告诉 TypeScript：“我知道这里有类型不匹配，但请忽略它。”
    },
    (error: AxiosError) => {
        // 对请求错误做些什么

        return Promise.reject(error)
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        // 可以在这里统一处理响应格式等
        
        loadingInstance.close()
        if(response.data.code === '0') {

        }
        return response
    },
    (error: AxiosError) => {
        // 对响应错误做点什么，比如显示错误消息
        // 可以根据状态码进行不同的错误处理

        loadingInstance.close()
        if (error.response) {
            // 服务器返回了一个状态码，范围在2xx之外
            const status = error.response.status;
            const data = error.response.data;
            
            switch (status) {
                case 400:
                    hooks.message('请求参数错误', 'error')
                    break
                case 401:
                    hooks.message('未授权，请登录', 'error')
                    break
                case 403:
                    hooks.message('禁止访问', 'error')
                    break
                case 404:
                    hooks.message('请求的资源未找到', 'error')
                    break
                case 500:
                    hooks.message('服务器内部错误', 'error')
                    break
                default:
                    hooks.message(`服务器错误: ${status}`, 'error')
            }
            console.error('错误状态码:', status)
            console.error('错误数据:', data)
        } else if (error.request) {
            // 请求已经发出，但没有收到响应
            hooks.message('服务端没有响应，请您联系开发者(我)', 'error')
            console.error('没有服务器响应:', error.request)
        } else {
            // 在设置请求时发生了错误
            hooks.message('请求配置错误', 'error')
            console.error('错误信息:', error.message)
        }

        return Promise.reject(error)
    }
);

export default instance