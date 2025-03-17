let secondi = 7526576358;

let ore = Math.trunc(Math.trunc(secondi / 60) / 60);

secondi = secondi - (ore * 3600);

let minuti = Math.trunc(secondi / 60);

secondi = secondi - (minuti * 60);

console.log(`${ore} ore, ${minuti} minuti, ${secondi} secondi`);

//console.log(minuti);