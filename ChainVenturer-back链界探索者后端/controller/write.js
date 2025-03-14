//  简化路由
/**
 * @description 封装write与WriteModel相关方法
 * @author 广源讲师
 */

const WriteModel = require('../model/WriteModel')
const fs = require('fs')
const path = require('path')
const { URL } = require('url')


// 上传图片
const postUploadImg = async (req,res,next) => {
    const file = req.file
    if (!file) {
      return res.status(400).json({ code:'6001',message: '图片上传失败' })
    }
    
    res.json({
        code: '6000',
        message: '图片上传成功',
        data: file.path
    })
}

// 上传文章
const postWriteInfo = (req,res,next) => {

    const { formObj,imgPath } = req.body
    WriteModel.create({...formObj,imgPath,author:req.user.username})
    .then(data => {
        res.json({
            code: '3000',
            message: '文章创建成功',
            data: null
        })
    })
    .catch(err => {
        res.json({
            code: '3003',
            message: '文章创建失败',
            err: null
        })
    })

}

// 更新文章
const patchWriteEdit = (req,res,next) => {
    const { formObj,imgPath } = req.body
    if(imgPath) {
        formObj.imgPath = imgPath
        const urlObj = new URL(formObj.originalUrl)
        fs.unlinkSync(path.resolve(__dirname,`..${urlObj.pathname}`))
    }

    const put_time = new Date().toLocaleString()
    const createdAt = new Date().toISOString()
    WriteModel.updateOne({_id: formObj._id},{...formObj,put_time,createdAt})
    .then(data => {
        res.json({
            code: '3000',
            message: '文章更新成功',
            data: null
        })
    })
    .catch(err => {
        res.json({
            code: '3004',
            message: '文章更新失败',
            err: null
        })
    })
}

// 删除文章
const deleteWriteOne = (req,res,next) => {
    WriteModel.deleteOne({_id: req.query.id})
    .then(data => {
        const urlObj = new URL(req.query.imgUrl)
        fs.unlinkSync(path.resolve(__dirname,`..${urlObj.pathname}`))
        res.json({
            code: '3000',
            message: '文章删除成功',
            data: null
        })
    })
    .catch(err => {
        res.json({
            code: '3006',
            message: '文章删除失败',
            err: null
        })
    })
}

// 评论文章
const patchMarkAdd = (req, res, next) => {
    const newComment = {
        user: req.user.username,
        text: req.body.mark,
    }
    WriteModel.findByIdAndUpdate({_id: req.body._id},{$push:{comments: newComment}})
    .then(data => {
        res.json({
            code: '3000',
            message: '评论更新成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3004',
            message: '评论更新失败',
            err: null
        })
    })
}

module.exports = {
    postUploadImg,
    postWriteInfo,
    patchWriteEdit,
    deleteWriteOne,
    patchMarkAdd
}