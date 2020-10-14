let warningPompareInvestitiiDisplayed = false;
let warniningFalimentDisplayed = false;
let valueIon, valueVasile;

function investitiiIon() {
    transaction(10,3);
}

function decapitalizareIon() {
    transaction(-17, -7);
}

function investitiiVasile(){
    transaction(20, 5);
}

function decapitalizareVasile(){
    transaction(-13, -6);
}

function transaction(modifyForIon, modifyForVasile){
    retrieveCapital();
    valueIon += modifyForIon;
    valueVasile += modifyForVasile;
    displayResults();
    checkForWarnings(valueIon, valueVasile);
    displayResults(false);
}

function retrieveCapital() {
    valueIon = parseInt(document.getElementById("valueIon").innerText);
    valueVasile = parseInt(document.getElementById("valueVasile").innerText);
}

function displayResults() {
    document.getElementById("capitalIon").className = "text-success";
    document.getElementById("capitalVasile").className = "text-success";

    if(valueIon < 0)
        document.getElementById("capitalIon").className = "text-danger";
    if(valueVasile < 0)
        document.getElementById("capitalVasile").className = "text-danger";

    document.getElementById("valueIon").innerText = valueIon;
    document.getElementById("valueVasile").innerText = valueVasile;
}

function checkForWarnings(valueIon, valueVasile) {
    let minVal = Math.min(valueIon, valueVasile);

    // toggle warnings
    if (minVal > 0)
        warniningFalimentDisplayed = false;
    if (minVal >= 30)
        warningPompareInvestitiiDisplayed = false;

    // check for warnings
    if (minVal < 30)
        if (minVal <= 0 && !warniningFalimentDisplayed) {
            alert("ATENTIE! Ati falimentat");
            warniningFalimentDisplayed = true;
        }
    else if (!warningPompareInvestitiiDisplayed) {
        alert("ATENTIE! Pompati investitii");
        warningPompareInvestitiiDisplayed = true;
    }
}