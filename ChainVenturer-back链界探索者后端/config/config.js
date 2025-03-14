module.exports = {
    serverOrigin: 'http://localhost:3000',
    // serverOrigin: 'https://152.32.215.89:3000',
    origin: ['http://localhost:5173','https://152.32.215.89:80', 'https://ggyking.top'],
    secret: 'ggynb',
    storagePath: 'public/images/user',

    dbUSER: 'root',
    dbPASS: '未定义',

    ratesApi: 'https://v6.exchangerate-api.com/v6/您的秘钥/latest/USD', // 汇率api链接
    ratesApiKey: 'd09028c972cfbc89d5b482f8',  // 汇率api秘钥
}