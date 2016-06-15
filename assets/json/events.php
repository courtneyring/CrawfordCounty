<?php


$name = $_POST['name'];
$date = $_POST['date'];

$file = "events.json";

$json = json_decode(file_get_contents($file));

$json[] = array('name'=>$name, 'date'=>$date);

file_put_contents($file, json_encode($json));

?>