// let cups = [3, 8, 9, 1, 2, 5, 4, 6, 7];

// test data
let startingCups = [3, 2, 6, 5, 1, 9, 4, 7, 8];

let cups = [...Array(1000000).keys()];
cups.splice(0, 10, startingCups);
cups = cups.flat();

let highest5cups = cups.slice(-5);
highest5cups.reverse();

let currentCupIndex = 0;
let destinationCupIndex;

function findDestinationCup(cc, pickedUpCups) {
  let cup;
  if (cc - 1 < 2) {
    cup = highest5cups.find(c => c !== currentCup && !pickedUpCups.includes(c));
    destinationCupIndex = cups.indexOf(cup);
  } else if (!pickedUpCups.includes(cc - 1)) {
    cup = cups.find((c, i) => {
      if (c === cc - 1) {
        destinationCupIndex = i;
        return c === cc - 1;
      }
    });
  } else {
    cup = findDestinationCup(cc - 1, pickedUpCups);
  }
}

function playRound() {

  // step 1: determine current cup
  currentCup = cups[currentCupIndex];

  // step 2: take 3 cups immediately following the current cup
  let pickedUpCups = [];
  for (let i = 0; i < 3; i++) {
    currentCupIndex = currentCupIndex + 1 > cups.length - 1 ? currentCupIndex + 1 - cups.length : currentCupIndex + 1;
    let cup = cups.splice(currentCupIndex, 1);
    pickedUpCups.push(cup[0]);
  }

  // step 3: set destination cup index
  findDestinationCup(currentCup, pickedUpCups);

  // step 4: place picked up cups immediately after the destination cup
  let [a, b, c] = pickedUpCups;
  cups.splice(destinationCupIndex + 1, 0, a, b, c);
}

for (let i = 0; i < 10000000; i++) {
  if ((i + 1) % 10000 === 0) console.log("***** ROUND " + (i + 1) + " *****");
  playRound();
}


let oneIndex = cups.indexOf(1);
let a = oneIndex + 1 > cups.length - 1 ? oneIndex + 1 - cups.length : oneIndex + 1;
let b = oneIndex + 2 > cups.length - 1 ? oneIndex + 2 - cups.length : oneIndex + 2;

console.log(cups[a] * cups[b])

