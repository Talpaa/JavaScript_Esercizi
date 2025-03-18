const generaAsterischi = () => {

    let contenitore = document.getElementById("contenitore");
    //contenitore.innerHTML = ""; // Pulisce il contenitore prima di generare nuove linee
    
    for (let i = 10; i <= 30; i++) {
        let riga = document.createElement("div"); // Crea un elemento <hr>
        riga.className = "riga";
        riga.textContent = "*".repeat(i);
        contenitore.appendChild(riga);
    }
}