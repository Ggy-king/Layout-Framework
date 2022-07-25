const mongoose = require('mongoose')

var {mongoip} = require('../config')

mongoose.connect(`mongodb://${mongoip}/weixin`,(err) => {
    if(err){
        console.log('数据库连接失败')
    }else {
        console.log('数据库连接成功');
    }
})