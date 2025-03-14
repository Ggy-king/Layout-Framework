// 封装news页面axios请求
import request from '@/utils/request'

// 获取快讯内容
export const postSearchAll = (search:string) => {
    return request.post('/search',{
        search
    })
}