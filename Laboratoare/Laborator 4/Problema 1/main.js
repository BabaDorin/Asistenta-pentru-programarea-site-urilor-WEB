/*
Elaborați un script ce va crea un array cu n numere aleatorii. 
    Elaborați o funcție ce va returna câte numere pătrate perfecte se conțin în array. 
    Elaborați o funcție ce va returna un vector cu numerele divizibile cu 6.
    Elaborați o funcție ce va afișa array-ul standard și cel sortat.
    Elaborați o funcție ce va diviza array-ul în două, numere pare și impare.
*/

let n = parseInt(prompt("Numarul de elemente: "));

let numbers = [n];
let numerePare = [];
let numereImpare = [];

for(i = 0; i < n; i++){
    numbers[i] = Math.floor(Math.random()*100);
}

document.write("<br>" + numerePatrate() + " patrate perfecte <br>");
document.write("numere divizibile cu 6:   " + Divizibile6());
vectorStandardSortat();
divideNumerePareImpare();
document.write("<br>Numerele impare:   " + numereImpare);
document.write("<br>Numerele pare:   " + numerePare);

function numerePatrate(){
    let counter = 0;
    numbers.forEach(element => {
        if(Math.sqrt(element) % 1 == 0){
            counter++;
        }
    });

    return counter;
}

function Divizibile6(){
    let div6 = [];
    numbers.forEach(element => {
        if(element % 6 == 0)
            div6.push(element);
    });

    return div6;
}

function afisareVector(vector){
    vector.forEach(element => {
        document.write(element + " ");
    });
}

function vectorStandardSortat(){
    document.write("<br>Vectorul standard:   ")
    afisareVector(numbers);

    let aux = numbers.sort(function(a, b){return a - b});
    document.write("<br>Vectorul sortat:   ")
    afisareVector(aux);
}

function divideNumerePareImpare(){
    numbers.forEach(element => {
        if(element % 2 == 0)
            numerePare.push(element)
        else
            numereImpare.push(element);
    });
}
