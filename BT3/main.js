import {
  avg,
  sumPositiveInt,
  secondHighest,
  sorted,
  sumOddNumber,
  square,
} from "./modules/helper.js";
console.log(square([1, 2, 3, 5]));

// Bài 1
// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [1, 6, 8, 9, 0];

// const arr3 = [...arr1, ...arr2];
// const newArr = arr3.filter((value, index) => arr3.indexOf(value) !== index);
// console.log(newArr);

// Bài 2
// let arr = [1, 54, 6, 7];
// const newArr = arr.map((value, i) => {
//   return value + 5;
// });
// console.log(newArr);

// Bài 3
// let m = [1, 2, 4, 5, 6, 7];
// let n = [3, 5, 675, 8, 96];

// let arr = [...m, ...n];
// const valuesToRemove = [1, 8, 10, 96, 7];
// const newArr = arr.filter((item) => !valuesToRemove.includes(item));

// Bài 4
let players = [
  { id: 11, name: "Messi", age: 33 },
  { id: 12, name: "Ronaldo", age: 34 },
  { id: 13, name: "Young", age: 35 },
  { id: 14, name: "Mane", age: 21 },
  { id: 15, name: "Salah", age: 24 },
];

let id = [11, 12, 13, 14, 15];

let playersModified = id.map((e, i) => ({ [e]: players[i] }));
console.log(playersModified);
