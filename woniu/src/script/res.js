// $('#username').on('focus',function(){
//     if($(this).val()==''){
//         $('.err-username').innerHTML='请输入正确的用户名';
//         $('.err-username').css({"color":"red","font-size":"16px"})
//     }
// })
// $('#username').on('blur',function(){
//     if($(this).val()!=''){
//        var $reg=/^[\w-\.]{6,16}$/;
//         if($reg.test($(this).val())){
//             $('.err-username').innerHTML='√';
//             $('.err-username').css({"color":"green"});
//         }else{
//             $('.err-username').innerHTML='输入的用户名有误';
//             $('.err-username').css({"color":"red"})
//         }
//     }else{
//         $('.err-username').innerHTML='请输入用户名';
//         $('.err-username').css({"color":"red"})
//     }
// })
//表单验证
// var username=document.querySelector('#username');
// var errusername=document.querySelector('.err-username');
// var password=document.querySelector('#password');
// var errpass=document.querySelector('.err-password');
// var surepass=document.querySelector('#confirmPassword');
// var sureserrpass=document.querySelector('.err-pass');
// const submit=document.querySelector('.submit');

// username.onfocus=function(){//用户名验证
//     if(this.value==''){
//         errusername.innerHTML='请输入正确的用户名';
//         errusername.style.csstext='font-size:26px;color:#999';
//     }
// };
// username.onblur=function(){
//     if(this.value!=''){
//         var reg=/^[\w-\.]{6,16}$/;
//         if(reg.test(this.value)){
//             errusername.innerHTML='√';
//             errusername.style.color='green';
//         }else{
//             errusername.innerHTML='你输入的用户名有误';
//             errusername.style.color='red';
//         }
//     }else{
//         errusername.innerHTML='请输入用户名';
//         errusername.style.color='red';
//     }
// }
// password.onfocus=function(){//密码验证
//     if(this.value==''){
//         errpass.innerHTML='请输入密码';
//         errpass.style.csstext='font-size:26px;color:#999';
//     }
// };
// password.onblur=function(){
//     if(this.value!=''){
//         var reg=/^[\w-\.]{6,16}$/;
//         if(reg.test(this.value)){
//             errpass.innerHTML='√';
//             errpass.style.color='green';
//         }else{
//             errpass.innerHTML='密码格式有误';
//             errpass.style.color='red';
//         }
//     }else{
//         errpass.innerHTML='请输入密码';
//         errpass.style.color='red';
//     }
// };
// surepass.onfocus=function(){
//     if(this.value==''){
//         sureserrpass.innerHTML='请确认密码';
//         sureserrpass.csstext='font-size:26px;color:#999';
//     }
// }
// surepass.onblur=function(){
//     if(this.value==password.value){
//         sureserrpass.innerHTML='√';
//         sureserrpass.style.color='green';
//     }else{
//         sureserrpass.innerHTML='两次输入的密码不一致';
//         sureserrpass.style.color='red';
//     }
// }
// //ajax交互
// let flag=true;
// username.onblur=function(){
//     ajax({
//         type:'post',
//         url:'http://10.31.158.24/1905-js/project/woniu/php/reg.php',
//         data:{
//             name:username.value,
//             pass:password.value,
//             conpass:surepass.value
//         }
//     }).then(function(d){
        
        
//         if(!d){//没重复
//             errusername.innerHTML='√';
//             errusername.style.color='green';
//             flag=true;
            
//         }else{
//             errusername.innerHTML='用户名已存在';
//             errusername.style.color='red';
//             flag=false;
//         }
//     });
// } 
// //用户名存在阻止注册
// submit.onclick=function(){
//     if(!flag){
//         return false;
        
        
//     }
// }
const username=$('#username');
const errusername=$('.err-username');
const password=$('#password');
const errpass=$('.err-password');
const surepass=$('#confirmPassword');
const sureserrpass=$('.err-pass');
const submit=$('.submit');

username.on('focus',function(){
    if($(this).val()==''){
        errusername.html('请输入正确的用户名');
        errusername.css({"color": "#999" });
    }
});
username.on('blur',function(){
    if($(this).val()!=''){
        var reg=/^[\w-\.]{6,16}$/;
        if(reg.test($(this).val)){
            errusername.html('√');
            errusername.css("color","green");
        }else{
            errusername.html('输入的用户名有误');
            errusername.css("color","red");
        }
    }else{
        errusername.html('请输入用户名');
            errusername.css("color","red");
    }
});
password.on('focus',function(){
    if($(this).val()==''){
        errpass.html('请输入密码');
        errpass.css("color","#999");
    }
});
password.on('blur',function(){
    if($(this).val()!=''){
        var reg=/^[\w-\.]{6,16}$/;  
        if(reg.test($(this))){
            errpass.html('√');
            errpass.css("color","green");
        }else{
            errpass.html('密码格式错误');
            errpass.css("color","red");
        }
    }else{
            errpass.html('请输入密码');
            errpass.css("color","red");
    }
});
surepass.on('focus',function(){
    if($(this).val()){
        sureserrpass.html('请确认密码');
        sureserrpass.css("color","#999");
    }
});
surepass.on('blur',function(){
    if($(this).val()==password.val()){
        sureserrpass.html('√');
        sureserrpass.css("color","green");
    }else{
        sureserrpass.html('两次输入的密码不一致');
        sureserrpass.css("color","red");
    }
})

//ajax交互
let flag=true;
username.on('blur',function(){
    $.ajax({
        type:'post',
        url:'http://10.31.158.24/1905-js/project/woniu/php/reg.php',
        data:{
            name:username.val(),
            pass:password.val(),
            conpass:surepass.val()
        },
        success:function(d){
            if(!d){//没重复
                errusername.html('√');
                errusername.css("color","green");
                flag=true;
                
            }else{
                errusername.html('用户名已存在');
                errusername.css("color","red");
                flag=false;
            }
        }
    })
})
//用户名存在阻止注册
submit.on('click',function(){
    if(!flag){
        return false;
    }
})