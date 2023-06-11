function getStringLength(string, maxLength) {
  return string.length <= maxLength;
}
getStringLength ('I am happy', 10);

function checkPalindrome(string) {

  const newString = string.toUpperCase().replaceAll(' ', '');

  let emptyString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    emptyString += newString.at(i);
  }
  return (emptyString === newString) ? 'It is a palindrome' : 'It is not a palindrome';
}
checkPalindrome('Murder FOR a jar OF red rum');

function getNumber(string) {

  let number = string.replace(/[^0-9]/g, '');
  for (let i = 0; i < string.length; i++) {
    number += parseInt(string, 10);
  }
  return parseInt(number, 10);
}

getNumber('Raw meat should be stored between -0,5°C and +2.6°C');
