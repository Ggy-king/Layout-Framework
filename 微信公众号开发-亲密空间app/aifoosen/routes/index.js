var express = require('express')
var router = express.Router()
var UserModel = require('../db/models/UserModel')
var sha1 = require('sha1')
var sign = require('../utils/sign')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.get('/auth',function(req,res){
  let { signature, timestamp, nonce, echostr } = req.query
  let token = 'testweixin'   //随便写 只要保证与微信验证的一致就行
  let array = [timestamp, nonce, token]
  array.sort();  //字典排序
  let str = array.join('')
  //npm i sha1   这是一个专门加密的模块
  let resultStr = sah1(str)  //对自符串进行sha1加密
  if (resultStr === signature) {
    res.set('Content-Type','text/plain')
    res.send(echostr)
  } else {
    res.send('Error!!!!!!!')
  }

});

router.get('/jsapi',async function(req,res) {
  let url = decodeURIComponent(req.query.url)
  let conf = await sign(url)
  res.send(conf)
})


router.post('/reg',function(req,res){
  console.log(req.body)
  let {user,pwd} = req.body
  //通过mongoose方法将user与pwd存储至数据库

  new UserModel({    //一条具体的数据
    user:user,
    pwd:pwd
  }).save().then(() => {
    res.send({code:1,msg:'注册成功'})
  })
})
module.exports = router
