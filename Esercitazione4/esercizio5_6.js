function getValues() {
    let a = parseFloat(document.getElementById("valoreA").value);
    let b = parseFloat(document.getElementById("valoreB").value);
    return { a, b };
}

function som() {
    let { a, b } = getValues();
    document.getElementById("risultato").value = a + b;
}

function sot() {
    let { a, b } = getValues();
    document.getElementById("risultato").value = a - b;
}

function molt() {
    let { a, b } = getValues();
    document.getElementById("risultato").value = a * b;
}

function div() {
    let { a, b } = getValues();
    if (b === 0) {
        document.getElementById("messaggio").textContent = "Errore: divisione per zero!";
        document.getElementById("risultato").value = "Errore";
    } else {
        document.getElementById("messaggio").textContent = "";
        document.getElementById("risultato").value = a / b;
    }
}

function nuovoCalcolo() {
    document.getElementById("valoreA").value = "";
    document.getElementById("valoreB").value = "";
    document.getElementById("risultato").value = "0";
    document.getElementById("messaggio").textContent = "";
}
