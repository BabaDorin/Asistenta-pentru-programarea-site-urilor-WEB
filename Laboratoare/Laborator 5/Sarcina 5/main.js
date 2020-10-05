function addRow(){
    let table = document.getElementsByTagName("tbody")[0];
    let newRow = document.createElement("tr");
    for(i=0; i<4; i++){
        let newColumn = document.createElement("td");
        newColumn.textContent = "cell " + (i+1);
        newRow.appendChild(newColumn);
    }
    table.appendChild(newRow);
}