let startingArea = ["..#..##.", "#.....##", "##.#.#.#", "..#...#.", ".###....", "######..", ".###..#.", "..#..##."];

// test data
// let startingArea = [".#.", "..#", "###"];

let cubes = startingArea.map((row, x) => row.split("").map((char, y) => {
  return { coordinates: [x, y, 0], active: char === "#", nextActive: char === "#" }
})).flat();

let prevLength = 0;

// If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. 
// Otherwise, the cube becomes inactive.

// If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. 
// Otherwise, the cube remains inactive.

function findNeighbours(cube) {
  let neighborsPos = [];
  for (let x = cube.coordinates[0] - 1; x <= cube.coordinates[0] + 1; x++) {
    for (let y = cube.coordinates[1] - 1; y <= cube.coordinates[1] + 1; y++) {
      for (let z = cube.coordinates[2] - 1; z <= cube.coordinates[2] + 1; z++) {
        let nextPos = [x, y, z];
        if (nextPos.join() == cube.coordinates.join()) continue;
        neighborsPos.push(nextPos);
      }
    }
  }
  return neighborsPos;
}

function setActiveState(cube) {
  let neighborsPos = findNeighbours(cube).map(p => p.join());
  let activeNeighbors = cubes.filter(c => c.active && neighborsPos.includes(c.coordinates.join()));

  if (cube.active && (activeNeighbors.length < 2 || activeNeighbors.length > 3)) {
    cube.nextActive = false;
  }
  if (!cube.active && activeNeighbors.length === 3) {
    cube.nextActive = true;
  }
  return cube;
}

function playRound(prevLength) {
  // add surrounding cubes
  let currentLength = cubes.length;
  for (let i = prevLength; i < currentLength; i++) {
    if (cubes[i].active) {
      findNeighbours(cubes[i]).forEach(pos => {
        if (!cubes.find(c => c.coordinates.join() == pos.join())) {
          cubes.push({ coordinates: pos, active: false, nextActive: false });
        }
      })
    }
  }
  prevLength = currentLength;

  // setActiveState
  for (let i = 0; i < cubes.length; i++) {
    cubes[i] = setActiveState(cubes[i]);
  }

  // process round changes
  for (let i = 0; i < cubes.length; i++) {
    cubes[i].active = cubes[i].nextActive;
  }
}

for (let i = 0; i < 6; i++) {
  playRound(prevLength);
}

console.log(cubes.filter(c => c.active).length);
