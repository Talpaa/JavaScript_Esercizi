const generaLinee = () => {

    let contenitore = document.getElementById("contenitore");
    //contenitore.innerHTML = ""; // Pulisce il contenitore prima di generare nuove linee
    
    for (let i = 0; i <= 100; i += 5) {
        let linea = document.createElement("hr"); // Crea un elemento <hr>
        linea.style.width = i + "%"; // Imposta la larghezza in base al valore di i
        contenitore.appendChild(linea); // Aggiunge la linea al div contenitore
    }
}