/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let parola = prompt('Inserisci parola:');
let carattere;
let parolaInversa = '';

let i = parola.length - 1;

while (i >= 0) {
  carattere = parola[i];
  parolaInversa += carattere;
  console.log(carattere);
  i--;
}

console.log(parolaInversa);

if (parola == parolaInversa){
  console.log('La parola è palindroma');
} else {
  console.log('La parola non è palindroma');
}