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

// Out-put
if (etaPasseggero < 18){
  document.getElementById("biglietto").innerHTML= "Il costo finale del tuo biglietto scontato (Under18) del 20% è : " + costoBigliettoSenzaSconti;
}

else if (etaPasseggero > 65) {
  document.getElementById("biglietto").innerHTML= "Il costo finale del tuo biglietto scontato (Over65) del 40% è : " + costoBigliettoSenzaSconti;
}
else {document.getElementById("biglietto").innerHTML= "Costo biglietto finale è :( by Made in Sud) " + costoBigliettoSenzaSconti;}
