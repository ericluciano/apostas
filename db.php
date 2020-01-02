<?php
require "vendor/autoload.php";
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$db = $_ENV["DB"];

$dsn = $_ENV[$db];
$username = $_ENV["{$db}_USER"];
$password = $_ENV["{$db}_PASS"];

try{
 // create a PostgreSQL database connection
 $pdo = new PDO($dsn, $username, $password);
 
 // display a message if connected to the PostgreSQL successfully
 if($pdo){
 #echo "Connected to the <strong>$db</strong> database successfully!";
 }
}catch (PDOException $e){
 // report error message
 echo $e->getMessage();
}
?>