function solution2(s, k) {
  let wordsArray = s.trim().split(" ");
  let availableSpace = k;
  let smsCount = 0;
  let sms = [];
  let messages = [];

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > k) return -1;
    if (i === 0) smsCount++;
    if (wordsArray[i].length <= availableSpace) {
      availableSpace = availableSpace - wordsArray[i].length - 1;
      sms.push(wordsArray[i]);
    } else {
      smsCount++;
      messages.push(sms.toString().replace(",", " "));
      sms = [];
      availableSpace = k - wordsArray[i].length - 1;
      sms.push(wordsArray[i]);
      if(i===wordsArray.length-1) messages.push(sms.toString().replace(",", " "));
    }
  }
  console.log(messages);
  return smsCount;
}

const s = "SMS messages are really short";
const k = 12;
console.log(solution2(s, k));