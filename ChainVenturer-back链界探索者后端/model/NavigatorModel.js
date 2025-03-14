/**
 * @description 导航模型
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
    }
})


const NavigatorModel = mongoose.model('navigator-storage',Schema)
module.exports = NavigatorModel