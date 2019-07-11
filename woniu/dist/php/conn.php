<?php
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD', '');
define('DBNAME','zhuce');
$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
if ($conn->connect_error) { //如果连接数据库出错。指向下面的die函数。输出里面的信息。
    die('数据库连接失败：' . $conn->connect_error);
}
$conn->query('SET NAMES UTF8');