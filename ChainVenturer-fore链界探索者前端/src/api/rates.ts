// 封装rates页面axios请求
import request from '@/utils/request'

// 获取汇率数据
export const getRatesDate = () => {
    return request.get('/rates')
}