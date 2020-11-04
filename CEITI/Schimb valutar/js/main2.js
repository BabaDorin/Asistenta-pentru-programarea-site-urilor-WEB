var convertionRate = Object;

// modificati acest array pentru a adauga / exclude valute. 
// Daca doriti sa adaugati o valuta noua, asigurati-va ca ati indicat simbolul corect!
currencies = ["MDL", "EUR", "USD", "RON", "RUB", "UAH"];

document.addEventListener('DOMContentLoaded', function () {
    form = document.kmToMiles;
    input1 = form.value1;
    input2 = form.value2;
    dropdownFrom = form.dropdownFrom;
    dropdownTo = form.dropdownTo;
    from;
    to;

    // Popularea dropdown-urilor. Acestea vor contine valutele indicate mai sus.
    currencies.forEach(element => {
        option = document.createElement('option');
        option.value = option.innerHTML = element;
        dropdownFrom.appendChild(option);
        dropdownTo.appendChild(option.cloneNode(true));

        from = dropdownFrom.value;
        to = dropdownTo.value;
    });

    // Setarea dinamica a ratelor de conversie valutara
    UpdateConvertionRates();

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

    // ratele de conversie se vor actualiza peste 12 ore
    setInterval(() => {
        UpdateConvertionRates();
    }, 43200000);
});

function convert(from, to, value) {
    // Convertirea valorii 'value' din valuta 'from' in valuta 'to'
    if (from == to)
        return value;

    let convRate = convertionRate[`${from} ${to}`];
    if (convRate == undefined)
        convRate = 1 / convertionRate[`${to} ${from}`];

    return (value * convRate).toFixed(2);
}

function UpdateConvertionRates() {
    // pentru fiecare valuta prezenta in array-ul currencies sunt setate ratele de conversie catre toate celelalte valute.
    for (i = 0; i < currencies.length; i++) {
        jsonResponse = getJson(`http://www.floatrates.com/daily/${currencies[i]}.json`);

        for (j = i + 1; j < currencies.length; j++) {
            convertionRate[`${currencies[i]} ${currencies[j]}`] = jsonResponse[currencies[j].toLowerCase()].rate.toFixed(4);
        }
    }
}

function getJson(url) {
    // returneaza informatia furnizata de 'url' in format JSON    
    let HTTPrequest = new XMLHttpRequest();
    HTTPrequest.open("GET", url, false);
    HTTPrequest.send(null);
    return JSON.parse(HTTPrequest.responseText);
}