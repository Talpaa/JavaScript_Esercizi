let numeri = [0,1,2,3,4,5,6,7,8,9,10];

let pari = 0;

for (num of numeri) {

    if(num % 2 === 0){
        pari++;
    }
}

dispari = numeri.length - pari;

console.log("Ci sono " + pari + " numeri pari nella lista e " + dispari + " dispari.");