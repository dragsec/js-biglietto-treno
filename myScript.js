var anni = parseInt(prompt("Quanti è la tua età?"));
var kmTot = parseInt(prompt("Quanti km vuoi percorrere?"));
var kmPrezzo = 0.21;
var prezzo = kmTot * kmPrezzo;
var under18 = 0.8;
var over65 =  0.6;
if (anni < 18){
    var prezzo = prezzo * under18;
} else if (anni > 65){
    var prezzo = prezzo * over65;

}
document.getElementById("biglietto").innerHTML = prezzo.toFixed(2);