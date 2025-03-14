// 封装articles页面需要用到的axios请求
import request from '@/utils/request.ts'

// 发送表单数据加图片数据加文章数据
export const getArticlesData = (page:number,limit:number) => {
    return request.get(`/articles/main`,{
        params:{
            page,
            limit
        }
    })
}

// 根据用户名字渲染文章
export const getPersonArticle = (id?:string) => {
    if(id) return request.get('/articles/user',{
        params: {
            id 
        }
    })
    return request.get('/articles/user')
}

// 组件部分文章渲染
export const getArticlesHot = () => {
    return request.get('/articles/hot')
}
