const getValues = () => {
    const a = parseFloat(document.getElementById("valoreA").value) || 0; // Converte il valore in numero, se vuoto prende 0
    const b = parseFloat(document.getElementById("valoreB").value) || 0; // Converte il valore in numero, se vuoto prende 0
    return { a, b };
};

const aggiornaLarghezzaRisultato = () =>{
    const risultato = document.getElementById("risultato");
    // Calcola la larghezza in base al contenuto (aggiungi un po' di spazio extra)
    risultato.style.width = (risultato.value.length + 2) + "ch"; // Aggiungi un po' di margine per evitare che il testo tocchi i bordi
}

const som = () => {
    let { a, b } = getValues();
    let risultato = a + b;
    document.getElementById("risultato").value = risultato;
    aggiornaLarghezzaRisultato();
}

const sot = () => {
    let { a, b } = getValues();
    let risultato = a - b;
    document.getElementById("risultato").value = risultato;
    aggiornaLarghezzaRisultato();
}

const molt = () => {
    let { a, b } = getValues();
    let risultato = a * b;
    document.getElementById("risultato").value = risultato;
    aggiornaLarghezzaRisultato();
}

const div = () => {
    let { a, b } = getValues();
    let risultato;
    if (b === 0) {
        risultato = "Errore";
    } else {
        risultato = a / b;
    }
    document.getElementById("risultato").value = risultato;
    aggiornaLarghezzaRisultato();
}

const nuovoCalcolo = () => {
    document.getElementById("valoreA").value = "";
    document.getElementById("valoreB").value = "";
    document.getElementById("risultato").value = "0";
    document.getElementById("messaggio").textContent = "";
    aggiornaLarghezzaRisultato(); // Assicura che la larghezza venga aggiornata quando si fa un nuovo calcolo
}

const validateNumber = (input) => {
    // Rimuove qualsiasi carattere che non sia un numero o un punto decimale
    input.value = input.value.replace(/[^0-9.,-]/g, '');
};
