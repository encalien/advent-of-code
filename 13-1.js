let earliestArrival = 1006605;
let busLines = [19, "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", 37, "x", "x", "x", "x", "x", 883, "x", "x", "x", "x", "x", "x", "x", 23, "x", "x", "x", "x", 13, "x", "x", "x", 17, "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", 797, "x", "x", "x", "x", "x", "x", "x", "x", "x", 41, "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", 29];

busLines = busLines.filter(b => typeof (b) === "number");

let nextDepartures = busLines.map(bl => {
  let n = Math.ceil(earliestArrival / bl) * bl;
  return {
    line: bl,
    nextDep: n,
    wait: n - earliestArrival
  }
})

let earliest = nextDepartures.sort((a, b) => a.wait - b.wait);

console.log(earliest[0].line * earliest[0].wait);
