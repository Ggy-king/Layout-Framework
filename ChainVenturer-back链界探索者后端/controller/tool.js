// 工具获取
/**
 * @description 封装tool与ToolModel相关方法
 * @author 广源讲师
 */

const ToolMOdel = require('../model/ToolModel')

const getToolDate = (req,res,next) => {
    ToolMOdel.find().select({_id: 0}).exec()
    .then(data => {
        res.json({
            code: '3000',
            message: '工具查询成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '工具查询失败',
            err: null
        })
    })
}

module.exports = {
    getToolDate
}