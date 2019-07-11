'use strict';

;!function () {
    var listitem = document.querySelector('.listitem'); //商品列表盒子
    // console.log(listitem)
    //封装函数实现渲染购物车商品列表
    //通过sid获取对应得接口数据的值。
    function showgoods(sid, num) {
        ajax({
            url: 'http://localhost/1905-js/project/woniu/php/listitem.php',
            dataType: 'json',
            success: function success(piclist) {
                //获取对应得商品列表的数据

                var goodshtml = '';
                for (var i = 0; i < piclist.length; i++) {
                    // console.log((piclist[i].price))
                    if (piclist[i].picid == sid) {
                        //通过循环判断当前渲染的商品列表的sid和接口数据picid是否相同。
                        goodshtml += '\n                   \n                    <div class="listitem">\n                    <table>\n                    <tr>\n                        <td>\u5546\u54C1\u56FE</td>\n                        <td>\u6807\u9898</td>\n                        <td>\u6570\u91CF</td>\n                        <td>\u4EF7\u683C</td>\n                        <td>\u603B\u4EF7</td>\n                        <td>\u64CD\u4F5C</td>\n                    </tr>\n                    <tr>\n                        <td><img src="' + piclist[i].url + '"\n                                alt=""></td>\n                        <td>\n                            <p>' + piclist[i].title + '\n                            </p>\n                        </td>\n                        <td><input type="text" value="' + num + '"></td>\n                        <td>\uFFE5' + piclist[i].price + '</td>\n                        <td>\uFFE5' + piclist[i].price + '*' + num + '</td>\n                        <td><a>\u5220\u9664</a></td>\n                    </tr>\n                </table>\n                </div>\n           \n                        ';
                    }
                }
                listitem.innerHTML += goodshtml;
            }
        });
    }

    //获取cookie   渲染
    if (getcookie('cookiesid') && getcookie('cookienum')) {
        var arrsid = getcookie('cookiesid').split(','); //将获取的cookie转换成数组
        var arrnum = getcookie('cookienum').split(',');
        for (var i = 0; i < arrsid.length; i++) {
            showgoods(arrsid[i], arrnum[i]);
        }
    }
}();