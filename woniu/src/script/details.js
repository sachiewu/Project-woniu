!function(){
    const good=document.querySelector('.section');
    const pic=document.querySelector('.pic');
    const title=document.querySelector('.title');
    const price=document.querySelector('.sellprice');
    let sid = location.search.substring(1).split('=')[1];
    const btn=document.querySelector('.carBtns');
    const numvalue=document.querySelector('.pro_num');
    ajax({
        url: 'http://localhost/1905-js/project/woniu/php/details.php',
        data: {
            picid: sid
        },
        dataType: 'json',
        success: function (objdata) {
            pic.src = objdata.url;
            pic.setAttribute('sid',objdata.picid);  
            title.innerHTML = objdata.title;
            price.innerHTML = objdata.price;
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
   
   btn.onclick = function(){
       //判断第几次点击
    //调用函数获取cookie的值
    cookievalue();
    let sid =pic.getAttribute('sid');
    if(arrsid.indexOf(sid)===-1){//不存在
        arrsid.push(sid);
        arrnum.push(numvalue.value);
        setcookie('cookiesid',arrsid.toString(),30);
        setcookie('cookienum',arrnum.toString(),30);

    }else{//存在追加数量值  查找上一次的数量
       let sum=  parseInt(arrnum[arrsid.indexOf(sid)]) +parseInt(numvalue.value);
       arrnum[arrsid.indexOf(sid)]=sum;
       setcookie('cookienum',arrnum.toString(),30);
    }

   }
}()
