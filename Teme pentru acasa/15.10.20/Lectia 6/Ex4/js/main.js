colors = ["circle bg-danger", "circle bg-warning", "circle bg-success", "circle bg-warning"]; // ordinea: rosu, galben, verde, galben,  <=repeta
timing = [3000, 1000, 5000, 1000]; // 3 secunde rosu, 1 secunda galben, 3 secunde verde, 1 secunda galben.
currentColorIndex = -1;
continueWorking = false;
toggleInterval = null; // folosit pentru simularea luminii intermitente.
toggleGreen = null;

document.addEventListener("DOMContentLoaded", function () {
    lights = document.getElementsByClassName("circle");
    btStart = document.getElementById("start");
    btStop = document.getElementById("stop");
    btPauza = document.getElementById("pauza");

    btStart.addEventListener('click', (e) => {
        if (continueWorking) return;

        continueWorking = true;
        window.clearInterval(toggleInterval);
        toggleInterval = null;
        (function loop() {
            if (continueWorking) {
                switchColors();
                setTimeout(loop, timing[currentColorIndex]);
            }
        })();
    });

    btStop.addEventListener('click', (e) => {
        clearInterval(toggleInterval);
        toggleInterval = null;
        continueWorking = false;
        lights[0].classList = lights[1].classList = lights[2].classList = "circle bg-dark";
        if (currentColorIndex != -1)
            lights[currentColorIndex].classList = colors[currentColorIndex];
        else
            lights[0].classList = colors[0];
    });

    btPauza.addEventListener('click', (e) => {
        continueWorking = false;
        lights[0].classList = lights[1].classList = lights[2].classList = "circle bg-dark";
        toggleYellow();
    });

    function switchColors() {
        // resetarea contorului
        if (currentColorIndex == 3) currentColorIndex = -1;
        lights[0].classList = lights[1].classList = lights[2].classList = "circle bg-dark";
        currentColorIndex++;

        if (currentColorIndex == 3)
            lights[1].classList = "circle bg-warning";
        else
            lights[currentColorIndex].classList = colors[currentColorIndex];

        // Culoarea verde va lumina intermitent inainte de a se schimba cu galben
        if (currentColorIndex == 2)
            toggleGreenLight();
    }

    function toggleGreenLight() {
        if (toggleGreen == null)
            setTimeout(() => {
                n = 0;
                toggleGreen = setInterval(function () {
                    if (lights[2].classList == "circle bg-dark")
                        lights[2].classList = colors[2];
                    else
                        lights[2].classList = "circle bg-dark";

                    if (++n == 4) {
                        window.clearInterval(toggleGreen);
                    }
                }, 500);
            }, 2000);
    }

    function toggleYellow() {
        if (!toggleInterval)
            toggleInterval = setInterval(function () {
                if (lights[1].classList == "circle bg-dark")
                    lights[1].classList = colors[1];
                else
                    lights[1].classList = "circle bg-dark";
            }, 1000);
    }
});
