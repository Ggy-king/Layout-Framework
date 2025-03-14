// 导航获取
/**
 * @description 封装navigator与NavigatorModel相关方法
 * @author 广源讲师
 */

const NavigatorModel = require('../model/NavigatorModel')

const getNavigatorDate = (req,res,next) => {
    NavigatorModel.find().select({_id: 0}).exec()
    .then(data => {
        res.json({
            code: '3000',
            message: '导航查询成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '导航查询失败',
            err: null
        })
    })
}

module.exports = {
    getNavigatorDate
}