let cups = [3, 8, 9, 1, 2, 5, 4, 6, 7];

// test data
// let cups = [3, 2, 6, 5, 1, 9, 4, 7, 8]

let currentCup = cups[0];
let currentCupIndex = 0;

function findDestinationCup(cc) {
  let cup;
  if (cc < 1) {
    cup = cups.reduce((a, b) => Math.max(a, b));
  } else {
    cup = cups.find(c => c === cc - 1);
  }
  return cup || findDestinationCup(cc - 1);
}

function playRound() {

  // step 1: take 3 cups immediately following the current cup
  let nextCupIndex = cups.indexOf(currentCup) + 1;
  let pickedUpCups = [];

  for (let i = 0; i < 3; i++) {
    nextCupIndex = nextCupIndex > cups.length - 1 ? nextCupIndex - cups.length : nextCupIndex;
    let cup = cups.splice(nextCupIndex, 1);
    pickedUpCups.push(cup[0]);
  }
  console.log("picked up cups:", pickedUpCups);

  // step 2: determine next current cup
  let destinationCup = findDestinationCup(currentCup);
  console.log("destination cup:", destinationCup);

  // step 3: place picked up cups immediately after the destination cup
  let [a, b, c] = pickedUpCups;
  cups.splice(cups.indexOf(destinationCup) + 1, 0, a, b, c);

  // step 4: set new current cup
  let nextCurrentCupIndex = cups.indexOf(currentCup) + 1;
  if (nextCurrentCupIndex > cups.length - 1) nextCurrentCupIndex -= cups.length;
  currentCup = cups[nextCurrentCupIndex];
}

for (let i = 0; i < 100; i++) {
  console.log("");
  console.log("***** ROUND " + (i + 1) + " *****");
  playRound();
}

let res = cups.join("").split("1");

console.log(res[1] + res[0]);
