document.addEventListener('DOMContentLoaded', ()=>{
    input = document.getElementById('number');
    btCalculeaza = document.getElementById('btCalculeaza');
    sum = document.getElementById("sum");

    btCalculeaza.addEventListener('click', ()=>{
        let number = number(input.value);
        alert(input.value);
        let suma = 0;
        while(number != 0){
            suma += number % 10;
            number = parseInt(number / 10);
        }

        sum.innerHTML = suma;
    });
});