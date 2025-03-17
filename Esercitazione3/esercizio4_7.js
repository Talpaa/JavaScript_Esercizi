let numeri = [7,2,3,4,5,6,1];

let max = numeri[0];

for(num of numeri){

    if(max < num){
        max = num;
    }
}

console.log("Il massimo tra " + numeri + " è " + max);