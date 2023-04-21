/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*Variabili ed esecuzione programma*/

const divisibilty = prompt('Scegli Pari o Dispari').toLowerCase();
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
/*Qui richiamiamo la funzione (getRndInteger) per generare il numero random*/
const computerNumber = getRndInteger (1, 5);
const sum = computerNumber + userNumber;

console.log('Pari o Dispari: ', divisibilty);
console.log('Numero PC: ', computerNumber);
console.log('Numero Utente: ', userNumber);
console.log('Somma: ', sum);

/*Qui richiamiamo la prima funzione (evenOrOdd per capire se è pari o dispari*/
if (divisibilty == evenOrOdd(sum)) {
    console.log('Hai vinto :)');
} else {
    console.log('Hai perso :(');
}


/* Definizione funzioni*/

/*Questa funzione (evenOrOdd) per stabilire pari o dispari*/
function evenOrOdd(result) {
    if (result % 2 == 0) {
        return 'pari';
    } 
    return 'dispari';
}

/*Questa funzione (getRndInteger) è per il numero random del computer*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


