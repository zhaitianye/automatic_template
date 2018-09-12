var Base_js = {};

//公用方法，判断字符串是否为JSON格式，返回true和false
Base_js.isJSON = function(str) {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
};

//公用方法，判断对象是否为JSON格式，返回true和false
Base_js.isJsonObj = function(obj) {
    var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
        return isjson;
};
//公用方法，判断是否为未定义，未定义则为空
Base_js.isNaN = function(str) {
    if (typeof(str) == "undefined") {
        return null;
    } else {
        return str;
    }
}
