let expression = ''; // expresia obtinuta, formata din operatori si operanzi.
const calcDisplay = document.getElementsByClassName("calculator-screen z-depth-1")[0];
const calcKeys = document.getElementsByClassName("calculator-keys")[0];

document.addEventListener('DOMContentLoaded', function(){
    calcKeys.addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target;
        if(key.type == "button"){
            switch(key.value){
                case "all-clear": expression = ''; break;
                case "=": Solve(); break;
                default: expression+=key.value;
            }
            calcDisplay.value = expression;
        }
    })
})

function Solve(){
    try
    {
        let result = eval(expression);
        expression+="=" + result;
    }
    catch
    {
        expression = "Error";
    }
}