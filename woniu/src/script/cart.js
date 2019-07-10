;!function () {
    const listitem = document.querySelector('.listitem');//商品列表盒子
    // console.log(listitem)
    //封装函数实现渲染购物车商品列表
    //通过sid获取对应得接口数据的值。
    function showgoods(sid,num) {
        ajax({
            url: 'http://localhost/1905-js/project/woniu/php/listitem.php',
            dataType: 'json',
            success: function (piclist) {//获取对应得商品列表的数据
               
                let goodshtml='';
                for (let i = 0; i < piclist.length; i++) {
                    // console.log((piclist[i].price))
                    if (piclist[i].picid == sid) {//通过循环判断当前渲染的商品列表的sid和接口数据picid是否相同。
                    goodshtml+=`
                   
                    <div class="listitem">
                    <table>
                    <tr>
                        <td>商品图</td>
                        <td>标题</td>
                        <td>数量</td>
                        <td>价格</td>
                        <td>总价</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td><img src="${piclist[i].url}"
                                alt=""></td>
                        <td>
                            <p>${piclist[i].title}
                            </p>
                        </td>
                        <td><input type="text" value="${num}"></td>
                        <td>￥${piclist[i].price}</td>
                        <td>￥${piclist[i].price}*${num}</td>
                        <td><a>删除</a></td>
                    </tr>
                </table>
                </div>
           
                        `;
                    }
                }
                listitem.innerHTML+=goodshtml;
            
            }
        });

    }
    

    //获取cookie   渲染
    if (getcookie('cookiesid') && getcookie('cookienum')) {
        let arrsid = getcookie('cookiesid').split(',');//将获取的cookie转换成数组
        let arrnum = getcookie('cookienum').split(',');
        for(let i=0;i<arrsid.length;i++){
            showgoods(arrsid[i],arrnum[i]);
        }
    }

    
}();