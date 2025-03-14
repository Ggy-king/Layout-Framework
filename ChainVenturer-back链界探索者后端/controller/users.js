//  简化路由
/**
 * @description 封装users与UsersModel相关方法
 * @author 广源讲师
 */

const UsersModel = require('../model/UsersModel')
const WriteModel = require('../model/WriteModel')
const { secret,serverOrigin } = require('../config/config')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// 获取用户信息 登录操作
const postUsersInfo = async (req,res,next) => {
    // 登录 没有则注册
    const {username,password} = req.body

    const user = await UsersModel.findOne({username}) //查找数据库中是否有这个账户

    if(user) {
        // 登录
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (isPasswordValid) {
            // 密码验证成功，返回成功响应（这里可以发送JWT令牌等）
            const token = jwt.sign({
                username,
                _id: user._id
            },secret,{
                expiresIn: 60 * 60 * 24 * 7
            })
            res.json({ code: '2000',message: '登录成功',token:token });
        } else {
            // 密码验证失败
            res.json({ code: '2006',message: '身份验证失败' });
        }

    } else {
        // 注册
        // 盐值 二次加密至数据库
        
        const salt = await bcrypt.genSalt(10)
        const receivedPass = await bcrypt.hash(password, salt)

        UsersModel.create({username,password:receivedPass})
        .then(data => {
            res.json({
                code: '3000',
                message: '用户注册成功',
                data: data
            })
        })
        .catch(err => {
            res.json({
                code: '3003',
                message: '用户注册失败',
                err: null
            })
        })
    }
}

// 收藏文章
const patchCollectEssay = async (req,res,next) => {
    const username = { username: req.user.username }
    const updateCollect = {collectEssay: req.body.id }
    try {
        const result = await UsersModel.updateOne(username,{ $pull: updateCollect })
        if(result.modifiedCount === 0) {
            await UsersModel.updateOne(username,{ $addToSet: updateCollect })
        }
        res.json({
            code: '3000',
            message: '收藏或取消收藏成功',
            data: result.modifiedCount
        })
    } catch (error) {
        res.json({
            code: '3004',
            message: '数据库更新失败',
            err: null
        })
    }

}

// 获取收藏文章列表
const getCollectEssay = async (req,res,next) => {
    try {
        const username = { username: req.user.username }
        const result = await UsersModel.find(username,{collectEssay: 1,_id: 0}).limit(18)
        
        const collectIds = result[0].collectEssay
        const data = await WriteModel.find({_id: { $in: collectIds }}).select({ writeHtml: 0, comments: 0 })
        data.map(item => item.imgPath = serverOrigin + '/' + item.imgPath.replace(/\\/g, '/'))
        

        res.json({
            code: '3000',
            message: '个人收藏查询成功',
            data
        })
    } catch (error) {
        res.json({
            code: '3002',
            message: '个人收藏查询失败',
            err: null
        })
    }
        
}

module.exports = {
    postUsersInfo,
    patchCollectEssay,
    getCollectEssay
}