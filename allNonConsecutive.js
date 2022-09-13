function allNonConsecutive (arr) {
let res = [];
 for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1] - 1) {
      res.push({["i"]: i + 1, ["n"]: arr[i + 1] })     
  }
 }
 return res
}


console.log(allNonConsecutive([1,2,3,4,6,7,8,10])) //> [{i: 4, n:6}, {i: 7, n:10}]
console.log(allNonConsecutive([ 18, 19, 21, 23, 24, 25, 26, 27 ])) //> [{ i: 2, n: 21 }, { i: 3, n: 23 }]