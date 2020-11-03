document.addEventListener('DOMContentLoaded', ()=>{
    form = document.form;
    radio = form.item;
    selectedItem = "Trapez";
    parInputs = document.querySelector('.parameters').getElementsByTagName('input');
    parLabels = document.querySelector('.parameters').getElementsByTagName('label');
    btCalculeaza = form.btCalculeaza;
    result1 = document.querySelector("#result1");
    result2 = document.querySelector("#result2");

    radio.forEach(element => {
        element.addEventListener('change', (e)=>{
            selectedItem = e.target.value;
            updateInterface();
        })
    });

    btCalculeaza.addEventListener('click', ()=>{
        if(selectedItem == "Cub"){
            latura = form.input1.value;
            volum = Math.pow(latura, 3);
            aria = latura * latura * 6;
            result1.innerHTML = `Volumul cubului: <span class="text-danger">${volum} u.c</span>`;
            result2.innerHTML = `Aria cubului: <span class="text-danger">${aria} u.p</span>`;
        }else{
            bm = form.input1.value;
            bM = form.input2.value;
            h = form.input3.value;
            aria = (bm + bM)*h/2;
            result1.innerHTML = `Aria trapezului: <span class="text-danger">${aria} u.p</span>`;
            result2.innerHTML = '';
        }
    });

    // pentru cub: Ramane doar input 1, si se modifica label-ul.
    // pentru trapez: Toate 3 inputuri
    function updateInterface(){
        if(selectedItem == "Cub"){
            parLabels[0].innerText = 'Indicati latura cubului:';
            
            parLabels[1].setAttribute('hidden', true);
            parInputs[1].setAttribute('hidden', true);
            parLabels[2].setAttribute('hidden', true);
            parInputs[2].setAttribute('hidden', true);
        }else{
            parLabels[0].innerText = 'Indicati baza mica a trapezului';

            parLabels[1].removeAttribute('hidden');
            parInputs[1].removeAttribute('hidden');
            parLabels[2].removeAttribute('hidden');
            parInputs[2].removeAttribute('hidden');
        }
    }
});