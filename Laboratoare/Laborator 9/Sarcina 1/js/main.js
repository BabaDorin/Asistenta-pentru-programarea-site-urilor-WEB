document.addEventListener('DOMContentLoaded', ()=>{
    btDetermina = document.getElementById('btDetermina');
    input = document.getElementById('number');
    message = document.getElementById('message');

    btDetermina.addEventListener('click', ()=>{
        let nr = parseInt(input.value);
        data = (new Date()).getDate();

        if(nr % data == 0){
            message.innerHTML = "Numarul este norocos!";
            message.classList.remove("text-danger");
            message.classList.add("text-success");
        }else{
            message.innerHTML = "Numarul nu este norocos!";
            message.classList.remove("text-success");
            message.classList.add("text-danger");
        }
    });
});