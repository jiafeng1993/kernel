$.extend({
    //获取Url参数值
    getQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
        url: "http://pro1test.zjyckj.com.cn:8082/consumer/appServer/interface",
        //url: "http://192.168.1.200:8082/consumer/appServer/interface"
        //url: "http://114.55.86.89:8082/consumer/appServer/interface"
        selectIds:[]
});

Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
localTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
//_token = "rvPNKZl4DuPNqVPtrnQO";
_token ="rvPNKZl4DuPNqVPtrnQO" ;
_deviceid = 1;
_version =1;

var m_token = $.getQueryString("token");
if (m_token != null && typeof(m_token) != "undefined") {
    _token = m_token;
}
var m_deviceid = $.getQueryString("deviceId");
if (m_deviceid != null && typeof(m_deviceid) != "undefined") {
    _deviceid = m_deviceid;
}
var m_version = $.getQueryString("version");
if (m_version != null && typeof(m_version) != "undefined") {
    _version = m_version;
}

function saveToken(token) {
    if($.versions.android) {  
       _token = token;
        window.common.saveToken();  
    } else if($.versions.ios) {
        _token = token;
    }
}

function getToken() {
    return _token;
}
//_deviceid = "kjgfytjf";
function savedeviceid(deviceid) {
    if($.versions.android) {  
       _deviceid = deviceid;
        window.common.savedeviceid();  
    } else if($.versions.ios) {
        _deviceid = deviceid;
    }
}

function getDeviceid() {
    return _deviceid;
}
//_version = "1.0.0";
function saveVersion(version) {
    if($.versions.android) {  
        _version = version;
        window.common.saveVersion();  
    } else if($.versions.ios) {
        _version = version;
    }
}

function getVersion() {
    return _version;
}
//标题栏信息
function headerTitle() {
    if($.versions.android) {  
        window.common.headerTitle();  
    } else if($.versions.ios) {}
    return _title;
}
function getAjaxJson(tradeCode, data) {
    var a = JSON.stringify({ "clientTime": localTime, "data": data, "deviceId": getDeviceid(), "token": getToken(), "tradeCode": tradeCode, "version": getVersion() })

    return json;
}
IsApp = false;
function backAction() {
    //history.back();  
    if (IsApp) {
        if($.versions.android) {  
            window.common.appBackAction();  
        } else if($.versions.ios) {  
            appBackAction(); 
        }
    } else {
        window.location.href = backLink;
    }
}