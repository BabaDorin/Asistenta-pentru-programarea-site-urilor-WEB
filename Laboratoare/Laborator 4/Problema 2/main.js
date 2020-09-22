let x = parseInt(prompt("Pozitia calului, numarul coloanei: "));
let y = parseInt(prompt("Pozitia calului, numarul randului: "));

// Validate input
if (x < 1 || x > 8 || y < 1 || y > 8) {
    alert("Ati introdus date invalide.");
}else{
    
    // initializarea tablei de sah, fiecare celula avand 2 proprietati:
    // valoarea (0 sau 1) si un bool (disponibilCal) care indica daca calul poate ajunge in celula respectiva
    tablaSah = [];

    for (i = 0; i < 8; i++) {
        rand = [];
        for (j = 0; j < 8; j++) {
            rand.push({
                value: 0,
                disponibilCal: false
            });
        }
        tablaSah.push(rand);
    }
    
    // marcarea pozitiei calului
    tablaSah[x][y] = {
        value: 1,
        disponibilCal: false
    }
    
    // Analizarea / validarea mutarilor calului
    var deplasareX = [1, 2, 2, 1, -1, -2, -2, -1];
    var deplasareY = [-2, -1, 1, 2, 2, 1, -1, -2];

    for (i = 0; i < deplasareX.length; i++) {
        newX = x + deplasareX[i];
        newY = y + deplasareY[i];
    
        if (valid(newX, newY)) {
            tablaSah[newX][newY] = {
                value: 0,
                disponibilCal: true
            }
        }
    }

    // Afisarea tabelului in document HTML
    displayTable();
}

function valid(x, y) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8)
        return false;

    return true;
}

function displayTable() {
    document.write("<table>")
    for (i = 0; i < 8; i++) {
        document.write("<tr>")
        for (j = 0; j < 8; j++) {
            if (tablaSah[i][j].disponibilCal)
                document.write("<td class = 'square disponibil'>")
            else
                document.write("<td class = 'square'>");

            document.write(tablaSah[i][j].value);
            document.write("</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")
}
