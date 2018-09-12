//依赖关系
var express = require('express');
var router = express.Router();

//主页路由
router.get('/', function (req, res, next) {
    res.render('index.html', {title: 'Express'});  
});




//导出模块接口
module.exports = router;