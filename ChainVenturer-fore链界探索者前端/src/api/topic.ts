// 封装专题axios请求
import request from '@/utils/request'

// 获取专题数据
export const getTopicDate = () => {
    return request.get('/topic')
}

// 获取某专题文章
export const getTopicEssay = (id:string) => {
    return request.get('/topic/subject',{
        params:{ id }
    })
}