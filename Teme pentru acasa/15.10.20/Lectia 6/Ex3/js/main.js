document.addEventListener("DOMContentLoaded", function () {
    images = document.getElementsByClassName("img-thumbnail");
    btNext = document.getElementById("buttonNext");
    btPrev = document.getElementById("buttonPrev");
    mainImage = document.getElementById("mainImage");
    imagePath = "";
    lastIndex = 0;

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener('click', (e) => {
            mainImage.src = e.target.src;
            lastIndex = mainImage.src.split("/").pop().split(".")[0];
            lastIndex--;
        });
    }

    btNext.addEventListener('click', (e) => {
        lastIndex++;
        if(lastIndex >= images.length){
            lastIndex = 0;
        }
        mainImage.src = images[lastIndex].src;
    })

    btPrev.addEventListener('click', (e) => {
        lastIndex--;
        if(lastIndex < 0){
            lastIndex = images.length - 1;
        }
        mainImage.src = images[lastIndex].src;
    })
});

