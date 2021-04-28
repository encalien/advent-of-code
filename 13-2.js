let busLines = [19, "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", 37, "x", "x", "x", "x", "x", 883, "x", "x", "x", "x", "x", "x", "x", 23, "x", "x", "x", "x", 13, "x", "x", "x", 17, "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", 797, "x", "x", "x", "x", "x", "x", "x", "x", "x", 41, "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", 29];

// test data
// let busLines = [1789,37,47,1889];

let onlyValid = busLines.map((bl, i) => {
  return { index: i, line: bl }
}).filter(bl => bl.line !== "x");

let combos = [];
let previous = onlyValid[0];

for (let i = 1; i < onlyValid.length; i++) {
  combos.push(findInterval(previous, onlyValid[i]));
}

combos.sort((a, b) => a.firstMatch - b.firstMatch);

function findInterval(a, b) {
  let higher = a.line > b.line ? a : b;
  let r = higher.line - higher.index;

  let matches = [];
  while (true) {
    if ((r + a.index) % a.line === 0 && (r + b.index) % b.line === 0) {
      matches.push(r);
      if (matches.length > 1) {
        return { firstMatch: matches[0], interval: matches[1] - matches[0] };
      }
    }
    r += higher.line;
    if (r > 1000000000000000000000) break;
  }
}

while (combos.length > 1) {
  combos = calc(combos);
}

function calc(combos) {
  let last = combos[combos.length - 1];
  let x = last.firstMatch;
  let nc = [];

  for (let i = 0; i < combos.length - 1; i++) {
    let combo = combos[i];
    let matches = [];
    while (true) {
      if ((x - combo.firstMatch) % combo.interval === 0) {
        matches.push(x);
        if (matches.length > 1) {
          nc.push({ firstMatch: matches[0], interval: matches[1] - matches[0] });
          break;
        }
        console.log(x);
      }
      x += last.interval;
      if (x > 1000000000000000000000) break;
    }
  }
  return nc;
}
