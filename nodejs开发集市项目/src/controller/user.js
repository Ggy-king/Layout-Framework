/**
 * @description user controller
 * @author 广源讲师
 */

const User = require('../models/User')

/**
 * 注册
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 
 */

// 注册
async function register(username, password) {
    //保存到数据库
    const newUser = await User.create({ username, password })
    return newUser
}

/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 
 */

async function login(username, password) {
    const user = await User.findOne({ username, password })
    if (user != null) {
        //登录成功
        return true
    }
    return false
}


module.exports = {
    register,
    login
}