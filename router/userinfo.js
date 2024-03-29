const express = require('express')

const router = express.Router()

// 导入用户信息路由处理函数模块
const userinfo_handler = require('../router_handler/userinfo')

// 导入验证数据中间件
const expressJoi = require('@escook/express-joi')
// 导入自定义schema目录下验证规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')

// 获取用户基本信息的路由
router.get('/userinfo', userinfo_handler.getUserInfo)

// 更新用户信息的路由
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

// 重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)

// 修改头像路由
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)

module.exports = router