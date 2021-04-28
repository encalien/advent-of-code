const map = ["...#...#....#....##...###....#.", "#.#...#...#....#.........#..#..", ".#....##..#.#..##..##..........", ".....#.#.............#..#......", ".......#...#.##.#......#..#.#..", "#.#....#......##........##.....", ".....##.#....#..#...#...##...#.", "...#...#..#.......#..#...##...#", "..........#...........##.......", "..#..#..#...................#..", "#..#....#.....##.#.#..........#", ".#.##.......###.....#.#...#....", ".#..##....##....#.......#...###", "#.#..##...#.#..#...............", ".........#....#.......##.#.#...", "...###...##....##...#..##.#..#.", "....#.........#..#...#.......#.", "....................#..#.#.#...", "..#....#..........#...........#", ".#.....#..#.....##........##..#", "#..##..#...##............#..##.", ".#..##....#..........#..#.##.#.", "..#####..#.#............##.....", "...###.#....##..#.#....#.....#.", ".#.......##....#...#.#.....##..", "...#....#...##.#...#..#........", ".####.....#....#.#.#...#.......", "...#....#.....#.......#........", "#..#.#.......#...#............#", "...#.....###.##....#.#.###.#...", ".#.........#.......#.#....##...", "#.#..#...#.#...##......#..#....", ".....#...#..#.#...#..###..#....", "......#.........#...###........", ".....#..##...#..........#.....#", "..#..#.#.##.#...#....#....##..#", "##....#.##...#.##.#..##....#...", ".....#.#.#.#..#....##.#...#.#..", ".....##.......#........#.......", "...#.#.....#...#...##.#......##", "........#..#.#...#.#.....#.#..#", "#..##...#.#...##..##...#.#...##", ".##.#.#..#...#.....#.#.##.#...#", ".#.####.........##.........#..#", ".##..............#....#...#...#", "......#...#..#...#..#..###.#...", ".......##...#.#.#..##..#......#", ".....#....#..##..#.........#...", ".....#..#.#.#........#.#.####..", "#..#.......###....##...........", "#..##..........#.#......#.#....", ".....##........#...#..##.......", "###...#.##.#.#.#.#.##...##.....", "....#...#........##.#.##..##...", ".#..#.#.#......#.......##..#..#", ".#...#.................#....#..", ".##..#..........#..##.......#..", ".#.#.#.....#..#.#.........##..#", "...#......##...#.......#...##..", "##...###....#.###.............#", "#.....#.#..#.#..#........#.#.#.", ".....#.#......##..#.#.....#.##.", ".......#...........#..#.......#", "..#....#.#.#......#.....#...#..", ".....##........#..##..#..##....", "#.#........#...##....#.#..##...", "#......#......#....#..#...#.##.", "....#.#.......#.#.#............", "......####.#.##...#.#.##.....##", "..###.#.#..#.........#.####....", ".#.......#..#.#....#.#..#.#.##.", "#....#....#............##...##.", "....#....#............#....#..#", "..#........#..#....#..#..#...#.", ".#......##....#..........#....#", "#.##.....#..........#.###.#....", "....##...#.....#.#......#.##...", "#.#.....#.......###.###..#..#.#", "..###..##.............#.####.##", "#....#.....#....#..##.......#..", ".....#....#...#.#.#.#..#...#.##", "...#.....#..#....###......#.#.#", "##.........#.#..#..#.#..#.....#", ".#.....#.#....#.........##..#.#", ".#.#..#.###..#..#..........#...", ".##....#.#.#...#......##.....#.", "#.#....#....#...#...##...#..#..", "#...#........#....#....#......#", "#......#...#..#.#.##.....##..#.", "....#...#......##...#..#....#..", ".#......##.##.......#.......#..", ".#...#..####...........#.#.#...", ".........#...#.#.........#.....", "#.##.....#.#..#.#.###...###..#.", "#...##.###......#.###..##.#.##.", "...##.#.....#....#..#......#...", "#....###.#..#...##.....#......#", "........###...#...#............", "........#....#...#...#....#...#", "#....#..#..#....#.#........#.#.", "##...#.....#.#..........#..#..#", "#.#...##.....#........#...#...#", "##.#.#.......#...#..#.###....#.", ".#.......#....##..##...#.....#.", "#....#....#.....#.......#......", ".##.##.##...##...#.#.#..#..#...", "#..#..#.##....#......##....###.", ".......#.#.........#..##.#...##", ".#..##...#....#.....#..........", "..#.#...#......#.#..#..........", ".##....#.#.#.##.......###...#..", "..##.#...#.#.#.#.......#..#....", "#..#.......#...#........#.....#", ".....#.......#......###..#.....", "...##.#.......#.....##.....##..", "##..#.......#.#.....#....#.....", "..#....#.##.##...#...#......#..", ".#..#.###.#....###........#...#", "....##.##...##..#..#.#....#....", "..###...##.....##..............", "#....#...##...#....#..........#", ".##........#......##...##...#.#", "..#.#.##..........#......#.....", "...#...#.........#.##........##", "..#.#..#.#..#...#....#...#.....", "...##...#..#.###.#..#.#...#....", "....###........#..#..##...#....", "#.#....##.......#.#........#...", ".###...#..#.#.#.#..#...#..##.##", "..#.........#####.#......#..#..", "#.....#.....##..#....#...#...#.", "...#..#....##....##.....##.#...", ".........#............#.##.....", "....##.#..#....#.##.......#..##", ".###....#.#..#......#.#.......#", ".###...###.#.........#.#..#...#", ".....#........#..#.#..#.#..##.#", ".###..#....##.........#..##....", "..#.......#..#..##...#.###.#...", "#.......#...........#.#...#.###", "#.##.##...##.#...##..#.....#...", "..#..#........###.#.....##.....", "#.....##....#...##...####..#..#", "....#........#...#...#.........", "......#.#.#.#.......#..#.....##", "..#..#....#.....#.#...##......#", "..#....#...#.###.........#.###.", "...#......##..#.#.....#...#....", "...#.......#...#...#........##.", "............#...#..#....#.....#", "....##......................#..", "#.#.#....#....#..........##....", "#.#.....#.#.##..#...#.##....##.", "...#...#..#...#..#.#.#.......#.", "#.....#..........#.........##.#", "#...##..#..#.#.......###....#..", ".#...#..##....#.....##.......#.", "....#.##.....#.........#.#....#", "........#.#...####..#.......#.#", ".####...#.#......####.....#.##.", "###..#....#..#.......#.#..##..#", "#......#.#....##..#.##.#....#.#", "...###...#...#..##.#..#..#.#...", "...##..##....#..#.....#........", ".....#..............#......#..#", "......#....#......#..#.........", "#..#.....#.##...........##.....", ".#..#.#..................##....", "#.#..#..##...#....#.#......#...", ".##.#.##......#.##...#...#...#.", "..#...#.........#.#..#.#....#..", ".#.####.#..#.#......##.#..#....", "#..#.......#....#..............", "....#............#..#..........", ".....#####.....#.....#..##...##", "#.#....#.#...............#..##.", ".#.#..#...#......#.....#.#.#...", ".#....#.#.#......#.....##....#.", "....#....#.##..#.......###...##", ".....#..#.##...#...#...#..#.#..", "##..#........#.#..#..##......#.", ".#..#..##.......#..#.....#.....", ".#.#.....###..##.#.#...........", "..##..##.####..........#..#....", "..##..#..#...#....#......#.#...", "#...#.#......##.....##.#..###..", "#..#..............#........##.#", ".........#.##..#.#..#..##.##.#.", "#....##....#.#..#.#...##..#....", ".#....#.......#............##..", ".......#.#.......#...#.#......#", "......##...#.......#.#........#", "..###..#.#.##....##...#....##..", "..##.##..........##..###.......", ".#.#.#..#..#.#.......#.#...##..", "..#..##.........#.###..#......#", "....#.#.#...##.#...#...##..###.", "..###..##.........##...#...#..#", ".#..##...#.......#.......#..#.#", "........##....##....#.#.###.#.#", "#.....#.#.................#.#..", "....#.#.#.....##.####.#......#.", "....#.......#.#.##.##..........", "...#...........#...#.##...#.###", "#....#....#..........#.##......", "##..#...........##.....##.##...", ".#.##...##..##....#..#.....####", "#...#...#.##..........##..##...", "....##..#....#.....#.#...#....#", "..#....#..##...###.#.#.........", "#......#.#.#...#...#.........#.", "#............###.#.#.#..##...#.", ".##.....####...##..##..#..##.#.", "#..#........#.....#.#.....#...#", "#............#....#.#.#........", "......##...##.#....#.....#...#.", "..#........##......#.#.....##..", ".#..#..#.....##.......#..#.#..#", ".#....#..#....##.#.#.#..#..#.##", ".####.#..........#...#..##.....", "...###..###...##..#............", "#..#.....##.#...#..##..#.......", ".....##....#...###.##...#......", "...##..#...#..#..##....##....#.", "...###....#.###.#.#.##....#....", "##.#.#.....#....#.#....#..#....", ".......##.....#.#..##...##...#.", ".#....#.#...##.#..#....#.....#.", "..#...#..#...#.##........#...#.", "#....#......##.#....##...#.#..#", ".....#..#..#..#......#...#.#.#.", "..###....#........#...#.......#", "###...#.......#.#.......##.##..", "......##.....#.#........#....#.", "#.##..#.#.#.#..#....#.##.....#.", "..........#.##.#...#...#..#..#.", "..#...##.#..........#..##.###..", "..###..##.##..#.#...##.####..#.", "#.#.#...............##....###.#", "....#.........#.#....#.#....#.#", "..#...#.###...#....###.....#...", "..#..#....#...#............#...", ".#..#....#..##.....##..........", "..#....#.#...#.#.#.#.......##.#", ".........#....##........#.#....", "...#..##.#..#.##...#...#.#....#", "....####...#...####.#....###..#", "......##...#.##.#.......#..#...", "#.#...#.#...#.#...#....#.#.#...", ".#.....##...#.....###.#....#...", "......##.....###...#.#...#.#...", "#..#..##.#.#......#....#..#..#.", "....#.###.....#..#...#.##.....#", "##.##........#......#....#..##.", "##.....##.#.....#.....##.....#.", ".....#.##...#.#..#.#.#.....#...", ".#.##..#...#.#..#.....#.#......", ".....##.......#..#...##..#..#..", "#.....#..#.####......#........#", ".#..#..##.#..##............#..#", ".##..#.#....##.##.....#......#.", ".......##.........#..#.........", ".#...#.......................#.", "#......#.#....##.#.......#..#..", "..##..##......#.......#....#.#.", "##......#......##...##.........", "..#....####....#.#.....##.#.#..", "..........#..#.#.#.....#..#.#..", "##..##...........##.......#....", "##....#.#....#..#......###....#", "...#.#.#..#.......##.......#...", "#....#.......#.......#.........", "...##......##....#...#......#.#", "#......#####.#.........#.....#.", "#..#.............#..#....#...#.", ".......#.##..#..#..#..#....####", "......#.##..##..........###...#", ".#.##....###..#........#....##.", "#......#..#...###.#...#.....#..", ".#.#.......#....##.......#.#...", "..#.##..#..##.....#.........#.#", "#.#...#..#.##....#.......##....", ".#.....###....#.#..#...#.....#.", "#...#..#.......#.#.....##...#.#", "#.#####.........#....##.....#..", "#....#..##...#....#.##.......#.", ".#.#.........##....##....#.....", "...#..##.......#....#.#.#......", "#.###.##...###....#.....#.####.", ".#...#.#.#..##.#..........#....", "#.#.....#.##.#..####.....##.#..", "...###.##..####.......#......##", ".##..#.........#...#.#.....#.##", "..#.....##....###.....#.#...##.", "#....#....#..#....#.##.........", "......###....#.#..#..#....##...", ".#.#................#.......##.", "...#.......#.........#.#.......", "...#..........#...##.....###...", "....#......#...#...............", ".##...#....#.....#.##......#...", ".#.....###...##..##...#.#......", "....##........#.....#...#....#.", "#.........#.#...##...#.#..#....", "...#.#.....#.#........#.#....#.", ".#........#.....#.#.#.#.#..#...", "....#...#.....#.#....#........#", "..###.#....#.#....##...##..#.##", ".#....#.#.####.#.#.....#.......", ".#...#...#.................##.#", "..................##..#..#.#.#.", ".#..#............##....###.....", ".......#....#...........#......", "....#.#.#.....###.........#..##", "...#.#....#.#.##.#.##.....##..#", ".#.##.#...##...#.......#.....##", ".#............#...#..##...#.#.#", "#.##..#.##..#..##.###.#........", "..............##....#...#..#.#.", ".#.#...#.#....#....###........#", ".#....#.#....#......###........", "..#.......##......#.##.....#...", ".....#......#..#...#.#.....#..."];

const step = 3;
const mapRowLength = map[0].length;
let slopePath = "";
let treesCounter = 0;

for (let i = 0; i < map.length; i++) {
  let index = findIndex(step * i);
  slopePath += map[i][index];
  if (map[i][index] === "#") {
    treesCounter++;
  }
}

function findIndex(mod) {
  if (mod < mapRowLength) {
    return mod;
  } else {
    return findIndex(mod - mapRowLength);
  }
}

console.log(treesCounter);
