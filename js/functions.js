const getStringLength = (string, maxLength) => string.length <= maxLength;
getStringLength ('I am happy', 10);

const checkPalindrome = (string) => {
  let check = true;
  string = string.toUpperCase().replaceAll(' ', '');
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      check = false;
      break;
    }
  }
  return check;
};
checkPalindrome('Murder fOR a jar oF red rum');

function getNumber(string) {
  let number = string.replace(/[^0-9]/g, '');
  for (let i = 0; i < string.length; i++) {
    number += parseInt(string, 10);
  }
  return parseInt(number, 10);
}
getNumber('Raw meat should be stored between -0,5°C and +2.6°C');

const getTime = (workInit, workEnd, startMeeting, meetingDurations) => {
  const timeToNumber = (time) => +time.split(':')[0] + time.split(':')[1] / 60;
  return timeToNumber(workInit) <= timeToNumber(startMeeting) && timeToNumber(workEnd) - timeToNumber(startMeeting) >= meetingDurations / 60;
};
// eslint-disable-next-line no-console
console.log(getTime('8:0', '10:0', '8:0', 120));// true
