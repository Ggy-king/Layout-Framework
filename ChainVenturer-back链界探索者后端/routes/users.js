/**
 * @description users路由
 * @author 广源讲师
 */


const express = require('express')
const router = express.Router()

const { postUsersInfo,patchCollectEssay,getCollectEssay } = require('../controller/users')
const checkTokenMiddleware = require('../middleware/checkTokenMiddleware')

router.post('/',(req, res, next) => {
  postUsersInfo(req,res,next)
})

router.patch('/collect',checkTokenMiddleware, (req, res, next) => {
  patchCollectEssay(req,res,next)
})

router.get('/collect',checkTokenMiddleware, (req, res, next) => {
  getCollectEssay(req,res,next)
})





module.exports = router
