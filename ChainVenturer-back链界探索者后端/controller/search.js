// 搜索操作
/**
 * @description 封装search与SearchModel相关方法
 * @author 广源讲师
 */

const TopicModel = require('../model/TopicModel')
const WriteModel = require('../model/WriteModel')
const { serverOrigin } = require('../config/config')

const postSearchAll = async (req,res,next) => {
    const { search } = req.body
    if(!search) return res.status(400).json({error: '搜索内容不能为空'})
    const searchRegex = new RegExp(search, 'i')   // 不分大小写查找
    try {
        const topics = await TopicModel.find({ title: searchRegex },{writeHtml: 0,comments: 0,author: 0,createdAt: 0})
        const articles = await WriteModel.find({ title: searchRegex },{writeHtml: 0,comments: 0,author: 0,createdAt: 0})
        // const currency = await CoinsModel.find({ $or: [{ name: searchRegex }, { description: searchRegex }] })
        // const technology = await EssayModel.find({ $or: [{ title: searchRegex }, { body: searchRegex }] })
 
        const results = {
            articles: articles.map(articles => ({ _id: articles._id, type: '文章', title: articles.title, summarize: articles.summarize, imgPath: serverOrigin + '/' + articles.imgPath.replace(/\\/g, '/'), put_time:articles.put_time})),
            topics: topics.map(topic => ({ _id: topic._id, type: '专题', title: topic.title, summarize: topic.summarize,imgPath: serverOrigin + '/' + topic.imgPath.replace(/\\/g, '/'),put_time:topic.put_time})),
            // coins: coins.map(coin => ({ _id: coin._id, name: coin.name, description: coin.description.substring(0, 100) + '...' })),
            // essays: essays.map(essay => ({ _id: essay._id, title: essay.title, body: essay.body.substring(0, 100) + '...' }))
        }
 
        res.json({
            code: '3000',
            message: '搜索成功',
            data: results
        })
    } catch (error) {
        res.json({
            code: '3002',
            message: '搜索失败',
            err: null
        })
    }
}

module.exports = {
    postSearchAll
}