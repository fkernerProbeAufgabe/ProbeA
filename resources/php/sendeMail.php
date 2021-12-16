<?php
$name = $_POST["name"];
$email = $_POST["email"];
$telefon = $_POST["telefon"];
$nachricht = $_POST["nachricht"];
 
$mailEmpfänger = "email@adresse.com";
$betreff = "Kontaktformular: Nachricht von: " + $name;
 
// E-Mail text vorbereiten
$text .= "Name: ";
$text .= $name;
$text .= "\n";
 
$text .= "E-Mail: ";
$text .= $email;
$text .= "\n";

$text .= "Telefonnummer: ";
$text .= $telefon;
$text .= "\n";
 
$text .= "Nachricht: ";
$text .= $nachricht;
$text .= "\n";
 
// sende E-Mail
$erfolg = mail($mailEmpfänger, $betreff, $text, "Von:".$email);
 
// redirect to success page
if ($erfolg){
   echo "Erfolg";
}else{
    echo "Fehler";
}
 
?>
