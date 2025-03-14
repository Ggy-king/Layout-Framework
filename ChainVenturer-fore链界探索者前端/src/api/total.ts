// 封装total页面需要用到的axios请求
import request from '@/utils/request.ts'

// 获取个性文字
export const getSelfData = () => {
    return request.get('/total/self')
}



// 获取轮播图数据
export const getCarouselImg = () => {
    return request.get('/total/carousel')
}


// 获取标签页不同内容的数据
export const getVariousEssay = (type:string,value:string) => {
    if(type === 'hot') return request.get('/total/hot')
    return request.get('/total',{
        params: { [type]: value }
    })
}

// 获取topic随机一条数据
export const getTopicData = () => {
    return request.get('/total/topic')
}




