// Завдання 1
let arr = [2, 6, 5];
const secondArr = new Array(2, 6, 5);
arr[1] = 10;
console.log(arr);

// Завдання 2
let arrString = ["Ігор", "Максим", "Костя"];
const secondArrString = new Array("Ігор", "Максим", "Костя");
arrString[3] = "Неля";
console.log(arrString);

// Завдання 3
let arrNumbers = [18, 12, 5, 3, 6];
const arrNumbersLength = arrNumbers.length;
let total = 0;
for (let i = 0; i < arrNumbersLength; i = i + 1) {
  console.log(arrNumbers[i]);
  total = total + arrNumbers[i];
}
console.log(total);

// Завдання 5
let arrStringWords = ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"];
for (let i = 0; i < arrStringWords.length; i = i + 1) {
  let arrStringWord = arrStringWords[i].length;
  if (arrStringWord > 5) {
    console.log(`Текст "Bootstrap і JavaScript" більше ніж 5-ти символів`);
  }
}

// Завдання 6
const arrMaxNumbers = [42, 25, 16, 31, 28, 9, 20, 39, 48, 34];
let filter = [];
if (Math.max(arrMaxNumbers)) {
  filter.push(arrMaxNumbers);
}
console.log(filter);

// Завдання 7
const arrPairNumbers = [8, 2, 6, 18, 31, 9, 28, 5, 34, 25];
let arrFilter = [];
for (let pairNumber of arrPairNumbers) {
  console.log(pairNumber);
  if (pairNumber % 2 === 0) {
    arrFilter.push(pairNumber);
  }
}
console.log(arrFilter);
