// 用户相关
import request from '@/utils/request'
import CryptoJS from 'crypto-js'

// 登录/注册 请求
export const postLoginFrom = (username:string,password:string) => {
    const hashPass = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)

    return request.post('/users',{
        username,
        password:hashPass
    })
}

