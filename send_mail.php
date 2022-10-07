<?php
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;

//Load Composer's autoloader
require 'vendor/autoload.php';

//On décode et on enregistre l'image qui provient du JSON
$donnees = json_decode(file_get_contents('php://input'), false);
list($type, $data) = explode(';', $donnees->image);
list(, $image) = explode(',', $data);
$image_decodee = base64_decode($image);
$fichier = md5(uniqid()). '.png';
file_put_contents(__DIR__."/images/$fichier", $image_decodee);
//var_dump($donnees);


//On envoie le mail
$mail = new PHPMailer(true);
try {
    //Server settings
//    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = 'localhost';
    $mail->Port = 1025;
    $mail->CharSet = 'utf-8';

    //Recipients
    $mail->setFrom($donnees->fromEmail);
    $mail->addAddress($donnees->toEmail);
    if($donnees->copieMail === true){
        $mail->addCC($donnees->fromEmail);
    }
    $mail->addAttachment(__DIR__."/images/$fichier", $fichier);
    //Content
    //Set email format to HTML
    $mail->isHTML('true');
    $mail->Subject = $donnees->subject." vous a envoyé un dessin !";
    $mail->AltBody = $donnees->bodyMail.'<img src="http://localhost/API_Canvas/images/'.$fichier.'"" width="200px" height="200px">';
    $mail->Body = $donnees->bodyMail.'<img src="http://localhost/API_Canvas/images/'.$fichier.'"" width="200px" height="200px">';
    $mail->send();
    echo json_encode(['Le message a bien été envoyé.']);
} catch (Exception $e) {
    echo json_encode(["Le message n'a pas pu être envoyé. Mailer Error: {$mail->ErrorInfo}"]);
}
