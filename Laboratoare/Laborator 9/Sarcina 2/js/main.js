document.addEventListener('DOMContentLoaded', ()=>{
    datePicker = document.getElementById("datePicker");
    varsta = document.getElementById("varsta");

    datePicker.addEventListener('change', (e) => {
        selectedDate = new Date(datePicker.value);
        now = new Date();

        // A fost aleasa o data din viitor
        if(selectedDate > now){
            varsta.innerHTML = "Data aleasa este invalida.";
            return;
        }
        
        // Cacularea varsei - Formula generala
        let _varsta = now.getFullYear() - selectedDate.getFullYear();

        // Daca ziua de nastere din acest an urmeaza a fi, atunci scadem un an din varsta
        selectedDate.setFullYear(now.getFullYear());
        if(selectedDate > now)
            _varsta--;
        
        varsta.innerHTML = `<b>${_varsta}</b> ani`;
    })
});