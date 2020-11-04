// În pagina web este declarant un bloc cu dimensiunile 300 px pe 200px. La tastarea
// tastelor de control (Sus - Galben, Jos - Verde, Stânga - Albastru, Dreapta-Roșu) să se
// schimbe culoarea de fundal.

windowInstance = document.defaultView;
var container = document.getElementById("myContainer");

windowInstance.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 40:
            changeColor("bg-success");
            break;
        case 39:
            changeColor("bg-success");
            break;
        case 38:
            changeColor("bg-info");
            break;
        case 37:
            changeColor("bg-danger");
            break;
    }
});

function changeColor(bgClass) {
    container.className = bgClass;
}
