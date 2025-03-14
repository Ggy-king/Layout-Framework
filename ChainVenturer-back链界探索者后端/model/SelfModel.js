/**
 * @description 个性文本模型
 * @author 广源讲师
 */
const { mongoose } = require('../db/db')


const Schema = mongoose.Schema({
    selfText: {
        type: String,
        required: true
    }
})

const SelfModel = mongoose.model('self-text',Schema)

module.exports = SelfModel