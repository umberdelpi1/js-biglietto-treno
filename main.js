// Chiedere i KM che l'utente vuole percorrere
var kmDaPercorrere = prompt("Quanti Km desideri percorrere?")

// Età passeggero ( utente)
var etaPasseggero = prompt("Inserisci la tua età")

// Il prezzo del biglietto è di ( 0,21€ al KM)
var costoBigliettoSenzaSconti = 0.21 * kmDaPercorrere;

// Biglieto con sconto

// 20% di sconto (Minorenni)
var bigliettoScontoMinorenni = ((costoBigliettoSenzaSconti * 100) / 120);


// 40% di sconto (Over 65)
var bigliettoScontiAnziani = (costoBigliettoSenzaSconti * 100) / 140;



if (etaPasseggero < 18) {
costoBigliettoSenzaSconti = bigliettoScontoMinorenni
} else if (etaPasseggero > 65) {
costoBigliettoSenzaSconti = bigliettoScontiAnziani
}


// Calcolo prezzo totale del viaggio
console.log("Km che utente percorre: " + kmDaPercorrere);
console.log("Età passeggero: " + etaPasseggero);
console.log("Costo biglietto senza sconti €: " + costoBigliettoSenzaSconti);
// console.log("Costo biglietto 20%: " + bigliettoScontoMinorenni);
// console.log("Costo biglietto 40%: " + bigliettoScontiAnziani);

// Out-put
if (etaPasseggero < 18){
  document.getElementById("biglietto").innerHTML= "Biglietto scontato (Under18) del 20% è : €" + bigliettoScontoMinorenni;
}

else if (etaPasseggero > 65) {
  document.getElementById("biglietto").innerHTML= "Biglietto scontato (Over65) del 40% è  : €" + bigliettoScontiAnziani;
}
else {document.getElementById("biglietto").innerHTML= "Costo biglietto finale è : €" + costoBigliettoSenzaSconti;}
