// !function(){
//     const good=document.querySelector('.section');
//     const pic=document.querySelector('.part-l-image');
//     const title=document.querySelector('.title');
//     const price=document.querySelector('.sellprice');
//     let sid = location.search.substring(1).split('=')[1];
//     const btn=document.querySelector('.carBtns');
//     const numvalue=document.querySelector('.pro_num');
//     const alertbox=document.querySelector('.alertbox');
//     const close=document.querySelector(' .alertbox span');
//     const btn2=document.querySelector('.btn2');
//     //导航栏购物车盒子
//     const box2=document.querySelector('.nav_a_c');
//     //放大镜
//     // const pic=document.querySelector('.pic');
//     const bpic=document.querySelector('.dt');
//     const sf = document.querySelector('.xf');
//     const bf = document.querySelector('.df');
//     const margin = document.querySelector('.part-l');
//     // const span=document.querySelector('.nums');
//     ajax({
//         url: 'http://localhost/1905-js/project/woniu/php/details.php',
//         data: {
//             picid: sid
//         },
//         dataType: 'json',
//         success: function (objdata) {
//             bpic.src=objdata.url;
//             pic.src = objdata.url;
//             pic.setAttribute('sid',objdata.picid);  
//             title.innerHTML = objdata.title;
//             price.innerHTML = objdata.price;
//         }
//     });
//     //放大镜效果  
//     pic.onmouseover = function () {
//         console.log(1)
//         sf.style.display = 'block';
//         bf.style.display = 'block';
//         //宽高。
//         sf.style.width = pic.offsetWidth * bf.offsetWidth / bpic.offsetWidth + 'px';
//         sf.style.height = pic.offsetHeight * bf.offsetHeight / bpic.offsetHeight + 'px';

//         //比例
//         let bili = bpic.offsetWidth / pic.offsetWidth;
        
//         this.onmousemove = function (ev) {
//             var ev = ev || window.event;
//             let l = ev.clientX - margin.offsetLeft - sf.offsetWidth / 2;
//             let t = ev.clientY - margin.offsetTop - sf.offsetHeight / 2;
//             if (l < 0) {
//                 l = 0;
//             } else if (l >= pic.offsetWidth - sf.offsetWidth - 2) {
//                 l = pic.offsetWidth - sf.offsetWidth - 2;
//             }

//             if (t < 0) {
//                 t = 0;
//             } else if (t >= pic.offsetHeight - sf.offsetHeight - 2) {
//                 t = pic.offsetHeight - sf.offsetHeight - 2;
//             }


//             sf.style.left = l + 'px';
//             sf.style.top = t + 'px';

//             bpic.style.left = -l * bili + 'px';
//             bpic.style.top = -t * bili + 'px';
//         }
//     };
//     pic.onmouseout=function () {
//         console.log(2)
//         sf.style.display = 'none';
//         bf.style.display = 'none';
//     };
//     //存cookie
//     let arrsid=[];
//     let arrnum=[];
//     function cookievalue(){
//         if(getcookie('cookiesid') && getcookie('cookienum')){
//             arrsid=getcookie('cookiesid').split(',');
//             arrnum=getcookie('cookienum').split(',');
//         }
//     }
   
//    btn.onclick = function(){
       
//        //判断第几次点击
//     //调用函数获取cookie的值
//     cookievalue();
//     let sid =pic.getAttribute('sid');
//     if(arrsid.indexOf(sid)===-1){//不存在
//         arrsid.push(sid);
//         arrnum.push(numvalue.value);
//         setcookie('cookiesid',arrsid.toString(),30);
//         setcookie('cookienum',arrnum.toString(),30);

//     }else{//存在追加数量值  查找上一次的数量
//        let sum=  parseInt(arrnum[arrsid.indexOf(sid)]) +parseInt(numvalue.value);
//        arrnum[arrsid.indexOf(sid)]=sum;
//        setcookie('cookienum',arrnum.toString(),30);
//     }

// //    点击加入购物车
//     var box=document.createElement('div');
//     box.style.cssText='width:50px;height:50px;background:grey;position:absolute;left:400px;top:400px;border-radius:50%'
//     document.body.append(box);
//      let positionbox1={
//          x:box.offsetLeft,
//          y:box.offsetTop
//      }
//      let distance={
//          x:box2.offsetLeft-positionbox1.x,
//          y:box2.offsetTop-positionbox1.y
//      }
//      console.log(distance.x);
//      let a=0.0005;
//      let b=(distance.y-a*distance.x*distance.x)/distance.x;
//      let speed=0;
//     //  let num=0;
//      let timer=setInterval(function(){
//          if(box.offsetLeft>=box2.offsetLeft){
//              clearInterval(timer);
//              document.body.removeChild(box);
//          }else{
//              speed+=50;
//          box.style.left=positionbox1.x+speed+'px';
//          box.style.top=positionbox1.y+a*speed*speed+b*speed+'px';
//          }
        
         
//      },30)

//      //点击加入购物车进行弹框
     
//      alertbox.style.display='block';

//    }
//    //点击X让弹窗消失
   
//    close.onclick=function(){
//        alertbox.style.display='none';
//    }

//    //点击继续购物弹框消失继续购物
// btn2.onclick=function(){
//     alertbox.style.display='none';
// }

// //点击+-进行数量的加减
//        const morebtn=document.querySelector('.morebtn');
//        const lessbtn=document.querySelector('.lessbtn');
//        morebtn.onclick=function(){
//             let count=numvalue.value;
//             count++;
//             numvalue.value=count;
            
//        }
//        lessbtn.onclick=function(){
//         if(numvalue.value==1){
//             return false;
//         }
//         let count=numvalue.value;
//         count--;
//         numvalue.value=count;
//     }
 


// }();


!(function($){
    const good=$('.section');
    const pic=$('.pic');
    const title=$('.title');
    const price=$('.sellprice');
    const btn=$('.carBtns');
    const numvalue=$('.pro_num');
    const alertbox=$('.alertbox');
    const close=$('.alertbox span');
    const btn2=$('.btn2');
    let sid = location.search.substring(1).split('=')[1];
    const box2=$('.nav_a_c');
    $.ajax({
        url:'http://localhost/1905-js/project/woniu/php/details.php',
        data:{
            picid:sid
        },
        dataType:'json',
        success:function(objdata){
            pic.attr('src',objdata.url);
            pic.attr("sid",objdata.picid);  
            title.html(objdata.title); 
            price.html(objdata.price);
        }
    });
    //存cookie
    let arrsid=[];
    let arrnum=[];
    function cookievalue(){
        if(getcookie('cookiesid') && getcookie('cookienum')){
            arrsid=getcookie('cookiesid').split(',');
            arrnum=getcookie('cookienum').split(',');
        }
    }

    btn.on('click',function(){
        //判断是否已经存在cookie值
        cookievalue();
        let sid=pic.attr('sid');
        if(arrsid.indexOf(sid)===-1){//不存在
            arrsid.push(sid);
            arrnum.push(numvalue.value);
            setcookie('cookiesid',arrsid.toString(),30);
            setcookie('cookienum',arrnum.toString(),30);
        }  else{//存在追加数量值  查找上一次的数量
            let sum=  parseInt(arrnum[arrsid.indexOf(sid)]) +parseInt(numvalue.value);
            arrnum[arrsid.indexOf(sid)]=sum;
            setcookie('cookienum',arrnum.toString(),30);
         }
         
        //  点击加入购物车
         var box=$("<div></div>");
         document.body.append(box[0]); 
         box.css({"width":"50px","height":"50px","background":"grey","position":"absolute","left":"400px","top":"400px","border-radius":"50%"});
         let positionbox1={
            x:box[0].offsetLeft,
            y:box[0].offsetTop
        }
        let distance={
            x:box2[0].offsetLeft-positionbox1.x,
            y:box2[0].offsetTop-positionbox1.y
        }
        let a=0.0005;
        let b=(distance.y-a*distance.x*distance.x)/distance.x;
        let speed=0;
        let timer=setInterval(function () { 
            if(box[0].offsetLeft>=box2[0].offsetLeft){
                clearInterval(timer);
                document.body.removeChild(box[0]);
            }else{
                speed+=50;
            // box.style.left=positionbox1.x+speed+'px';
            console.log(box,speed)
            box.css({"left":positionbox1.x+speed+'px'});
            // box.style.top=positionbox1.y+a*speed*speed+b*speed+'px';
            box.css({"top":positionbox1.y+a*speed*speed+b*speed+'px'});
            }
         },30)

         //点击加入购物车进行弹框

         alertbox.css({"display":"block"});
    })

    //点击X弹窗消失
    close.on('click',function () { 
        alertbox.css({"display":"none"});
     })
     //点击继续购物弹窗消失
     btn2.on('click',function () { 
         alertbox.css({"display":"none"});
      })

      //点击+-进行数量的加减

      const morebtn=$(".morebtn");
      const lessbtn=$(".lessbtn");
      morebtn.on('click',function () { 
          let count=numvalue.val();
          count++;
          numvalue.val(count);
       })
       lessbtn.on('click',function(){
           if(numvalue.val()==1){
               return false;
           }
           let count=numvalue.val();
           count--;
           numvalue.val(count);
       })
})(jQuery)