// Elaborați o funcție care testează dacă un număr este prim.

let number = parseInt(prompt("Introduceti un numar: "));

prim(number) ? alert("Numarul introdu este prim.") : alert("Numarul introdus nu este prim");

function prim(){
    for(i = 2; i<=Math.sqrt(number); i++){
        if(number % i == 0) return false;
    }
    return true;
}