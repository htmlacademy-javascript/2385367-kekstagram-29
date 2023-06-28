const getStringLength = (string, maxLength) => string.length <= maxLength;
getStringLength ('');

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
checkPalindrome('');

function getNumber(string) {
  let number = string.replace(/[^0-9]/g, '');
  for (let i = 0; i < string.length; i++) {
    number += parseInt(string, 10);
  }
  return parseInt(number, 10);
}
getNumber('');

const getTime = (workInit, workEnd, startMeeting, meetingDurations) => {
  const timeToNumber = (time) => +time.split(':')[0] + time.split(':')[1] / 60;
  return timeToNumber(workInit) <= timeToNumber(startMeeting) && timeToNumber(workEnd) - timeToNumber(startMeeting) >= meetingDurations / 60;
};
getTime('', '', '', '');
