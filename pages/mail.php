<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

mail('ejisulee@gmail.com', 'New contact', $name.' '.$email.' '.$message);

$txt = '---------'.PHP_EOL;
$txt = $txt . '-----' . date('Y-m-d H:i:s') . '-----'.PHP_EOL;
$txt = $txt . $name.' : '.$email.' : '.$message.PHP_EOL;
$txt = $txt . '---------'.PHP_EOL.PHP_EOL;
file_put_contents('emails.txt', $txt, FILE_APPEND | LOCK_EX);

