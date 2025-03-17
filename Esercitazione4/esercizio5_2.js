let settimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

let number = 0;

dayWeek = number +-1;

if (!isNaN(number) && number >= 1 && number <= 7) {
    console.log("Il giorno corrispondente è: " + settimana[dayWeek]);
} else {
    console.log("Numero non valido! Inserisci un valore tra 1 e 7.");
}