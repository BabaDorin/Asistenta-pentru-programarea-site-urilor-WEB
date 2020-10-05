let rowNr = parseInt(prompt("Numarul de linii: "));
let columnNr = parseInt(prompt("Numarul de coloane"));

if(rowNr > 0 && columnNr > 0){
    let table = document.createElement('table');
    table.border= "1";
    let tbody = document.createElement('tbody');
    for(i = 0; i < rowNr; i++){
        let row = document.createElement('tr');
        for(j = 0; j < columnNr; j++){
            let cell = document.createElement('td');
            cell.innerText = "Row " + i + "  Colum " + j;
            row.appendChild(cell);
        }
        console.log(row);

        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    console.log(table);
    document.getElementById('tableContainer').appendChild(table);
}