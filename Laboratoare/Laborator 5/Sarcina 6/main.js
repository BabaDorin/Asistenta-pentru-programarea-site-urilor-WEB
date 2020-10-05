let table = document.getElementById("table");
let rows = table.getElementsByTagName('tr').length;
let colums = table.getElementsByTagName('tr')[0].getElementsByTagName('td').length;

function changeValue() {
    try {
        let rowNr = parseInt(document.getElementById("rowNr").value);
        let columnNr = parseInt(document.getElementById("columnNr").value);
        let newValue = document.getElementById("newValue").value;
        if (rowNr < 0 || rowNr >= rows || columnNr < 0 || columnNr >= colums)
            throw new Error();

        let selectedRow = table.getElementsByTagName('tr')[rowNr];
        let selectedCell = selectedRow.getElementsByTagName('td')[columnNr];

        selectedCell.innerText = newValue;

    } catch {
        alert("Ati introdus date invalide.");
    }
}
