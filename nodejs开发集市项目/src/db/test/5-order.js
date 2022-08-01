/**
 * @description 订单数据操作
 * @author 广源讲师
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async () => {
    // 创建订单
    const requestBody = {
        addressId: '62e495905cab016ab1dbda9d',
        shopId: '62e49d1ea3bcebfe036d5857',
        shopName: '沃尔玛',
        isCanceled: false,  //订单是否被取消
        products: [
            {
                id: '62e4a0a9ed98cf49d7ad9300',
                num: 10 //购买数量
            },
            {
                id: '62e4a0a9ed98cf49d7ad9303',
                num: 15 //购买数量
            }
        ]

    }

    // 获取address
    const address = await Address.findById(requestBody.addressId)

    // 获取商品列表
    const pIds = requestBody.products.map(p => p.id) //[商品1 id,商品2 id]
    const productList = await Product.find({
        shopId: requestBody.shopId,     //沃尔玛的商品
        _id: {
            $in: pIds
        }
    })

    // 整合订单购买数量
    const productListWidthSales = productList.map(p => {
        //商品id
        const id = p._id.toString()

        //找到商品的购买数量
        const filterProducts = requestBody.products.filter(item => item.id === id)
        if (filterProducts.length === 0) {
            throw Error('没有找到匹配的销量数据')
        }

        return {
            product: p,
            orderSales: filterProducts[0].num
        }
    })

    await Order.create({
        username: 'zhangsan',
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: requestBody.isCanceled,
        address,
        products: productListWidthSales   //重要
    })

    console.log('订单创建成功');


})()





