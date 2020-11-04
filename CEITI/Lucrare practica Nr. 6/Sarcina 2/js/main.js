// Realizați un script ce va calcula câte zile, ore, minute și secunde sunt până la ziua voastră de
// naștere.

document.addEventListener('DOMContentLoaded', ()=>{
    bthDatePicker = document.getElementById("bthDatePicker");
    countdown = document.getElementById("countdown");
    zodia = document.getElementById("zodia");
    simbolulAnului = document.getElementById("simbolulAnului");
    countDownInterval = null;

    bthDatePicker.addEventListener('change', ()=>{
        // Dupa ce a fost aleasa data de nastere sunt afisate zodia si simbolul anului
        // respectiv. Dupa aceasta este creat un interval ce se ocupa de simularea contorului.

        // Dar mai intai stopam numaratoarea precedenta (daca aceasta exista).
        if(countDownInterval != null)
            clearInterval(countDownInterval);
        
        selectedDate = new Date(bthDatePicker.value);
        now = new Date();

        zodia.innerHTML = `Zodia: <b>${determinaZodia(selectedDate)}</b>`;
        simbolulAnului.innerHTML = `Simbolul: <b>${determinaSimbolul(selectedDate)}<b>`;
        
        selectedDate.setFullYear(now.getFullYear());
        if(selectedDate < now)
            selectedDate.setFullYear(now.getFullYear() + 1);
        
        // contorul propriu zis
        updateCountdown();
        countDownInterval = setInterval(() => {
            updateCountdown();
        }, 1000);
    });

    function updateCountdown(){
        difference = selectedDate - new Date();

        seconds = Math.floor(difference / 1000);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        days = Math.floor(hours / 24);
        hours%=24;
        minutes%=60;
        seconds%=60;

        countdown.innerHTML = `<b>${days}</b> zile, <b>${hours}</b> ore, <b>${minutes}</b> minute, <b>${seconds}</b> secunde`;
    }
})

function determinaZodia(date){
    luna = date.getMonth() +1;
    data = date.getDate();

    if(data >= 21 && luna == 3 || data <=20 && luna == 4) return "Berbec";
    if(data >= 21 && luna == 4 || data <=21 && luna == 5) return "Taur";
    if(data >= 22 && luna == 5 || data <=21 && luna == 6) return "Gemeni";
    if(data >= 22 && luna == 6 || data <=21 && luna == 7) return "Rac";
    if(data >= 22 && luna == 7 || data <=22 && luna == 8) return "Leu";
    if(data >= 23 && luna == 8 || data <=22 && luna == 9) return "Fecioara";
    if(data >= 23 && luna == 9 || data <=22 && luna == 10) return "Balanta";
    if(data >= 23 && luna == 10 || data <=21 && luna == 11) return "Scorpion";
    if(data >= 22 && luna == 11 || data <=21 && luna == 12) return "Sagetator";
    if(data >= 22 && luna == 12 || data <=19 && luna == 1) return "Capricorn";
    if(data >= 22 && luna == 1 || data <=18 && luna == 2) return "Varsator";
    if(data >= 19 && luna == 2 || data <=20 && luna == 3) return "Pesti";
}

function determinaSimbolul(date){
    anul = date.getFullYear();
    
    if(anul % 12 == 0) return "Maimuta";
    if(anul % 12 == 1) return "Cocos";
    if(anul % 12 == 2) return "Caine";
    if(anul % 12 == 3) return "Porc";
    if(anul % 12 == 4) return "Soarece";
    if(anul % 12 == 5) return "Bou";
    if(anul % 12 == 6) return "Tigru";
    if(anul % 12 == 7) return "Soarece";
    if(anul % 12 == 8) return "Dragon";
    if(anul % 12 == 9) return "Sarpe";
    if(anul % 12 == 10) return "Cal";
    if(anul % 12 == 11) return "Capra";
}