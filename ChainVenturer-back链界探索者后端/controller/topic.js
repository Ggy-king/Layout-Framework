// 单个文章详情获取
/**
 * @description 封装articles与WriteModel相关方法
 * @author 广源讲师
 */

const WriteModel = require('../model/WriteModel')
const TopicModel = require('../model/TopicModel')
const { serverOrigin } = require('../config/config')

const getTopicDate = async(req,res,next) => {
    try {
        const topicMainDate = await TopicModel.find().sort({createdAt: 1}).select({ writeHtml: 0, comments: 0 }).exec()
        const topicListDate = await WriteModel.aggregate([
            {
                $facet: {
                    topicA: [
                        { $match: {topic: '投资领域'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ],
                    topicB: [
                        { $match: {topic: '交易心得'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ],
                    topicC: [
                        { $match: {topic: '监管政策'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ],
                    topicD: [
                        { $match: {topic: '交易所相关'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ],
                    topicE: [
                        { $match: {topic: '期货品种分析'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ],
                    topicF: [
                        { $match: {topic: '期货社会影响'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ],
                    topicG: [
                        { $match: {topic: '市场创新或前景'} },
                        { $sample: {size: 3} },
                        {
                            $project: {writeHtml: 0,comments: 0}
                        }
                    ]
                }
            }
        ]).exec()

        const topicAllDate = {}
        const listDate = topicListDate[0]
        const keys = Object.keys(listDate)
        
        keys.forEach((item,index) => {
            const mainObj = topicMainDate[index]
            mainObj.imgPath = serverOrigin + '/' + mainObj.imgPath.replace(/\\/g, '/')
            listDate[item].map(item => item.imgPath = serverOrigin + '/' + item.imgPath.replace(/\\/g, '/'))
            topicAllDate[item] = {
                    main: mainObj,
                    list: listDate[item],
                    subject: mainObj.topic
            }
        })

        res.json({
            code: '3000',
            message: '数据查询成功',
            data: topicAllDate
        })
    } catch (error) {
        res.json({
            code: '3002',
            message: '数据查询失败',
            data: null
        })
    }

}

const getTopicSubject = (req,res,next) => {
    TopicModel.find({_id: req.query.id}).exec()
    .then(data => {
        data[0].imgPath = serverOrigin + '/' + data[0].imgPath.replace(/\\/g, '/')
        res.json({
            code: '3000',
            message: '专题查询成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '专题查询失败',
            err: null
        })
    })
}

module.exports = {
    getTopicDate,
    getTopicSubject
}