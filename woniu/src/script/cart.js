// ; !function () {
//     const listitem = document.querySelector('.good');//商品列表盒子
//     const alertbox = document.querySelector('.alertbox');
//     const close = document.querySelector(' .alertbox span');
//     const btn2 = document.querySelector('.btn2');
//     const btn1 = document.querySelector('.btn1');
//     // console.log(listitem)
//     //封装函数实现渲染购物车商品列表
//     //通过sid获取对应得接口数据的值。
//     function goods(sid, num) {
//         ajax({
//             url: 'http://10.31.158.24/1905-js/project/woniu/php/listitem.php',
//             dataType: 'json',
//             success: function (piclist) {//获取对应得商品列表的数据

//                 let str = '';
//                 for (let i = 0; i < piclist.length; i++) {
//                     // console.log((piclist[i].price))
//                     if (piclist[i].picid == sid) {//通过循环判断当前渲染的商品列表的sid和接口数据picid是否相同。
//                         str += `
                 
//                                     <div class="goodlist">
//                                     <input type="checkbox" class="single" id="">
//                         <div class="price"><img src="${piclist[i].url}"
//                             alt=""></div>
//                         <div class="goodinfor">${piclist[i].title}</div>
                    
//                         <div class="num"><input type="text" size="10"  value="${num}"></div>
//                         <div class="sumprice">￥${piclist[i].price}</div>
//                         <div class="del"><a class="dele">删除</a></div>
//                     </div>
           
//                         `;
//                     }
//                 }
//                 listitem.innerHTML += str;

//             }
//         });

//     }


//     //获取cookie   渲染
//     if (getcookie('cksid') && getcookie('cknum')) {
//         // console.log(getcookie('cksid'));
//         //转数组便于取id和num
//         let arrsid = getcookie('cksid').split(',');
//         let arrnum = getcookie('cknum').split(',');
//         for (let i = 0; i < arrsid.length; i++) {
//             goods(arrsid[i], arrnum[i]);
//         }
//     }

//     //点击删除按钮
//     //点击删除进行弹框
//     listitem.addEventListener('click', function (event) {
//         var target = event.target;
//         console.log(event);
//         if (target.nodeName == 'A') {
//             //  alert(1);
//             alertbox.style.display = 'block';
//         }

//     })
//     //点击X让弹窗消失

//     close.onclick = function () {
//         alertbox.style.display = 'none';
//     }

//     //点击继续购物弹框消失继续购物
//     btn2.onclick = function () {
//         alertbox.style.display = 'none';
//     }
//     btn1.onclick = function () {

//         alertbox.style.display = 'none';
//         listitem.style.display = 'none';

//     }
// }();    

!(function ($) { 
    const listitem =$('.good');
    const alertbox =$('.alertbox');
    const close =$('.alertbox span');
    const btn2 =$('.btn2');
    const btn1 =$('.btn1');
    function goods(sid,num){
        $.ajax({
            url:'http://10.31.158.24/1905-js/project/woniu/php/listitem.php',
            dataType:'json',
            success:function(piclist){
               
                let  str='';
                for (let i = 0; i < piclist.length; i++){ 
                    if (piclist[i].picid == sid){
                       
                        str+=`
                 
                        <div class="goodlist">
                        <input type="checkbox" class="single" id="">
            <div class="price"><img src="${piclist[i].url}"
                alt=""></div>
            <div class="goodinfor">${piclist[i].title}</div>
        
            <div class="num"><input type="text" size="10"  value="${num}"></div>
            <div class="sumprice">￥${piclist[i].price}</div>
            <div class="del"><a class="dele">删除</a></div>
        </div>

            `;
                    }
                   
                 }
                 listitem.append(str);
                 
                
            }
        })
    }

     //获取cookie   渲染
     if (getcookie('cksid') && getcookie('cknum')) {
        // console.log(getcookie('cksid'));
        //转数组便于取id和num
        let arrsid = getcookie('cksid').split(',');
        let arrnum = getcookie('cknum').split(',');
        for (let i = 0; i < arrsid.length; i++) {
            goods(arrsid[i], arrnum[i]);
        }
    }

    // 点击删除按钮
    // 点击删除进行弹框
    listitem.on('click','a',function (event) { 
        var target = event.target;
        if (target.nodeName == 'A') {
                    //  alert(1);
                    alertbox.css({"display":"block"});
                }
     })
    //点击X让弹窗消失
    close.on('click',function(){
        alertbox.css({"display":"none"})
    })
    //点击继续购物弹框消失继续购物
    // btn2.onclick = function () {
    //     alertbox.style.display = 'none';
    // }
    btn2.on('click',function(){
        alertbox.css({"display":"none"})
    })
    btn1.on('click',function(){
        alertbox.css({"display":"none"});
        listitem.css({"display":"none"})
    })

    const $all=$('.all');//定义的jquery变量，自己约定前面添加一个$符号。
    const $inputs=$('input').not('.all');//获取所有的input，除了包含.all类的input.
    $all.on('click',function(){//change
        if($all.prop('checked')){//复选框选中
            $inputs.prop('checked',true);
        }else{//复选框没有选中
            $inputs.prop('checked',false);
            //$inputs.attr('checked',false);//赋值无效
        }
    });

    $inputs.on('click',function(){//change
        if($inputs.size()===$('input:checked').not('.all').length){//当前添加事件的input的长度===选中的长度   全选勾上
            $all.prop('checked',true);
        }else{
            $all.prop('checked',false);
        }
    });
 })(jQuery)