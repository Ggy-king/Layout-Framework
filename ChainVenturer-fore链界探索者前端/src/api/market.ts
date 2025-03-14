// 封装essay页面需要用到的axios请求
import request from '@/utils/request'

// 获取合约数据
export const getContractDate = () => {
    return request.get('/market')
}
// 简版合约数据
export const getContractSimple = () => {
    return request.get('/market/simple')
}

// 热度合约
export const getContractHot = () => {
    return request.get('/market/hot')
}