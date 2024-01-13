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