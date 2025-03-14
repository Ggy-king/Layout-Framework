/**
 * @description 与用户无关的数据库相关操作
 * @author 广源讲师
 */

const https = require('https')
const { dbEmitter } = require('../db/db')
const { ratesApiKey } = require('../config/config')

// 每搁24小时更新数据库中rates
const updateRatesApi = () => {
    dbEmitter.on('open', () => {
        const RatesModel = require('../model/RatesModel')
        const url = `https://v6.exchangerate-api.com/v6/${ ratesApiKey }/latest/USD`
        
        setInterval( async () => {
            await https.get(url, (resp) => {
                let data = ''
    
                // 接收数据片段
                resp.on('data',(chunk) => {
                    data += chunk
                })
    
                // 完成数据接受
                resp.on('end', async () => {
                    try {
                        const jsonData = JSON.parse(data)
                        
                        const results = await RatesModel.find().exec()
                        results.forEach(currency => {
                            const currencyCode = currency.currencyName.split(' ')[0]
                            if (jsonData.conversion_rates.hasOwnProperty(currencyCode)) {
                                currency.rate = jsonData.conversion_rates[currencyCode]
                            }
                        })

                        for (const result of results) {
                            const filter = { currencyName: result.currencyName }
                            const updateData = { $set: { rate: result.rate } }
                            await RatesModel.updateOne(filter,updateData)
                        }
                        console.log('汇率更新成功')
                        
                    } catch (error) {
                        console.error('错误信息', error)
                    }
                })
                
            }).on('error', () => {
                console.error("服务器相关错误: " + err.message); // 处理错误
            })
        }, 24 * 60 * 60 * 1000)
    })
}   

module.exports = {
    updateRatesApi
}