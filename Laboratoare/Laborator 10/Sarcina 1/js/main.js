// Pe pagina web este declarant un imput și un paragrap, elaborați un script care la
// introducerea caracterelor în input să fie afișate în paragraph.

document.addEventListener('DOMContentLoaded', () => {
    userInput = document.form.userInput;
    bindedParagraph = document.querySelector("#bindedContent");

    userInput.addEventListener('input', ()=>{
        bindedParagraph.innerText = userInput.value;

        if(userInput.value == '')
            bindedParagraph.innerText = 'Type something and your text will appear right here';
    })
})