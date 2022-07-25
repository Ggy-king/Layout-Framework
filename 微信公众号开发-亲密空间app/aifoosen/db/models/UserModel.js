var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({ //表结构对象
    user:String,
    pwd:String
})

var userModel = mongoose.model('userModel',userSchema)   //操作表结构对象的数据模型

// 模型操作表

module.exports = userModel;   //模型导出