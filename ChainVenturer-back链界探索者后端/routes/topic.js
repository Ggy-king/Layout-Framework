const express = require('express')
const router = express.Router()
const { getTopicDate,getTopicSubject } = require('../controller/topic')

router.get('/',(req,res,next) => {
    getTopicDate(req,res,next)
})

router.get('/subject',(req,res,next) => {
    getTopicSubject(req,res,next)
})

module.exports = router