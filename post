<?php

$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// echo $name;
// echo $email;
// echo $message;

$msg = $name . " - " . $email . "\r\n" . $message;

$headers = 'From: jisu@zisulee.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();

$tofile = "\r\n-------\r\n" . date("Y-m-d H:i:s") . "\r\n-------\r\n" . $msg . "\r\n------\r\n";

file_put_contents('messages.txt', $tofile, FILE_APPEND);

mail('ejisulee@gmail.com', 'New Contact from portfolio', $msg);

header('Location: thankyou.php');