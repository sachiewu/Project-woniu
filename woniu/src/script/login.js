const btn = document.querySelector('.btn');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
btn.onclick = function () {
    ajax({
        type: 'post',
        url:'http://localhost/1905-js/project/woniu/php/login.php',
        data: {//数据传给后端   php后端进行匹配
            user: username.value,
            pass: password.value
        }
    }).then(function (d) {
        if (!d) {
            alert('输入有误');
            password.value = '';
        } else {
            location.href = 'woniu.html';
            //登陆成功，采用本地存储用户名
            localStorage.setItem('successname', username.value);
        }
    });
}