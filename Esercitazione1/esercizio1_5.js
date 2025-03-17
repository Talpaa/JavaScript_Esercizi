let giorniDellaSettimana = " Lunedì, Martedì, Mercoledì, Giovedì, venerdì, Sabato, Domenica";

console.log(giorniDellaSettimana);
document.getElementById("testo1").innerHTML = giorniDellaSettimana;

//console
console.log(giorniDellaSettimana.replaceAll(",", "\n"));

//html
giorniDellaSettimana = giorniDellaSettimana.replaceAll(",", "<br/>");
document.getElementById("testo2").innerHTML = giorniDellaSettimana;