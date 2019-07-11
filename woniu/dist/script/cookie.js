'use strict';

function setcookie(key, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
}

function getcookie(key) {
    var arr = decodeURI(document.cookie).split('; ');
    for (var i = 0; i < arr.length; i++) {
        var newarr = arr[i].split('=');
        if (newarr[0] === key) {
            return newarr[1];
        }
    }
}

function delcookie(key) {
    setcookie(key, '', -1);
}