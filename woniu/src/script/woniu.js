// //商品数据渲染
// const container=document.querySelector('.prop-rqdp-container');
// let ajax=new XMLHttpRequest();
// ajax.open('get','http://10.31.158.24/1905-js/project/woniu/php/woniu.php',true);
// ajax.send();
// ajax.onreadystatechange=function () {
//     if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//             console.log(JSON.parse(ajax.responseText));
//             let dataarr=JSON.parse(ajax.responseText);
//             let strhtml='';
//             for(let i=0;i<dataarr.length;i++){
//                 strhtml+=`
//                     <a class="prop-rqdp-product" href="http://10.31.158.24/1905-js/project/woniu/src/details.html?sid=${dataarr[i].picid}">
//                         <img src="${dataarr[i].url}">
//                         <div class="prop-rqdp-product-name">${dataarr[i].title}</div>
//                         <div class="prop-rqdp-product-price">￥${dataarr[i].price}</div>
//                     </a>
//                     <div class="prop-rqdp-tip">
// 					<span>人气<br>单品</span>
// 					<img src="http://static.snail.com/images/prop/rqdp.png">
// 				</div>
//                 `;
//             }
//             container.innerHTML=strhtml;

//         } else {
//             throw new Error('接口地址有误' + ajax.status);
//         }
//     }
// };

//商品数据渲染
!(function ($) {
    const container = $('.prop-rqdp-container');
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://10.31.158.24/1905-js/project/woniu/php/woniu.php',
        success: function (dataarr) {
            console.log(dataarr);
            let strhtml = '';
            $(dataarr).each(function (index) {
                strhtml += `
                <a class="prop-rqdp-product" href="http://10.31.158.24/1905-js/project/woniu/src/details.html?sid=${dataarr[index].picid}">
                    <img src="${dataarr[index].url}">
                    <div class="prop-rqdp-product-name">${dataarr[index].title}</div>
                    <div class="prop-rqdp-product-price">￥${dataarr[index].price}</div>
                </a>
                <div class="prop-rqdp-tip">
                <span>人气<br>单品</span>
                <img src="http://static.snail.com/images/prop/rqdp.png">
            </div>
            `;
            })
            container.html(strhtml);
        }
    });
    //轮播图
    const circle = $('.prop-slide-page a');
    const picli = $('.prop-slide li');
    const left = $('.prop-slide-btn-left');
    const right = $('.prop-slide-btn-right');
    let num = null;
    let timer = null;
    //圈圈加类
    circle.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        num = $(this).index();
        picli.eq(num).show().siblings().hide();

    })
    //自动轮播
    timer = setInterval(function () {

        right.click();
    }, 2000)

    //右键点击
    right.on('click', function () {
        ++num;
        if (num == circle.length) {
            // console.log(num)
            num = 0
        }
        picli.eq(num).show().siblings().hide();
        circle.eq(num).addClass('active').siblings().removeClass('active');
    })
    //左键点击
    left.on('click', function () {
        --num;
        if (num < 0) {
            num = circle.length - 1;

        }
        picli.eq(num).show().siblings().hide();
        circle.eq(num).addClass('active').siblings().removeClass('active');
    })

    // function tabswitch(i) {
    //     $(picli).each(function (j) {
    //     $(this).circle[j].removeClass('active');
    //     $(this).picli[j].css("display", "none");
    //     })
    //     $(this).circle[i].addClass('active');
    //     $(this).picli[i].css("display","block");
    // }

    //tab切换
    //   const ali=document.querySelectorAll('.prop-yxdj-selectBar li');
    //   const item=document.querySelectorAll('.prop-yxdj-products');
    //   for(let i=0;i<ali.length;i++){
    //       ali[i].onclick=function(){
    //         //   alert(1);
    //           for(let j=0;j<item.length;j++){
    //               // ali[j].className='';
    //               item[j].className='';
    //           }
    //           this.item.className='active';
    //       }
    //   }
    //tab切换
    
    const ali = $('.prop-selectBar-slide li');
    const item = $('.prop-yxdj-products');
    ali.on('click', function () {
        // console.log($(this).index());
       
        $(this).addClass('active').siblings().removeClass('active');
        
        // item.eq(num1).show().siblings().hide();
        item.eq($(this).index()).removeClass('prop-none').siblings('.prop-yxdj-products').addClass('prop-none')

    })

})(jQuery)


