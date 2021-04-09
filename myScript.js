var anni = parseInt(prompt("Quanti è la tua età?"));
var kmTot = parseInt(prompt("Quanti km vuoi percorrere?"));
var prezzo = km * 0.21;
var under18 = 0.8;
var over65 =  0.6;
if (age < 18){
    var prezzo = prezzo * under18;
} else if (age > 65){
    var prezzo = prezzo * over65;
}
