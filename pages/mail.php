<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// echo $name.' '.$email.' '.$message;

mail('ejisulee@gmail.com', 'New contact', $name.' '.$email.' '.$message);

file_put_contents('emails.txt', $name.' '.$email.' '.$message.PHP_EOL.PHP_EOL, FILE_APPEND | LOCK_EX);

