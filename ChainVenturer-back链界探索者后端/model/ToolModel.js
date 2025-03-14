/**
 * @description 工具模型
 * @author 广源讲师
 */

const { mongoose } = require('../db/db')
const Schema = mongoose.Schema({
    db: {
        type: Number,
        required: true
    },
    imgOrder: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    statistics: {
        type: Boolean,
        required: true
    },
    risk: {
        type: Boolean,
        required: true
    },
    precise: {
        type: Boolean,
        required: true
    }
    
})


const ToolModel = mongoose.model('tool-storage',Schema)
module.exports = ToolModel