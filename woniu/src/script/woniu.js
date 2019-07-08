// //商品数据渲染
// const container=document.querySelector('.prop-rqdp-container');
// let ajax=new XMLHttpRequest();
// ajax.open('get','http://localhost/1905-js/project/woniu/php/woniu.php',true);
// ajax.send();
// ajax.onreadystatechange=function () {
//     if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//             console.log(JSON.parse(ajax.responseText));
//             let dataarr=JSON.parse(ajax.responseText);
//             let strhtml='';
//             for(let i=0;i<dataarr.length;i++){
//                 strhtml+=`
//                     <a class="prop-rqdp-product" href="http://localhost/1905-js/project/woniu/src/details.html?sid=${dataarr[i].picid}">
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
!(function ($) {
    const container = $('.prop-rqdp-container');
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost/1905-js/project/woniu/php/woniu.php',
        success: function (dataarr) {
            console.log(dataarr);
            let strhtml = '';
            $(dataarr).each(function (index) {
                strhtml += `
                <a class="prop-rqdp-product" href="http://localhost/1905-js/project/woniu/src/details.html?sid=${dataarr[index].picid}">
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
    let num=null;
    let timer=null;
        circle.on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            num=$(this).index();
            picli.eq(num).show().siblings().hide();
           
    })
    timer=setInterval(function(){
      
        rightclick();
    },2000)
   
   !function rightclick(){
    right.on('click',function(){   
        ++num;
        if(num==circle.length){
            // console.log(num)
            num=0
        }
        picli.eq(num).show().siblings().hide();
        circle.eq(num).addClass('active').siblings().removeClass('active');
    })
   }();
  
        
    
    
    left.on('click',function(){   
        --num;
        if(num<0){
            // console.log(num)
            num=circle.length-1;
            
        }
        console.log(num);
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


})(jQuery)


