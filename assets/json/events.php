<?php

$file = "events.json";

$data = json_decode(file_get_contents($file));

$data[0]['date']="test";

$newJson = json_encode($data)

file_put_contents($file, json_encode($newJson));


?>