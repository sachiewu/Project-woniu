<?php
header('content-type:text/html;charset=utf-8');
define('HOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'woniu');
$connindex = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME); //@:容错的
if ($connindex->connect_error) {
    die('数据库连接失败：' . $connindex->connect_error);
}
$connindex->query('SET NAMES UTF8');