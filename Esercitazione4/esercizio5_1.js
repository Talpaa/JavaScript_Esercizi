const identici = (a, b) => {
    if(a == b) return true

    return false;
};


console.log(identici(2,2));

console.log(identici(2,8));

console.log(identici("ciao", "ciao"));

console.log(identici("ciao", "arrivederci"));