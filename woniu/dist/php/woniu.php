<?php

require "connindex.php";

$result=$connindex->query("select * from piclist");

$arr=array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}

echo json_encode($arr);