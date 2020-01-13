<?php
require '../inc/phpmailer/PHPMailerAutoload.php';
$email_address = $_POST['email_address'];
$phone_number = $_POST['phone_number'];
$message = $_POST['message'];
$username = $_POST['username'];
$subject = $_POST['subject'];
$mail = new phpmailer(true);

    try{

        // $mail->SMTPDebug = 2;

        $mail->isSMTP();

        $mail->Host = 'smtp.gmail.com';

        $mail->SMTPAuth = true;

        $mail->Username = 'ptit.canvaslms@gmail.com';

        $mail->Password = '@Lms@2020##';

        $mail->SMTPSecure = 'tls';

        $mail->Port = 587;



        // Recipients

        $mail->setFrom($send_address);

        $mail->addAddress('ptit.canvaslms@gmail.com');

        $mail->addReplyTo('ptit.canvaslms@gmail.com');



        // Content

        $mail->isHTML(true);

        $mail->Subject = $subject;

        $mail->Body = $message." - ".$email_address; // Nội dung email thì sửa ở đây
        $mail->send();
        echo 'Message has been send!';
    } catch (Exception $e){
        // echo 'Message could not be send. Error: ', $mail->ErrorInfo;
        echo 'Message could not be send. Error: '.$e;
    }

?>