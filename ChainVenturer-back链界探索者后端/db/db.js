/**
 * @description mongodb创建
 * @author 广源讲师
 */


const mongoose = require('mongoose')
const EventEmitter = require('events')
const { dbUSER, dbPASS } = require('../config/config')

class DbConnection extends EventEmitter {}

const dbHOST = 'mongodb://127.0.0.1'
const dbPORT = '27017'
const dbNAME = 'ChainVenturer'
const dbEmitter = new DbConnection()

mongoose.connect(`${dbHOST}:${dbPORT}/${dbNAME}`,{})

// 如果有密码
// mongoose.connect(`${dbHOST}:${dbPORT}/${dbNAME}?authSource=${dbNAME}`, {
//     user: dbUSER,
//     pass: dbPASS
// })

const db = mongoose.connection    // 创建对象

db.on('error',err => {
    console.log('数据库连接错误，原因如下')
    console.log('连接错误',err)
    dbEmitter.emit(err)
})

db.once('open',() => {
    console.log('数据库连接成功')
    console.log('----------------------------')
    console.log('开始执行')
    dbEmitter.emit('open')


})

module.exports = { mongoose , dbEmitter}


