var log4js = require('log4js');

/*定义log4js*/
log4js.configure({
    appenders: {
        cheeseLogs: {
            type: 'dateFile',
            filename: './data/log/new_log',
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true,     //文件名是否始终包含占位符  
            absolute: false
        },
        console: { type: 'console' }
    },
    categories: {
        cheese: { appenders: ['cheeseLogs'], level: 'debug' },
        another: { appenders: ['console'], level: 'error' },
        default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
    }
});

var logger_config = log4js.getLogger('cheese');



//导出模块接口
module.exports = logger_config;


/*导出中间件*/
exports.use = function (app) { 
    //app.use(log4js.connectLogger(dateFileLog, { level: 'info', format: ':method :url' }));
    app.use(log4js.connectLogger(dateFileLog, { level: 'WARN', format: ':method :url' }));
}  