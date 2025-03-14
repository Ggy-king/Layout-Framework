/**
 * @description 文章模型
 * @author 广源讲师
 */
const { mongoose } = require('../db/db')
const Schema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true,
    },
    summarize:{
        type: String,
        required: true
    },
    currency:{
        type: Array,
        required: true
    },
    technology: {
        type:String,
        required: true,
    },
    imgPath:{
        type:String,
        required: true
    },
    writeHtml: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        required:true
    },
    view_num: {
        type: Number,
        default: Math.floor(Math.random() * (1200 - 100 + 1)) + 100
    },
    comments: [
        {
            user: String,
            text: String,
            date: { type: Date, default: Date.now }
        }
    ],
    put_time:{
        type: String,
        required: true,
        default: new Date().toLocaleString()
    },
    createdAt:{
        type: Date,
        required: true,
        default: new Date().toISOString()
    }
    
})

const TopicModel = mongoose.model('topic-storages',Schema)

module.exports = TopicModel