let list = [19, 20, 14, 0, 9, 1];
let mappedList = {};
list.forEach((n, i) => {
  mappedList[n] = [i];
});
let ll = list.length;

for (let i = ll; i < 30000000; i++) {
  let lastNum = list[i - 1];
  let numberPair = mappedList[lastNum];
  let nextNum = numberPair[1] > -1 ? numberPair[0] - numberPair[1] : 0;

  let nextNumPair = mappedList[nextNum];
  mappedList[nextNum] = nextNumPair ? [i, nextNumPair[0]] : [i];

  list.push(nextNum);
  if (i % 100000 == 0) {
    console.log(i, ":", nextNum);
  }
}

console.log(list);
