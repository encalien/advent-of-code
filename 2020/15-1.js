let list = [19, 20, 14, 0, 9, 1].map((n, i) => {
  return { num: n, index: i };
});
let ll = list.length;

for (let i = ll; i < 2020; i++) {
  let allSuchNumbers = list.filter(n => n.num === list[i - 1].num);
  let a = allSuchNumbers[allSuchNumbers.length - 1];
  let b = allSuchNumbers[allSuchNumbers.length - 2];
  let nextNum = b ? a.index - b.index : 0;
  list.push({ num: nextNum, index: i });
}

console.log(list);
