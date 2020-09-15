// Elaborați un script JS care va crea n blocuri ce vor conține numere aleatorii (random). 
// Div-urile vor fi în formă de cercuri cu un fundal de culoare roșie și textul alb 
// (utilizați Bootstrap), lungimea 100px, lățimea 100px cu aliniate în rând. Dacă numărul 
// din interiorul div-ului este par atunci culoarea de fundal va fi verde și textul alb. Succes!  

let n = parseInt(prompt("Numarul de blocuri: "));

document.write("<div class='container'>");
document.write("<div class='row'>");

for(i = 0; i < n; i++){
    createBlock(Math.floor(Math.random() * 100));
}

document.write("</div>")
document.write("</div>")

function createBlock(number){

    let paritate = "par";
    if(number % 2 == 1)
        paritate = "impar";

    document.write("<div class='col'>");
    document.write("<div class='circle " + paritate + "'>");
    document.write("<p><b>" + number + "</b></p>")
    document.write("</div>");
    document.write("</div>");
}

