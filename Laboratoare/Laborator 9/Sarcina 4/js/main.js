document.addEventListener('DOMContentLoaded', () => {
    specialitate = document.getElementById("specialitatea");
    auxInput = document.getElementById('auxInput');
    auxLabel = document.getElementById('auxLabel');
    formFields = document.getElementById("formFields");
    btSubmit = document.getElementById("btSubmit");
    result = document.getElementById('result');
    form = document.admitereForm;
    inputs = [form.li, form.ls, form.matematica, form.auxInput, form.media];

    // Pentru real => A 4-a disciplina = Matematica
    // Pentru real => A 4-a disciplina = Matematica
    specialitate.addEventListener('change', () => {
        if (specialitate.value == 'PAPP' || specialitate.value == 'AAW')
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
    btSubmit.addEventListener('click', () => {
        try {
            inputs.forEach(element => {
                element.style.borderColor = "black";
            });

            if (!isValid())
                return;

            md = (parseFloat(form.li.value) + parseFloat(form.ls.value) + parseFloat(form.matematica.value) +
                parseFloat(form.auxInput.value)) / 4;
            // auxInput este inputul variabil, in care se inscrie nota la matematica pentru real si istorie pentru uman.

            me = parseFloat(form.media.value);

            result.value = md * 0.6 + me * 0.4;
        } catch {
            result.value = '=(';
        }
    });

    function isValid() {
        // returns true if all of the inputs are valid
        valid = true;

        inputs.forEach(element => {
            inputVal = parseFloat(element.value);
            if (inputVal < 0 || inputVal > 10) {
                element.style.borderColor = "red";
                valid = false;
            }
        });

        return valid;
    }

    // TODO: Validarea datelor (0 < Nota <= 10)
    // TODO: Afisarea rezultatului cu 2 cifre dupa virgula
});