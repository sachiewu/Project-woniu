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
var username=document.querySelector('#username');
var errusername=document.querySelector('.err-username');
var password=document.querySelector('#password');
var errpass=document.querySelector('.err-password');
var surepass=document.querySelector('#confirmPassword');
var sureserrpass=document.querySelector('.err-pass');
const submit=document.querySelector('.submit');

username.onfocus=function(){//用户名验证
    if(this.value==''){
        errusername.innerHTML='请输入正确的用户名';
        errusername.style.csstext='font-size:26px;color:#999';
    }
};
username.onblur=function(){
    if(this.value!=''){
        var reg=/^[\w-\.]{6,16}$/;
        if(reg.test(this.value)){
            errusername.innerHTML='√';
            errusername.style.color='green';
        }else{
            errusername.innerHTML='你输入的用户名有误';
            errusername.style.color='red';
        }
    }else{
        errusername.innerHTML='请输入用户名';
        errusername.style.color='red';
    }
}
password.onfocus=function(){//密码验证
    if(this.value==''){
        errpass.innerHTML='请输入密码';
        errpass.style.csstext='font-size:26px;color:#999';
    }
};
password.onblur=function(){
    if(this.value!=''){
        var reg=/^[\w-\.]{6,16}$/;
        if(reg.test(this.value)){
            errpass.innerHTML='√';
            errpass.style.color='green';
        }else{
            errpass.innerHTML='密码格式有误';
            errpass.style.color='red';
        }
    }else{
        errpass.innerHTML='请输入密码';
        errpass.style.color='red';
    }
};
surepass.onfocus=function(){
    if(this.value==''){
        sureserrpass.innerHTML='请确认密码';
        sureserrpass.csstext='font-size:26px;color:#999';
    }
}
surepass.onblur=function(){
    if(this.value==password.value){
        sureserrpass.innerHTML='√';
        sureserrpass.style.color='green';
    }else{
        sureserrpass.innerHTML='两次输入的密码不一致';
        sureserrpass.style.color='red';
    }
}
//ajax交互
let flag=true;
username.onblur=function(){
    ajax({
        type:'post',
        url:'http://localhost/1905-js/project/woniu/php/reg.php',
        data:{
            name:username.value,
            pass:password.value,
            conpass:surepass.value
        }
    }).then(function(d){
        
        
        if(!d){//没重复
            errusername.innerHTML='√';
            errusername.style.color='green';
            let flag=true;
            
        }else{
            errusername.innerHTML='用户名已存在';
            errusername.style.color='red';
            let flag=false;
        }
    });
} 

submit.onclick=function(){
    if(!nameflag){
        username.focus();
        return false;
        
        
    }
}