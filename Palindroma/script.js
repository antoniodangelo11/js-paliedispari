/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/
// program to check if the string is palindrome or not

function checkPalindrome(string) {

  const word = string.length;

  for (let i = 0; i < word / 2; i++) {
    
    if (string[i] !== string[word - 1 - i]) {
      return 'La parola non è Palindroma';
    }
  }
  return 'La parola è Palindroma';
}

const string = prompt('La parola inserità è: ');

const finalString = checkPalindrome(string);

console.log(finalString);