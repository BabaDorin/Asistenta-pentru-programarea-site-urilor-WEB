document.addEventListener("DOMContentLoaded", function () {
    lastClass = "bg-light";
    buttons = document.getElementsByTagName("button");
    block = document.getElementById("block");

    for(i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", (e) => {
            block.classList.remove(lastClass);
            lastClass = "bg-" + e.target.className.split(' ')[1].split('-')[1];
            block.classList.add(lastClass);
        })
    }
});