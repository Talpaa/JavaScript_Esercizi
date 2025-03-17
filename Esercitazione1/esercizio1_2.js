const invio = (id) =>{return document.getElementById(id);};

let miotag;
let numero = 100;

console.log("Primo esercizio JavaScript")
invio("descrizione").innerHTML = `<h1>Primo esercizio JavaScript</h1> `;

console.log("Valore iniziale: " + numero);
invio("valIni").innerHTML= `<h2>Valore iniziale: ${numero}</h2> `;

numero = 70;

console.log("Valore finale: " + numero);
invio("valFin").innerHTML = `<h2>Valore finale: ${numero}</h2> `;