var express = require('express');
var router = express.Router();
var UserModel = require('../db/models/UserModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth',function(req,res,){
  res.send('welcome to auth 这个页面')
});

router.post('/reg',function(req,res){
  console.log(req.body);
  let {user,pwd} = req.body; 
  //通过mongoose方法将user与pwd存储至数据库

  new UserModel({    //一条具体的数据
    user:user,
    pwd:pwd
  }).save().then(() => {
    res.send({code:1,msg:'注册成功'})
  })
})
module.exports = router;
