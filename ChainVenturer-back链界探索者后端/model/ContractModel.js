/**
 * @description 汇率模型
 * @author 广源讲师
 */

const { mongoose } = require('../db/db')
const Schema = mongoose.Schema({
    order: {
        type: Number,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    increaseRate: {
        type: Number,
    },  // 涨幅
    turnover: {
        type: Number,
    },     // 成交量
    riseFall: {
        type: Number,
    },    // 涨跌
    position: {
        type: Number,
    },      // 持仓量
    dailyIncrease: {
        type: Number,
    },   // 日增仓
    yesFinish: {
        type: Number,
    },    // 昨结
    initPrice: {
        type: Number,
    },       // 开盘价
    high: {
        type: Number,
    },       // 最高价
    low: {
        type: Number,
    },        // 最低价
    capitalFlow: {
        type: Number,
    },   // 资金流向
    market: {
        type: Number,
    },     // 沉淀资金
    exchange: {
        type: String,
    },   // 交易所
})


const ContractModel = mongoose.model('contracts-data',Schema)
module.exports = ContractModel