/**
 * @description articles路由
 * @author 广源讲师
 */

const express = require('express')
const router = express.Router()

const { getArticlesDate,getEssayData,getArticlesHot,getPersonArticle } = require('../controller/articles')

const checkTokenMiddleware = require('../middleware/checkTokenMiddleware')

// 获取某文章
router.get('/',(req,res,next) => {
    getEssayData(req,res,next)
})

// 获取文章列表
router.get('/main',(req,res,next) => {
    getArticlesDate(req,res,next)

})

// 获取组件热门（随机）文章
router.get('/hot',(req,res,next) => {
    getArticlesHot(req,res,next)
})

// 根据用户id获取文章列表
router.get('/user',checkTokenMiddleware,(req,res,next) => {
    getPersonArticle(req,res,next)

})


module.exports = router