const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/weixin',(err) => {
    if(err){
        console.log('数据库连接失败')
    }else {
        console.log('数据库连接成功');
    }
})