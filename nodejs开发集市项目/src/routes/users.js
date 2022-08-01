/**
 * @description address router
 * @author 广源讲师
 */

const router = require('koa-router')()
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user')

// 注册用户
router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body

  try {
    const newUser = await register(username, password)
    // ctx.body = {
    //   errno: 0,
    //   data: newUser    //多返回信息有好处 你可以不用 但我不能没有
    // }
    ctx.body = new SuccessModel(newUser)
  } catch (ex) {
    console.error(ex)
    // ctx.body = {
    //   errno: 10001,
    //   message: `注册失败 - ${ex.message}`
    // }
    ctx.body = new ErrorModel(10001, `注册失败 - ${ex.message}`)
  }
})

// 登录
router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  if (res) {
    //登录成功
    ctx.session.userInfo = { username }  //设置session
    ctx.body = new SuccessModel()
  } else {
    //登录失败
    ctx.body = new ErrorModel(10002, '登录验证失败')
  }
})


module.exports = router
