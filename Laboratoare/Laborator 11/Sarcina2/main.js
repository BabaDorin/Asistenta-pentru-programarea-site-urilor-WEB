document.addEventListener('DOMContentLoaded', ()=>{
    let container = document.querySelector('.container');
    let top = 0, left = 0;
    
    window.addEventListener('keydown', (e)=>{
        switch(e.key){
            case "ArrowUp": container.style.top = --top + "px"; break;
            case "ArrowRight": container.style.left = ++left + "px"; break;
            case "ArrowLeft": container.style.left = --left + "px"; break;
            case "ArrowDown": container.style.top = ++top + "px"; break;
        }
    })
});