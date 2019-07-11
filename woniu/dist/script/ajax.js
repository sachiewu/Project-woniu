'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function ajax(option) {
    var promise = new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        //1.设置默认值。
        option.type = option.type || 'get';

        //2.设置请求的接口。
        if (!option.url || option.url === ' ') {
            throw new Error('请输入接口地址');
        }

        //3.设置是否异步
        if (option.async == false || option.async == 'false') {
            option.async = false;
        } else {
            option.async = true;
        }

        //5.设置发送的数据。
        //将对象转换成成拼接的字符串
        function objtostring(obj) {
            var arr = [];
            for (var i in obj) {
                arr.push(i + '=' + obj[i]);
            }
            return arr.join('&');
        }
        //5.1针对get发送数据
        if (option.data && option.type === 'get') {
            if (_typeof(option.data) === 'object' && !Array.isArray(option.data)) {
                //当前的值是对象，而不是数组。
                option.data = objtostring(option.data);
            }
            option.url += '?' + option.data;
        }

        ajax.open(option.type, option.url, option.async);

        //5.2针对post发送数据
        if (option.data && option.type === 'post') {
            if (_typeof(option.data) === 'object' && !Array.isArray(option.data)) {
                option.data = objtostring(option.data);
            }
            ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            ajax.send(option.data);
        } else {
            ajax.send();
        }

        //4.同步和异步的加载数据
        //判断数据类型是否是json格式。
        function getdata(appdata) {
            if (option.dataType === 'json') {
                try {
                    appdata = JSON.parse(appdata);
                } catch (e) {
                    throw new Error('数据无法转换成json对象');
                }
            }
            //option.success && typeof option.success === 'function' && option.success(appdata);
            resolve(appdata);
        }
        if (option.async) {
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4) {
                    if (ajax.status === 200) {
                        var appdata = ajax.responseText;
                        getdata(appdata);
                    } else {
                        // option.error && typeof option.error === 'function' && option.error('接口地址有误!' + ajax.status);
                        reject('接口地址有误!' + ajax.status);
                    }
                }
            };
        } else {
            if (ajax.status === 200) {
                var appdata = ajax.responseText;
                getdata(appdata);
            } else {
                //option.error && typeof option.error === 'function' && option.error('接口地址有误!' + ajax.status);
                reject('接口地址有误!' + ajax.status);
            }
        }
    });
    return promise;
}