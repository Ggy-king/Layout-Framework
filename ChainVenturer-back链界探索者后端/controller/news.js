// 快讯获取
/**
 * @description 封装news与NewsModel相关方法
 * @author 广源讲师
 */

const WriteModel = require('../model/WriteModel')

const getNewsDate = (req,res,next) => {
    try {
        switch (req.query.type) {
            case 'last':
                WriteModel.find(
                    {topic: {$nin:['投资领域','交易心得']}},  //不包含
                    {title: 1,summarize: 1,put_time: 1}   // 投影部分 就是返回什么属性
                ).sort({createdAt: -1}).limit(20).exec()
                .then(data => {
                    res.json({
                        code: '3000',
                        message: '快讯查询成功',
                        data
                    })
                })
            break;
            case 'topic':
                WriteModel.find(
                    {topic: {$nin:['投资领域','交易心得']}},  //不包含
                    {title: 1,topic: 1,summarize: 1,put_time: 1}   // 投影部分 就是返回什么属性
                ).sort({createdAt: -1}).limit(20).exec()
                .then(data => {
                    // 排序
                    const topicOrderMap = new Map([
                        ['监管政策', 1],
                        ['交易所相关', 2],
                        ['期货品种分析', 3],
                        ['期货社会影响', 4],
                        ['市场创新或前景', 5]
                    ])
                    data.sort((a, b) => topicOrderMap.get(a.topic) - topicOrderMap.get(b.topic))
                    res.json({
                        code: '3000',
                        message: '快讯查询成功',
                        data
                    })
                })
            break;
            case 'currency':
                WriteModel.find(
                    {topic: {$nin:['投资领域','交易心得']}},  //不包含
                    {title: 1,currency: 1,summarize: 1,put_time: 1}   // 投影部分 就是返回什么属性
                ).sort({createdAt: -1}).limit(20).exec()
                .then(data => {
                    data.sort((a,b) => a.currency.length - b.currency.length)
                    res.json({
                        code: '3000',
                        message: '快讯查询成功',
                        data
                    })
                })
            break;
            case 'technology':
                WriteModel.find(
                    {topic: {$nin:['投资领域','交易心得']}},  //不包含
                    {title: 1,technology: 1,summarize: 1,put_time: 1}   // 投影部分 就是返回什么属性
                ).sort({createdAt: -1}).limit(20).exec()
                .then(data => {
                    // 排序
                    const techOrderMap = new Map([
                        ['云计算', 1],
                        ['大数据', 2],
                        ['人工智能', 3],
                        ['区块链', 4],
                        ['技术分析', 5],
                        ['其他技术或无', 6],
                    ])
                    data.sort((a, b) => techOrderMap.get(a.technology) - techOrderMap.get(b.technology))
                    res.json({
                        code: '3000',
                        message: '快讯查询成功',
                        data
                    })
                })
            break;
        
        }
    } catch (error) {
        res.json({
            code: '3002',
            message: '快讯查询错误',
            err: null
        })
    }
    
}

module.exports = {
    getNewsDate
}