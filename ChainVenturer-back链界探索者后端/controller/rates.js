// 汇率获取
/**
 * @description 封装rates与RatesModel相关方法
 * @author 广源讲师
 */

const RatesModel = require('../model/RatesModel')

const getRatesDate = (req,res,next) => {
    RatesModel.find().select({_id: 0}).exec()
    .then(data => {
        res.json({
            code: '3000',
            message: '汇率查询成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '汇率查询失败',
            err: null
        })
    })
}

module.exports = {
    getRatesDate
}