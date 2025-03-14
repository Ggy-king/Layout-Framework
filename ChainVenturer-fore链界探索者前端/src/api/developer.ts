// 封装developer页面需要用到的axios请求
import request from '@/utils/request'

// 获取图片
export const getDeveloperData = () => {
    return request.get('/developer')
}
