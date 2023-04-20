/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const oddOrEven = prompt('Scegli Pari o Dispari');
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
const computerNumber = getRndInteger (1, 5);
let sum = (computerNumber + userNumber);

console.log('Numero PC: ', computerNumber);
console.log('Numero Utente: ', userNumber);

function isEven(result) {
    if (result % 2 == 0) {
        return true;
    } else if (result % 2 == 1) {
        return false;
    }
}

console.log('Somma: ', sum);


if (isEven(sum) == true && oddOrEven == 'Pari' || isEven(sum) == false && oddOrEven == ('Dispari')) {
    console.log('Hai vinto');
    alert('Hai vinto');
} else {
    console.log('Hai perso');
    alert('Hai perso');
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
