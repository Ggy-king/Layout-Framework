/**
 * @description User Model
 * @author 广源讲师
 */

// 先引入mongoose 在定义Schema 再建立model


const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true,  //必需
        unique: true   //唯一 不可重复
    },
    password: String

}, { timestamps: true }   //时间戳 
)

const User = mongoose.model('user', Schema)

module.exports = User