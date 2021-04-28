const map = ["...#...#....#....##...###....#.", "#.#...#...#....#.........#..#..", ".#....##..#.#..##..##..........", ".....#.#.............#..#......", ".......#...#.##.#......#..#.#..", "#.#....#......##........##.....", ".....##.#....#..#...#...##...#.", "...#...#..#.......#..#...##...#", "..........#...........##.......", "..#..#..#...................#..", "#..#....#.....##.#.#..........#", ".#.##.......###.....#.#...#....", ".#..##....##....#.......#...###", "#.#..##...#.#..#...............", ".........#....#.......##.#.#...", "...###...##....##...#..##.#..#.", "....#.........#..#...#.......#.", "....................#..#.#.#...", "..#....#..........#...........#", ".#.....#..#.....##........##..#", "#..##..#...##............#..##.", ".#..##....#..........#..#.##.#.", "..#####..#.#............##.....", "...###.#....##..#.#....#.....#.", ".#.......##....#...#.#.....##..", "...#....#...##.#...#..#........", ".####.....#....#.#.#...#.......", "...#....#.....#.......#........", "#..#.#.......#...#............#", "...#.....###.##....#.#.###.#...", ".#.........#.......#.#....##...", "#.#..#...#.#...##......#..#....", ".....#...#..#.#...#..###..#....", "......#.........#...###........", ".....#..##...#..........#.....#", "..#..#.#.##.#...#....#....##..#", "##....#.##...#.##.#..##....#...", ".....#.#.#.#..#....##.#...#.#..", ".....##.......#........#.......", "...#.#.....#...#...##.#......##", "........#..#.#...#.#.....#.#..#", "#..##...#.#...##..##...#.#...##", ".##.#.#..#...#.....#.#.##.#...#", ".#.####.........##.........#..#", ".##..............#....#...#...#", "......#...#..#...#..#..###.#...", ".......##...#.#.#..##..#......#", ".....#....#..##..#.........#...", ".....#..#.#.#........#.#.####..", "#..#.......###....##...........", "#..##..........#.#......#.#....", ".....##........#...#..##.......", "###...#.##.#.#.#.#.##...##.....", "....#...#........##.#.##..##...", ".#..#.#.#......#.......##..#..#", ".#...#.................#....#..", ".##..#..........#..##.......#..", ".#.#.#.....#..#.#.........##..#", "...#......##...#.......#...##..", "##...###....#.###.............#", "#.....#.#..#.#..#........#.#.#.", ".....#.#......##..#.#.....#.##.", ".......#...........#..#.......#", "..#....#.#.#......#.....#...#..", ".....##........#..##..#..##....", "#.#........#...##....#.#..##...", "#......#......#....#..#...#.##.", "....#.#.......#.#.#............", "......####.#.##...#.#.##.....##", "..###.#.#..#.........#.####....", ".#.......#..#.#....#.#..#.#.##.", "#....#....#............##...##.", "....#....#............#....#..#", "..#........#..#....#..#..#...#.", ".#......##....#..........#....#", "#.##.....#..........#.###.#....", "....##...#.....#.#......#.##...", "#.#.....#.......###.###..#..#.#", "..###..##.............#.####.##", "#....#.....#....#..##.......#..", ".....#....#...#.#.#.#..#...#.##", "...#.....#..#....###......#.#.#", "##.........#.#..#..#.#..#.....#", ".#.....#.#....#.........##..#.#", ".#.#..#.###..#..#..........#...", ".##....#.#.#...#......##.....#.", "#.#....#....#...#...##...#..#..", "#...#........#....#....#......#", "#......#...#..#.#.##.....##..#.", "....#...#......##...#..#....#..", ".#......##.##.......#.......#..", ".#...#..####...........#.#.#...", ".........#...#.#.........#.....", "#.##.....#.#..#.#.###...###..#.", "#...##.###......#.###..##.#.##.", "...##.#.....#....#..#......#...", "#....###.#..#...##.....#......#", "........###...#...#............", "........#....#...#...#....#...#", "#....#..#..#....#.#........#.#.", "##...#.....#.#..........#..#..#", "#.#...##.....#........#...#...#", "##.#.#.......#...#..#.###....#.", ".#.......#....##..##...#.....#.", "#....#....#.....#.......#......", ".##.##.##...##...#.#.#..#..#...", "#..#..#.##....#......##....###.", ".......#.#.........#..##.#...##", ".#..##...#....#.....#..........", "..#.#...#......#.#..#..........", ".##....#.#.#.##.......###...#..", "..##.#...#.#.#.#.......#..#....", "#..#.......#...#........#.....#", ".....#.......#......###..#.....", "...##.#.......#.....##.....##..", "##..#.......#.#.....#....#.....", "..#....#.##.##...#...#......#..", ".#..#.###.#....###........#...#", "....##.##...##..#..#.#....#....", "..###...##.....##..............", "#....#...##...#....#..........#", ".##........#......##...##...#.#", "..#.#.##..........#......#.....", "...#...#.........#.##........##", "..#.#..#.#..#...#....#...#.....", "...##...#..#.###.#..#.#...#....", "....###........#..#..##...#....", "#.#....##.......#.#........#...", ".###...#..#.#.#.#..#...#..##.##", "..#.........#####.#......#..#..", "#.....#.....##..#....#...#...#.", "...#..#....##....##.....##.#...", ".........#............#.##.....", "....##.#..#....#.##.......#..##", ".###....#.#..#......#.#.......#", ".###...###.#.........#.#..#...#", ".....#........#..#.#..#.#..##.#", ".###..#....##.........#..##....", "..#.......#..#..##...#.###.#...", "#.......#...........#.#...#.###", "#.##.##...##.#...##..#.....#...", "..#..#........###.#.....##.....", "#.....##....#...##...####..#..#", "....#........#...#...#.........", "......#.#.#.#.......#..#.....##", "..#..#....#.....#.#...##......#", "..#....#...#.###.........#.###.", "...#......##..#.#.....#...#....", "...#.......#...#...#........##.", "............#...#..#....#.....#", "....##......................#..", "#.#.#....#....#..........##....", "#.#.....#.#.##..#...#.##....##.", "...#...#..#...#..#.#.#.......#.", "#.....#..........#.........##.#", "#...##..#..#.#.......###....#..", ".#...#..##....#.....##.......#.", "....#.##.....#.........#.#....#", "........#.#...####..#.......#.#", ".####...#.#......####.....#.##.", "###..#....#..#.......#.#..##..#", "#......#.#....##..#.##.#....#.#", "...###...#...#..##.#..#..#.#...", "...##..##....#..#.....#........", ".....#..............#......#..#", "......#....#......#..#.........", "#..#.....#.##...........##.....", ".#..#.#..................##....", "#.#..#..##...#....#.#......#...", ".##.#.##......#.##...#...#...#.", "..#...#.........#.#..#.#....#..", ".#.####.#..#.#......##.#..#....", "#..#.......#....#..............", "....#............#..#..........", ".....#####.....#.....#..##...##", "#.#....#.#...............#..##.", ".#.#..#...#......#.....#.#.#...", ".#....#.#.#......#.....##....#.", "....#....#.##..#.......###...##", ".....#..#.##...#...#...#..#.#..", "##..#........#.#..#..##......#.", ".#..#..##.......#..#.....#.....", ".#.#.....###..##.#.#...........", "..##..##.####..........#..#....", "..##..#..#...#....#......#.#...", "#...#.#......##.....##.#..###..", "#..#..............#........##.#", ".........#.##..#.#..#..##.##.#.", "#....##....#.#..#.#...##..#....", ".#....#.......#............##..", ".......#.#.......#...#.#......#", "......##...#.......#.#........#", "..###..#.#.##....##...#....##..", "..##.##..........##..###.......", ".#.#.#..#..#.#.......#.#...##..", "..#..##.........#.###..#......#", "....#.#.#...##.#...#...##..###.", "..###..##.........##...#...#..#", ".#..##...#.......#.......#..#.#", "........##....##....#.#.###.#.#", "#.....#.#.................#.#..", "....#.#.#.....##.####.#......#.", "....#.......#.#.##.##..........", "...#...........#...#.##...#.###", "#....#....#..........#.##......", "##..#...........##.....##.##...", ".#.##...##..##....#..#.....####", "#...#...#.##..........##..##...", "....##..#....#.....#.#...#....#", "..#....#..##...###.#.#.........", "#......#.#.#...#...#.........#.", "#............###.#.#.#..##...#.", ".##.....####...##..##..#..##.#.", "#..#........#.....#.#.....#...#", "#............#....#.#.#........", "......##...##.#....#.....#...#.", "..#........##......#.#.....##..", ".#..#..#.....##.......#..#.#..#", ".#....#..#....##.#.#.#..#..#.##", ".####.#..........#...#..##.....", "...###..###...##..#............", "#..#.....##.#...#..##..#.......", ".....##....#...###.##...#......", "...##..#...#..#..##....##....#.", "...###....#.###.#.#.##....#....", "##.#.#.....#....#.#....#..#....", ".......##.....#.#..##...##...#.", ".#....#.#...##.#..#....#.....#.", "..#...#..#...#.##........#...#.", "#....#......##.#....##...#.#..#", ".....#..#..#..#......#...#.#.#.", "..###....#........#...#.......#", "###...#.......#.#.......##.##..", "......##.....#.#........#....#.", "#.##..#.#.#.#..#....#.##.....#.", "..........#.##.#...#...#..#..#.", "..#...##.#..........#..##.###..", "..###..##.##..#.#...##.####..#.", "#.#.#...............##....###.#", "....#.........#.#....#.#....#.#", "..#...#.###...#....###.....#...", "..#..#....#...#............#...", ".#..#....#..##.....##..........", "..#....#.#...#.#.#.#.......##.#", ".........#....##........#.#....", "...#..##.#..#.##...#...#.#....#", "....####...#...####.#....###..#", "......##...#.##.#.......#..#...", "#.#...#.#...#.#...#....#.#.#...", ".#.....##...#.....###.#....#...", "......##.....###...#.#...#.#...", "#..#..##.#.#......#....#..#..#.", "....#.###.....#..#...#.##.....#", "##.##........#......#....#..##.", "##.....##.#.....#.....##.....#.", ".....#.##...#.#..#.#.#.....#...", ".#.##..#...#.#..#.....#.#......", ".....##.......#..#...##..#..#..", "#.....#..#.####......#........#", ".#..#..##.#..##............#..#", ".##..#.#....##.##.....#......#.", ".......##.........#..#.........", ".#...#.......................#.", "#......#.#....##.#.......#..#..", "..##..##......#.......#....#.#.", "##......#......##...##.........", "..#....####....#.#.....##.#.#..", "..........#..#.#.#.....#..#.#..", "##..##...........##.......#....", "##....#.#....#..#......###....#", "...#.#.#..#.......##.......#...", "#....#.......#.......#.........", "...##......##....#...#......#.#", "#......#####.#.........#.....#.", "#..#.............#..#....#...#.", ".......#.##..#..#..#..#....####", "......#.##..##..........###...#", ".#.##....###..#........#....##.", "#......#..#...###.#...#.....#..", ".#.#.......#....##.......#.#...", "..#.##..#..##.....#.........#.#", "#.#...#..#.##....#.......##....", ".#.....###....#.#..#...#.....#.", "#...#..#.......#.#.....##...#.#", "#.#####.........#....##.....#..", "#....#..##...#....#.##.......#.", ".#.#.........##....##....#.....", "...#..##.......#....#.#.#......", "#.###.##...###....#.....#.####.", ".#...#.#.#..##.#..........#....", "#.#.....#.##.#..####.....##.#..", "...###.##..####.......#......##", ".##..#.........#...#.#.....#.##", "..#.....##....###.....#.#...##.", "#....#....#..#....#.##.........", "......###....#.#..#..#....##...", ".#.#................#.......##.", "...#.......#.........#.#.......", "...#..........#...##.....###...", "....#......#...#...............", ".##...#....#.....#.##......#...", ".#.....###...##..##...#.#......", "....##........#.....#...#....#.", "#.........#.#...##...#.#..#....", "...#.#.....#.#........#.#....#.", ".#........#.....#.#.#.#.#..#...", "....#...#.....#.#....#........#", "..###.#....#.#....##...##..#.##", ".#....#.#.####.#.#.....#.......", ".#...#...#.................##.#", "..................##..#..#.#.#.", ".#..#............##....###.....", ".......#....#...........#......", "....#.#.#.....###.........#..##", "...#.#....#.#.##.#.##.....##..#", ".#.##.#...##...#.......#.....##", ".#............#...#..##...#.#.#", "#.##..#.##..#..##.###.#........", "..............##....#...#..#.#.", ".#.#...#.#....#....###........#", ".#....#.#....#......###........", "..#.......##......#.##.....#...", ".....#......#..#...#.#.....#..."];

const mapRowLength = map[0].length;

function checkSlope(x, y) {
  let treesCounter = 0;
  for (let i = 0; i < map.length; i = i + y) {
    let index = findIndex(x * (i / y));
    if (map[i][index] === "#") {
      treesCounter++;
    }
  }
  return treesCounter;
}

function findIndex(mod) {
  return mod < mapRowLength ? mod : findIndex(mod - mapRowLength);
}

let slope1 = checkSlope(1, 1);
let slope2 = checkSlope(3, 1);
let slope3 = checkSlope(5, 1);
let slope4 = checkSlope(7, 1);
let slope5 = checkSlope(1, 2);

console.log(slope1 * slope2 * slope3 * slope4 * slope5);
