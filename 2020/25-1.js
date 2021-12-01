let cardKey = 1327981;
let doorKey = 2822615;
let subjectNumber = 7;
let divider = 20201227;
let n = 1;
let loopCount;

function transformSubjectNumber() {
  //     Set the value to itself multiplied by the subject number.
  n *= subjectNumber;
  //     Set the value to the remainder after dividing the value by 20201227.
  n %= divider;
}


for (let i = 0; i < 10000000000; i++) {
  transformSubjectNumber();
  if (n === cardKey) {
    loopCount = i + 1;
    subjectNumber = doorKey;
    break;
  }
  if (n === doorKey) {
    loopCount = i + 1;
    subjectNumber = cardKey;
    break;
  }
}

n = 1;
for (let i = 0; i < loopCount; i++) {
  transformSubjectNumber();
}

console.log(n);
