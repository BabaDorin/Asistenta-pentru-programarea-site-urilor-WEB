// Scrieți un script care simulează un calculator electronic 
// pentru numere întregi: se introduc două numere întregi și 
// o operație care poate fi: +, -, *, /, %, reprezentând adunarea, 
// scăderea, înmulțirea, câtul și restul. Pentru fiecare 
// operație se va utiliza o funcție separată.

let a = parseInt(prompt("Primul operand: "));
let operator = prompt("Operatorul: ");
let b = parseInt(prompt("Al doilea operand: "));

switch(operator){
    case '+':
        alert(adunare());
        break;
    case '-':
        alert(scadere());
        break;
    case '*':
        alert(inmultire());
        break;
    case '/':
        alert(impartire());
        break;
    case '%':
        alert(mod());
        break;
    default:
        alert("Ati introdus date invalide.");
        break;
}

function adunare(){
    return a + b;
}

function scadere(){
    return a - b;
}

function inmultire(){
    return a * b;
}

function impartire(){
    return a / b;
}

function mod(){
    return a % b;
}