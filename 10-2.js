let adapters = [0, 66, 7, 73, 162, 62, 165, 157, 158, 137, 125, 138, 59, 36, 40, 94, 95, 13, 35, 136, 96, 156, 155, 24, 84, 42, 171, 142, 3, 104, 149, 83, 129, 19, 122, 68, 103, 74, 118, 20, 110, 54, 127, 88, 31, 135, 26, 126, 2, 51, 91, 16, 65, 128, 119, 67, 48, 111, 29, 49, 12, 132, 17, 41, 166, 75, 146, 50, 30, 1, 164, 112, 34, 18, 72, 97, 145, 11, 117, 58, 78, 152, 90, 172, 163, 89, 107, 45, 37, 79, 159, 141, 105, 10, 115, 69, 170, 25, 100, 80, 4, 85, 169, 106, 57, 116, 23];

let sortedAdapters = adapters.sort((a, b) => a - b);
sortedAdapters.push(sortedAdapters[sortedAdapters.length - 1] + 3);

let differences = sortedAdapters.map((a, i) => sortedAdapters[i + 1] - a);
differences.pop();

let sequencesOf1 = differences.join("").split(/3{1,}/g);
let allPermutations = 1;

for (const seq of sequencesOf1) {
  let removableCount = seq.length - 1;

  if (removableCount > 0) {
    allPermutations *= calculatePermutations(removableCount) + 1;
  }
}

function calculatePermutations(r) {
  let a = r;
  for (let k = 1; k < r; k++) {
    for (let i = k; i < r; i++) {
      a += r - i;
    }
  }
  return a;
}

console.log(allPermutations);
