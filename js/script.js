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

