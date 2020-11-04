document.addEventListener('DOMContentLoaded', ()=>{
    form = document.form;
    speedInput = form.viteza;
    locationInput = form.locatie;
    btDetermina = form.btDetermina;
    media = document.getElementById("media");
    punishment = document.getElementById("punishment");

    btDetermina.addEventListener('click', ()=>{
        viteza = parseFloat(speedInput.value);
        if(viteza < 0)
            return;
        limita =  vitezaMaximaAdmisibila(locationInput.value);
        kmPesteLimita = viteza - limita;

        pedeapsa = determinaPedeapsa(kmPesteLimita).split('|');
        // pedeapsa[0] = Pedeapsa propriu zisa (amenda, suspendarea permisului etc.)
        // pedeapsa[1] = numele fisierului media ce va fi afisat
        
        if(pedeapsa[1] == "nice.gif"){
            document.body.classList = "bg-info";
            punishment.classList = "text-info";
        }
        else{
            punishment.classList = "text-danger";
            document.body.classList = "bg-danger";
        }
        
        if(kmPesteLimita < 0) kmPesteLimita = 0;
        punishment.innerHTML = `Limita de viteza: ${limita} km/h<br>Ati depasit limita cu ${kmPesteLimita} km/h<br><b>${pedeapsa[0]}</b>`;
        media.src = "media/" + pedeapsa[1];
    });

    function vitezaMaximaAdmisibila(location){
        switch(location){
            case 'localitate': return 70;
            case 'inAfaraLocalitatii': return 90;
            case 'autostrada': return 120;
        }
    }

    function determinaPedeapsa(kmPesteLimita){
        if(kmPesteLimita < 1) return "Tot normal, bro|nice.gif";
        if(kmPesteLimita < 6) return "Amenda: 600 kr|notgud.gif";
        if(kmPesteLimita < 11) return "Amenda: 1600 kr|notgud.gif";
        if(kmPesteLimita < 16) return "Amenda: 2600 kr|notgud.gif";
        if(kmPesteLimita < 21) return "Amenda: 3600 kr|notgud.gif";
        if(kmPesteLimita < 26) return "Amenda: 4900 kr|notgud.gif";
        if(kmPesteLimita < 31) return "Amenda: 6500 kr|notgud.gif";
        if(kmPesteLimita < 41) return "Amenda: 7800 kr|notgud.gif";
        if(kmPesteLimita < 51) return "Suspendarea permisului + Amenda: 10000 kr|byelicense.gif";
        if(kmPesteLimita >= 51) return "Inchisoare + Amenda: 10000 kr|fbiopenup.gif";
    }
})