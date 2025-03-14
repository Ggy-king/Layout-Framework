// 封装tool页面axios请求
import request from '@/utils/request'

// 获取工具相关数据
export const getToolData = () => {
    return request.get('/tool')
}