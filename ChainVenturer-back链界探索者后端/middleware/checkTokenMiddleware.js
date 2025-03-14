const jwt = require('jsonwebtoken')
const { secret } = require('../config/config')

module.exports = (req,res,next) => {
    const token = req.get('Authorization')
    if(!token) {
        return res.json({
            code: '2007',
            message: 'token 缺失',
            data: null
        })
    }

    req.user = null
    jwt.verify(token,secret,(err,data) => {
        if(err) {
            return res.json({
                code: '2008',
                message: 'token 校验失败',
                data: 'token 无效或已过期'
            })
        }

        req.user = data
        next()
    })
}
