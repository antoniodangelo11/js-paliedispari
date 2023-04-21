/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*Con ciclo while*/

// let userWord = prompt('Inserisci parola:');
// let reversedWord = '';

// let i = userWord.length - 1;

// while (i >= 0) {
//   reversedWord += userWord[i];
//   i--;
// }

/*------------------------------------------------*/

/* Con ciclo for e function*/

let userWord = prompt('Inserisci parola:').toLowerCase();
let reversedWord = '';

if (isPalindrom(userWord)) {
  console.log('La parola è Palindroma');
} else {
  console.log('La parole non è Palindroma');
}

function isPalindrom(word) {
  let reversedWord = '';
  
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  if (userWord == reversedWord) {
    return true;
  } else {
    return false;
  } 
}

