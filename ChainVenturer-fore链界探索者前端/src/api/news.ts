// 封装news页面axios请求
import request from '@/utils/request'

// 获取快讯内容
export const getNewsDate = (type:string) => {
    return request.get('/news',{
        params: { type }
    })
}