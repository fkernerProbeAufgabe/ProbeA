"use strict";

//Variable um Switch-Status abzufragen
let toggleSwitch = false;
$("#dataSwitch").on('change', function() {
    //Wenn Switch geklickt -> toggleSwitch wird geändert
    if (toggleSwitch === false) {
      toggleSwitch = true;
    } else {
      toggleSwitch = false;
    }
  });


//Funktion, die Informationen über Ajax an php-Schnittstelle leitet
//vorher Überprüfung ob Eingabe korrekt
function ajaxVermitteln() {

  //Auruf der checkEingabe() Funktion um Vollständigkeit der Eingabe zu kontrollieren
  let korrekt;
  korrekt = checkEingabe();

  //Abrufen der eingegebenen Informationen
  const name = $("#vorNameFeld").val() + " " + $("#nachNameFeld").val();
  const email = $("#emailFeld").val();
  const telefon = $("#telefonFeld").val();
  const nachricht = $("#nachrichtenFeld").val();

  //bei vollständigem Formular: über Ajax weitergeleitet
  if(korrekt) {
    $.ajax({
      type: "POST",
      url: "../php/sendeMail.php",
      data: "name=" + name + "&email=" + email + "&telefon=" + telefon +"&message=" + nachricht,  });
  } else return korrekt;
}

//Funktion zur Vollständigkeitsüberprüfung des Formulars und Markierung leerer Pflichtfelder
function checkEingabe() {
  var valid = true;

  //Werte der Eingabefelder sammeln
  const vorName = $("#vorNameFeld").val();
  const nachName = $("#nachNameFeld").val();
  const email = $("#emailFeld").val();
  const telefon = $("#telefonFeld").val();

  //Überprüfen ob Pflichtfelder gefüllt sind, E-Mail "@" enthält und Switch = true
  //wenn nicht: valid = false und Rand des Feldes rot markiert
  //wenn gegeben: Rand wieder weiß, sodass nur inkorrekte Felder markiert sind
  if (vorName === "") {
    $("#vorNameFeld").css("border-color", "red");
    valid = false;
  } else $("#vorNameFeld").css("border-color", "white");
  if (nachName === "") {
    $("#nachNameFeld").css("border-color", "red");
    valid = false;
  } else $("#nachNameFeld").css("border-color", "white");
  if (email === "" || !email.includes("@")) {
    $("#emailFeld").css("border-color", "red");
    valid = false;
  } else $("#emailFeld").css("border-color", "white");
  if (telefon === "") {
    $("#telefonFeld").css("border-color", "red");
    valid = false;
  } else $("#telefonFeld").css("border-color", "white");
  if (toggleSwitch === false) {
    $(".slider").css("background-color", "red");
    valid = false;
  }
  return valid;
}

