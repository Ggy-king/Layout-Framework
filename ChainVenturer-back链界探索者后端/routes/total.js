const express = require('express')
const router = express.Router()
const { getEssayHot, getSelfText,getVariousEssay,getCarouselImg,getTopicOne } = require('../controller/total')

router.get('/',(req,res,next) => {
    getVariousEssay(req,res,next)
})

router.get('/self',(req,res,next) => {
    getSelfText(req,res,next)
})

router.get('/hot',(req,res,next) => {
    getEssayHot(req,res,next)
})

router.get('/carousel',(req,res,next) => {
    getCarouselImg(req,res,next)
})

router.get('/topic',(req,res,next) => {
    getTopicOne(req,res,next)
})

module.exports = router