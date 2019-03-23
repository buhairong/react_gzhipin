var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5')
const UserModel = require('../db/models').UserModel
const filter = {password: 0}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 注册一个路由： 用户注册
/*
*提供一个用户注册的接口
  a) path 为: /register
  b) 请求方式为: POST
  c) 接收 username 和 password 参数
  d) admin 是已注册用户
  e) 注册成功返回: {code: 0, data: {_id: 'abc', username: ‘xxx’, password:’123’}
  f) 注册失败返回: {code: 1, msg: '此用户已存在'}
* */
/*
* 1.获取请求参数
* 2.处理
* 3.返回响应数据
* */
/*router.post('/register', function(req, res){
  // 1. 获取请求参数
  const {username, password} = req.body
  // 2. 处理
  if(username === 'admin') { // 注册会失败
      // 返回响应数据（失败）
      res.send({code: 1, msg: '此用户已存在'})
  } else { // 注册会成功
      // 返回响应数据（成功）
      res.send({code: 0, data: {id: 'abc', username, password}})
  }
})*/

// 注册的路由
router.post('/register', function (req, res) {
    // 读取请求参数
    const {username, password, type} = req.body
    // 处理： 判断用户是否已经存在，如果存在，返回提示错误的信息，如果不存在，保存
    // 判断用户是否已经存在
    UserModel.findOne({username}, function(err, user){
        if (user) {
            res.send({code: 1, msg: '此用户已存在'})
        } else {
            new UserModel({username, password: md5(password), type}).save(function(err, user){
                res.send({code: 0, data: user})
            })
        }
    })

    // 返回响应数据
})

// 登录的路由
router.post('/login', function (req, res) {
    const {username, password} = req.body
    UserModel.findOne({username, password: md5(password)}, filter, function (err, user) {
        if (!user) {
            res.send({code:1, msg: '用户名或密码错误'})
        } else {
            res.send({code:0, data: user})
        }
    })
})

module.exports = router;
