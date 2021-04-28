let player1deck = [1, 43, 24, 34, 13, 7, 10, 36, 14, 12, 47, 32, 11, 3, 9, 25, 37, 21, 2, 45, 26, 8, 23, 6, 49];
let player2deck = [44, 5, 46, 18, 39, 50, 4, 41, 17, 28, 30, 42, 33, 38, 35, 22, 16, 27, 40, 48, 19, 29, 15, 31, 20];

let counter = 1;
while (player1deck.length && player2deck.length) {
  let roundCards = [player1deck.splice(0, 1), player2deck.splice(0, 1)].flat();
  let sortedRoundCards = JSON.parse(JSON.stringify(roundCards));
  sortedRoundCards.sort((a, b) => b - a);
  if (roundCards.join() === sortedRoundCards.join()) {
    sortedRoundCards.forEach(c => player1deck.push(c));
  } else {
    sortedRoundCards.forEach(c => player2deck.push(c));
  }
  console.log("player 1 played", roundCards[0]);
  console.log("player 2 played", roundCards[1]);
  console.log("winner is player", roundCards.join() === sortedRoundCards.join() ? 1 : 2);
  console.log("player1deck", player1deck);
  console.log("player2deck", player2deck);
  console.log("**** end of round " + counter + " ****");
  counter++;
}

if (!player1deck.length) console.log(player2deck.reverse().reduce((a, b, i) => a + (b * (i + 1))))
if (!player2deck.length) console.log(player1deck.reverse().reduce((a, b, i) => a + (b * (i + 1))))
