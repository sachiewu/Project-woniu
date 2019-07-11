<?php
include "conn.php";
if(isset($_POST['user'])&& isset($_POST['pass'])){
    $user=$_POST['user'];
    $pass=sha1($_POST['pass']);
    $result=$conn->query("select * from usertable where username='$user'and password='$pass'");
    if($result->fetch_assoc()){//登陆成功
        echo true;
    }else{//登陆失败
        echo false;
    }
    //  header(http:'//localhost/1905-js/day%2024/loginres/src/index.html/')
}

