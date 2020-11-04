// Modificați condițiile anterioare așa ca valorile introduse în input să fie salvate într-o listă
// ordonată mai sus la tastarea tastei Enter.

document.addEventListener('DOMContentLoaded', () => {
    input = document.form.input;
    ol = document.querySelector('#orderedList');

    input.addEventListener('keydown', (e) => {
        if(input.value == '' || e.keyCode != 13)
            return;

        li = document.createElement('li');
        li.innerText = input.value;
        ol.appendChild(li);
        input.value = '';
    })
});