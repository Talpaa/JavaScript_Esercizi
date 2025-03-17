let numeroCasuale = Math.floor(Math.random() * 101); // Genera un numero tra 0 e 100
let tentativi = 0;

function controllaNumero() {
    let inputUtente = document.getElementById("tentativo").value;
    let messaggio = document.getElementById("messaggio");

    if (inputUtente === "") {
        messaggio.textContent = "Inserisci un numero!";
        return;
    }

    let numeroInserito = parseInt(inputUtente);

    if (isNaN(numeroInserito) || numeroInserito < 0 || numeroInserito > 100) {
        messaggio.textContent = "Numero non valido! Inserisci un valore tra 0 e 100.";
        return;
    }

    tentativi++;
    document.getElementById("conteggio").value = tentativi;

    if (numeroInserito < numeroCasuale) {
        messaggio.textContent = "Troppo basso! Riprova.";
    } else if (numeroInserito > numeroCasuale) {
        messaggio.textContent = "Troppo alto! Riprova.";
    } else {
        messaggio.textContent = "Complimenti! Hai indovinato in " + tentativi + " tentativi!";
    }
}

function nuovoGioco() {
    numeroCasuale = Math.floor(Math.random() * 101);
    tentativi = 0;
    document.getElementById("tentativo").value = "";
    document.getElementById("conteggio").value = "0";
    document.getElementById("messaggio").textContent = "";
}