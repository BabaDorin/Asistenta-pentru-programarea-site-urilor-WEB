document.addEventListener('DOMContentLoaded', () => {
    thumbnails = document.querySelectorAll(".img-thumbnail");
    imgPreview = document.querySelector("#imgPreview");
    actualImage = imgPreview.querySelector("img");
    btClose = document.querySelector("#btClose");

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', ()=>{
            actualImage.src = thumbnails[i].src;
            imgPreview.parentNode.removeAttribute('hidden');
        });
    }

    btClose.addEventListener('click', ()=>{
        btClose.parentNode.setAttribute('hidden', true);
    });
})