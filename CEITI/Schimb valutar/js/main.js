var convertionRate = Object;
convertionRate["MDL EUR"] = 0.05;
convertionRate["MDL USD"] = 0.06;
convertionRate["MDL RON"] = 0.24;
convertionRate["MDL RUB"] = 4.66;
convertionRate["EUR USD"] = 1.17;
convertionRate["EUR RON"] = 4.88;
convertionRate["EUR RUB"] = 93.00;
convertionRate["USD RON"] = 4.17;
convertionRate["USD RUB"] = 79.47;
convertionRate["RON RUB"] = 19.08;

// Indicati aici optiunile pentru obiectele de tip select
currencies = ["MDL", "EUR", "USD", "RON", "RUB"];


document.addEventListener('DOMContentLoaded', function () {
    form = document.kmToMiles;
    input1 = form.value1;
    input2 = form.value2;
    dropdownFrom = form.dropdownFrom;
    dropdownTo = form.dropdownTo;
    from = dropdownFrom.value;
    to = dropdownTo.value;

    // Popularea dropdown-urilor. Acestea vor contine valutele indicate mai sus.
    currencies.forEach(element => {
        option = document.createElement('option');
        option.value = option.innerHTML = element;
        dropdownFrom.appendChild(option);
        dropdownTo.appendChild(option.cloneNode(true));

        from = dropdownFrom.value;
        to = dropdownTo.value;
    });

    dropdownFrom.addEventListener('change', () => {
        from = dropdownFrom.value;
        input2.value = convert(from, to, input1.value);
    });

    dropdownTo.addEventListener('change', () => {
        to = dropdownTo.value;
        input2.value = convert(from, to, input1.value);
    })

    input1.addEventListener('input', () => {
        input2.value = convert(from, to, input1.value);
    });
    input2.addEventListener('input', () => {
        input1.value = convert(to, from, input2.value);
    });
});

function convert(from, to, value) {
    if (from == to)
        return value;

    let convRate = convertionRate[`${from} ${to}`];
    if (convRate == undefined)
        convRate = 1 / convertionRate[`${to} ${from}`];

    return (value * convRate).toFixed(2);
}