/**
 * @description shop controller
 * @author 广源讲师
 */

const Shop = require('../models/Shop')
const Product = require('../models/Product')

/**
 * 获取商店列表(热门商店)
 */

async function getHotList() {
    const list = await Shop.find().sort({ _id: -1 })
    return list
}

/**
 * 获取商店信息
 * @param {string} id id
 */
async function getShopInfo(id) {
    const shop = await Shop.findById(id)
    return shop
}

/**
 * 根据商店获取商品
 * @param {string} shopId 商品的id
 * @param {string} tab tab 分类
 */

async function getProductsByShopId(shopId, tab = 'all') {
    const list = await Product.find({
        shopId,
        tabs: {
            $in:tab
        }
    }).sort({ _id: -1 })
    return list
}


module.exports = {
    getHotList,
    getShopInfo,
    getProductsByShopId
}