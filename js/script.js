// ! parola palindroma
// Chiedi all'utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola:");

// Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
  const parolaInvertita = parola.split('').reverse().join('');
  return parola === parolaInvertita;
}

// Verifica se la parola inserita è palindroma e stampa il risultato
if (isPalindroma(parolaUtente)) {
  console.log("La parola inserita è palindroma.");
} else {
  console.log("La parola inserita non è palindroma.");
}

// ! pari o dispari

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
const sceltaUtente = prompt("Scegli pari o dispari:");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Funzione per generare un numero casuale da 1 a 5
function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}
  
// Genera il numero casuale per il computer
const numeroComputer = generaNumeroCasuale();
  
 // Calcola la somma dei due numeri
const somma = numeroUtente + numeroComputer;
  
 // Verifica se la somma è pari o dispari e dichiara il vincitore
if ((isPari(somma) && sceltaUtente.toLowerCase() === "pari") ||
     (!isPari(somma) && sceltaUtente.toLowerCase() === "dispari")) {
   console.log(`Hai vinto! La somma è ${somma}, ed è ${isPari(somma) ? 'pari' : 'dispari'}.`);
} else {
    console.log(`Hai perso! La somma è ${somma}, ed è ${isPari(somma) ? 'pari' : 'dispari'}.`);
}