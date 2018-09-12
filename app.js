//依赖关系
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var fileUpload = require('express-fileupload');
//引入日志控件config，前面不能加var和count
logger = require("./common/Log/log.js");;





//路由模块
var indexRouter = require('./routes/index');
//中间件部分
var app = express();
//视图路径，引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//日志中间件,处理http请求的
app.use(morgan('dev'));
//express.json中间件
app.use(express.json());
//express模板自动化解析参数
app.use(express.urlencoded({
    extended: false
}));
//cookie中间件(在这里统一进行加密，密码为yuematiyu)
app.use(cookieParser('yuematiyu'));
//静态文件服务中间件
app.use(express.static(path.join(__dirname, 'public')));

//文件上传中间件
app.use(fileUpload());
//主路由中间件
app.use('/', indexRouter);

//404错误
app.use(function (req, res, next) {
    next(createError(404));
});
//500错误，服务器内部错误,设置局部变量，只在开发中提供错误,显示错误页面
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//导出模块接口
module.exports = app;