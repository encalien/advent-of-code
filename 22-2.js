let player1 = [1, 43, 24, 34, 13, 7, 10, 36, 14, 12, 47, 32, 11, 3, 9, 25, 37, 21, 2, 45, 26, 8, 23, 6, 49];
let player2 = [44, 5, 46, 18, 39, 50, 4, 41, 17, 28, 30, 42, 33, 38, 35, 22, 16, 27, 40, 48, 19, 29, 15, 31, 20];

// test data
// let player1 = [9,2,6,3,1];
// let player2 = [5,8,4,7,10];

function playGame(player1deck, player2deck) {
  let winner;
  let previousHands = [];

  while (player1deck.length && player2deck.length) {
    let status = player1deck.join() + player2deck.join();
    if (previousHands.includes(status)) {
      winner = 1;
      return winner;
    }
    previousHands.push(status);

    let roundCards = [player1deck.splice(0, 1), player2deck.splice(0, 1)].flat();
    if (player1deck.length >= roundCards[0] && player2deck.length >= roundCards[1]) {
      winner = playGame(player1deck.slice(0, roundCards[0]), player2deck.slice(0, roundCards[1]));
      let sortedRoundCards = JSON.parse(JSON.stringify(roundCards));
      if (winner === 2) sortedRoundCards.reverse();
      sortedRoundCards.forEach(c => winner === 1 ? player1deck.push(c) : player2deck.push(c));
    } else {
      let sortedRoundCards = JSON.parse(JSON.stringify(roundCards));
      sortedRoundCards.sort((a, b) => b - a);
      winner = roundCards.join() === sortedRoundCards.join() ? 1 : 2;
      sortedRoundCards.forEach(c => winner === 1 ? player1deck.push(c) : player2deck.push(c));
    }
  }
  return winner;
}

let won = playGame(player1, player2);

if (won === 2) console.log(player2.reverse().reduce((a, b, i) => a + (b * (i + 1))));
if (won === 1) console.log(player1.reverse().reduce((a, b, i) => a + (b * (i + 1))));
