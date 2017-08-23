<?php
header("Access-Control-Allow-Origin: *");
require "../../include/redis/setup.php";

//error_reporting(E_ALL);

//echo $_SERVER['REQUEST_METHOD'];
//ini_set("allow_url_fopen", true);

class  Entry{
	public $line = "";
	public $time = "";
	public $user = "";
}

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

//using $_REQUEST as work around since $_POST
//keeps coming up empty 

$line = $_REQUEST["line"];
$user = "";
$time = date("Y-m-d H:i:s");

$entry = new Entry;
$entry->time = $time;
$entry->line = $line;
$entry->user = $user;
$store = json_encode($entry);

$room = $_REQUEST["room"];
$redis_client->rpush($room, $store);
echo json_encode($redis_client->lrange($room, 0, -1));

?>
