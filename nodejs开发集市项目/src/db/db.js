/**
 * @description mongoose 连接数据库
 * @author 广源讲师
 */



const mongoose = require('mongoose')

const url = 'mongodb://tex:666tex@localhost:27017'    //本地默认的mongodb服务地址
const dbName = 'tex'    //数据库名字

// 配置
// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify', false)

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// 连接对象
const db = mongoose.connection


// const db = mongoose.createConnection(`mongodb://admin:666admin@localhost:27017/${dbName}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })


db.on('error', err => {
    console.log('连接失败见如下原因');
    console.log('连接错误', err);
})

db.once('open', () => {
    console.log('mongoose连接成功');
    console.log('---------------------------------');
    console.log('开始执行');

})
// 导出
module.exports = mongoose