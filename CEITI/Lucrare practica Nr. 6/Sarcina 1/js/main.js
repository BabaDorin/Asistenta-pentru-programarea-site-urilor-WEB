document.addEventListener('DOMContentLoaded', function () {
    form = document.kmToMiles;
    inputKm = form.kilometers;
    inputMi = form.miles;

    inputKm.addEventListener('input', kmToMiles);
    inputMi.addEventListener('input', milesToKm);

    function kmToMiles(){
        inputMi.value = (parseFloat(inputKm.value) / 1.609).toFixed(3);
    }
    function milesToKm(){
        inputKm.value = (parseFloat(inputMi.value) * 1.609).toFixed(3);
    }
});