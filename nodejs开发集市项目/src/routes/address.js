/**
 * @description address router
 * @author 广源讲师
 */

const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')
const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address')
const { login } = require('../controller/user')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    const data = ctx.request.body

    try {
        const newAddress = await createAddress(username, data)
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.error(ex);
        ctx.body = new ErrorModel(10004, '创建收货地址失败')
    }
})
// 获取收货地址列表
router.get('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    const list = await getAddressList(username)

    ctx.body = new SuccessModel(list)
})
// 获取单个收货地址列表
router.get('/:id', loginCheck, async function (ctx, next) {
    const id = ctx.params.id
    const address = await getAddressById(id)
    ctx.body = new SuccessModel(address)

})
// 更新收货地址
router.patch('/:id', loginCheck, async function (ctx, next) {
    const id = ctx.params.id    //获取路由的动态参数
    const data = ctx.request.body || {}  //前端传来的数据

    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    // 更新
    const newAddress = await updateAddress(id, username, data)
    ctx.body = new SuccessModel(newAddress)
})


module.exports = router
