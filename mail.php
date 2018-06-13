<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$name = $_POST['name'];
$mes = $_POST['mes'];
$email = $_POST['email'];



$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'denis.varla95@gmail.com';  // Your login from the mail from which letters will be sent
$mail->Password = 'Den4ik21';   // Your password from the mail from which letters will be sent
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;


$mail->setFrom('denis.varla95@gmail.com');  // who will send the letter
$mail->addAddress('ciluka@taylorventuresllc.com'); // who will receive the letter
$mail->isHTML(true);

$mail->Subject = 'Message Modest';
$mail->Body    = 'User ' .$name . '<br>Message ' .$mes. '<br>Mael user ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
        $answer = '1';
} else {
    $answer = '0';
}
die($answer);
?>