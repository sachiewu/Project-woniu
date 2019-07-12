<?php
//后端获取前端的用户名和数据进行匹配
include "conn.php";
if(isset($_POST['name'])){
    $name=$_POST['name'];
    $pass=$_POST['pass'];
    $conpass=$_POST['conpass'];
    $result=$conn->query("select * from usertable where username='$name'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}


//获取前端表单的值，根据form表单提交的值
if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password=sha1($_POST['password']);
    $confirmPassword=sha1($_POST['confirmPassword']);
    $conn->query("insert usertable values(null,'$username','$password',NOW(),'$confirmPassword')");
    //设置跳转的地址
    header('location:http://10.31.158.24/1905-js/project/woniu/src/login.html');
}