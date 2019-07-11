<?php

require "connindex.php";

if(isset($_GET['picid'])){
    $sid=$_GET['picid'];

    $result=$connindex->query("select * from piclist where picid=$sid ");

    echo json_encode($result->fetch_assoc());

}