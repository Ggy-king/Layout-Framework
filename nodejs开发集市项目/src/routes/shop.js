/**
 * @description shop router
 * @author 广源讲师
 */

const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { getHotList, getShopInfo, getProductsByShopId } = require('../controller/shop')

router.prefix('/api/shop')

//商店列表
router.get('/hot-list', async function (ctx, next) {
    const list = await getHotList()
    ctx.body = new SuccessModel(list)
})


//单个商品的信息
router.get('/:id', async function (ctx, next) {
    const id = ctx.params.id
    const shop = await getShopInfo(id)
    ctx.body = new SuccessModel(shop)
})

//获取商店的商品
router.get('/:id/products', async function (ctx, next) {
    const shopId = ctx.params.id
    const tab = ctx.query.tab || 'all' //query 里的 tab 参数 默认是 'all'

    const products = await getProductsByShopId(shopId, tab)
    ctx.body = new SuccessModel(products)
})


module.exports = router
