document.addEventListener('DOMContentLoaded', () => {
    specialitate = document.getElementById("specialitatea");
    auxInput = document.getElementById('auxInput');
    auxLabel = document.getElementById('auxLabel');
    formFields = document.getElementById("formFields");
    btSubmit = document.getElementById("btSubmit");
    result = document.getElementById('result');
    form = document.admitereForm;
    real = true;

    // Cand se schimba selectia din combobox, se verifica daca specialitatea nou indicata este
    // de tip real sau uman. In depdendenta de acest lucru, valoarea label-ului utimei specialitati
    // se modifica (real => Matematica, uman => Istorie). Deasemenea, initial campurile sunt ascuse. La efectuarea
    // unei selectii, campurile devin visibile.
    specialitate.addEventListener('change', () => {
        if(specialitate.value == 'PAPP' || specialitate.value == 'AAW')
            real = true;

        if (specialitate.value == 'IP' || specialitate.value == 'ETE')
            real = false;
        
        if (real) {
            auxLabel.innerHTML = "MATEMATICA";
            formFields.removeAttribute('hidden');
        } else {
            auxLabel.innerHTML = "ISTORIA";
            formFields.removeAttribute('hidden');
        }
    });

    // Calculele necesare pentru a determina media de concurs.
    btSubmit.addEventListener('click', ()=>{
        try{
            md = (parseFloat(form.li.value) + parseFloat(form.ls.value) + parseFloat(form.matematica.value) +
            parseFloat(form.auxInput.value))/4;
            // auxInput este inputul variabil, in care se inscrie nota la matematica pentru real si istorie pentru uman.

            me = parseFloat(form.media.value);

            result.value = md*0.6 + me * 0.4;
        } catch {
            result.value = '=(';
        }
    });

    // TODO: Validarea datelor (0 < Nota <= 10)
    // TODO: Afisarea rezultatului cu 2 cifre dupa virgula
});