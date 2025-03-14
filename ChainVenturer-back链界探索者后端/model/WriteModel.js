/**
 * @description 创作模型
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
        enum: ['投资领域','交易心得','监管政策','交易所相关','期货品种分析','期货社会影响','市场创新或前景'],
    },
    summarize:{
        type: String,
        required: true
    },
    currency:{
        type:  [String],
        required: true
    },
    technology: {
        type:String,
        required: true,
        enum: ['云计算','大数据','人工智能','区块链','技术分析','其他技术或无']
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
        default: new Date().toLocaleString()
    },
    createdAt:{
        type: Date,
        default: new Date().toISOString()
    }
    
})

const WriteModel = mongoose.model('write-storage',Schema)
module.exports = WriteModel