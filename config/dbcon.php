<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "party";
$db = mysqli_connect($server,$username,$password,$dbname);;
if (!$db) {
    die("Connection failed: ".mysqli_connect_error());
}
?>