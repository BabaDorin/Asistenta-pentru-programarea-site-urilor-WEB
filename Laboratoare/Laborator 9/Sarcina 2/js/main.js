document.addEventListener('DOMContentLoaded', ()=>{
    datePicker = document.getElementById("datePicker");
    varsta = document.getElementById("daysLeft");

    datePicker.addEventListener('change', (e) => {
        selectedDate = new Date(datePicker.value);
        now = new Date();

        if(selectedDate > now){
            varsta.innerHTML = "Data aleasa este invalida.";
            return;
        }
        
        let _varsta = now.getFullYear() - selectedDate.getFullYear();

        selectedDate.setFullYear(now.getFullYear());
        if(selectedDate > now)
            _varsta--;
        
        varsta.innerHTML = `<b>${_varsta}</b> ani`;
    })
});