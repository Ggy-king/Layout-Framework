//  简化路由
/**
 * @description 封装developer与DeveloperModel相关方法
 * @author 广源讲师
 */


const { serverOrigin } = require('../config/config')

// 获取developer数据
const getDeveloperDate = async (req,res,next) => {
    const urlImgPath = serverOrigin + '/public/images/my'

    res.json({
        code: '1100',
        message: '资源已找到',
        data: urlImgPath
    })
    
}



module.exports = {
    getDeveloperDate
}