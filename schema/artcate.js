// 导入定义验证规则的模块
const joi = require('joi')

// 定义 name 和 alias 的验证规则
const name = joi.string().required()
// alphanum 只能包含字母和数字
const alias = joi.string().alphanum().required()

// 导出共享验证规则对象
exports.add_cate_schema = {
    body: {
        name,
        alias
    }
}