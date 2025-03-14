// 行情获取
/**
 * @description 封装market与marketModel相关方法
 * @author 广源讲师
 */

const ContractModel = require('../model/ContractModel')

const getMarketContract = (req,res,next) => {
    ContractModel.find().exec()
    .then(data => {
        res.json({
            code: '3000',
            message: '合约行情获取成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '合约行情获取失败',
            err: null
        })
    })
}

const getContractSimple = (req,res,next) => {
    ContractModel.aggregate([
        { $sample: { size: 20} },
        { $project: { name: 1, price: 1, increaseRate: 1} }
    ]).exec()
    .then(data => {
        res.json({
            code: '3000',
            message: '合约行情获取成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '合约行情获取失败',
            err: null
        })
    })
}

const getContractHot = (req,res,next) => {
    ContractModel.aggregate([
        { $sample: { size: 10} },
        { $project: { name: 1, price: 1, increaseRate: 1,initPrice: 1,exchange: 1} }
    ]).exec()
    .then(data => {
        res.json({
            code: '3000',
            message: '合约行情获取成功',
            data
        })
    })
    .catch(err => {
        res.json({
            code: '3002',
            message: '合约行情获取失败',
            err: null
        })
    })
}

module.exports = {
    getMarketContract,
    getContractSimple,
    getContractHot
}