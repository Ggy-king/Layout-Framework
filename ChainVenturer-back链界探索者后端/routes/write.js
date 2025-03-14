/**
 * @description write路由
 * @author 广源讲师
 */

const express = require('express')
const router = express.Router()
const { postWriteInfo,postUploadImg,patchWriteEdit,deleteWriteOne,patchMarkAdd } = require('../controller/write')
const checkTokenMiddleware = require('../middleware/checkTokenMiddleware')
const uploadImgMiddleware = require('../middleware/uploadImgMiddleware')
const { storagePath } = require('../config/config')

// 上传图片接口
router.post('/cover-img',checkTokenMiddleware,uploadImgMiddleware(storagePath),(req,res,next) => {
    postUploadImg(req,res,next)
})

// 上传文章接口
router.post('/',checkTokenMiddleware,(req,res,next) => {
    postWriteInfo(req,res,next)
})

// 修改文章接口
router.patch('/update',checkTokenMiddleware,uploadImgMiddleware(storagePath),(req,res,next) => {
    patchWriteEdit(req,res,next)
})

// 删除文章接口
router.delete('/de',checkTokenMiddleware,(req,res,next) => {
    deleteWriteOne(req,res,next)
})

// 评论文章接口
router.patch('/mark',checkTokenMiddleware,(req,res,next) => {
    patchMarkAdd(req,res,next)
})


module.exports = router