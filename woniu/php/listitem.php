<?php

require "connindex.php";

$result=$connindex->query("select * from piclist");

$dataarr=array();
for($i=0;$i<$result->num_rows;$i++){
   $dataarr[$i] = $result->fetch_assoc();
}
echo json_encode($dataarr);