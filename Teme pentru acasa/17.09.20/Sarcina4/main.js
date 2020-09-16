// Scrieți o funcție care va citi un string și îl va converti în format URL. 
// Ex: ”Cele mai noi tehnologii” => “cele-mai-noi-tehnologii”. Dacă stringul va conține caractere speciale le va omite.

let str = prompt("Introduceti un sir de caractere: ");
str = str.replace(/[^a-zA-Z ]/g, "");
str = str.replace(/\s\s+/g, ' ');
str = str.replace(/\s+/g, '-').toLowerCase();

alert("In format URL: " + str);