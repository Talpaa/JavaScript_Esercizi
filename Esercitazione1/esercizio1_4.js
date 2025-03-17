const isNum = (x) =>{

    if(typeof x === 'number'){
        return true;
    }else{
        return false;
    }
}

let numstring = "50";

console.log(numstring + " " + typeof numstring);
document.getElementById("testo1").innerHTML = numstring + " " + typeof numstring;

let ris = isNum(numstring);

console.log(ris);
document.getElementById("testo2").innerHTML = "esito --> " + ris;

numstring = 50;

console.log(numstring + " " + typeof numstring);
document.getElementById("testo3").innerHTML = numstring + " " + typeof numstring;

ris = isNum(numstring);

console.log(ris);
document.getElementById("testo4").innerHTML = "esito --> " + ris;