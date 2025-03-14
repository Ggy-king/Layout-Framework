/**
 * @description 用户模型
 * @author 广源讲师
 */
const { mongoose } = require('../db/db')

// 嵌入子文档
// const collectSchema = mongoose.Schema({
//     collectId: {
//         type: String
//     }
// })

const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    collectEssay: [String]
})

const UsersModel = mongoose.model('users-info',Schema)

module.exports = UsersModel