let numeri = [1,2,3,4,5];

const somma = numeri.reduce((acc, num) => acc + num, 0);

console.log("La somma di " + numeri + " è " + somma);

console.log("La media di " + numeri + " è " + somma/numeri.length);