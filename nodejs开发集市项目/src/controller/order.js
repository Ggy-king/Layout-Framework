/**
 * @description user controller
 * @author 广源讲师
 */

// 引入模型
const Order = require('../models/Order')
const Product = require('../models/Product')
const Address = require('../models/Address')

/**
 * 创建订单 
 * @param {string} username 用户名
 * @param {object} data 订单数据
 */

async function createOrder(username, data) {
    //从data中把数据解构出来
    const {
        addressId,
        shopId,
        shopName,
        isCanceled = false,
        products = []
    } = data

    //根据addressId获取地址信息
    const address = await Address.findById(addressId)

    //获取商品列表
    const pIds = products.map(p => p.id)   //格式如 ['商品 id','商品 id']
    const productList = await Product.find({
        shopId,
        _id: { $in: pIds }
    })

    //拼接上购买数量
    const productListWithSales = productList.map(p => {
        //商品的id
        const id = p._id.toString()
        //在通过id可以找到销售的数量
        const filterProducts = products.filter(item => item.id === id)
        if (filterProducts.length === 0) {
            throw new Error('没有找到销售数量')
        }
        return {
            product: p,
            orderSales: filterProducts[0].num
        }
    })

    //创建订单
    const newOrder = await Order.create({
        username,
        shopId,
        shopName,
        address,
        isCanceled,
        products: productListWithSales

    })
    return newOrder
}


module.exports = {
    createOrder
}