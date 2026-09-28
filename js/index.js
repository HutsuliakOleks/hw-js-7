// Завдання 1
let arr = [2, 6, 5];
arr[1] = 10;
console.log(arr);

// Завдання 2
let arrString = ["Ігор", "Максим", "Костя"];
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
const arrStringWords = ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"];
for (let i = 0; i < arrStringWords.length; i = i + 1) {
  let arrStringWordLength = arrStringWords[i].length;
  if (arrStringWordLength > 5) {
    console.log(arrStringWords[i]);
  }
}

// Завдання 6
const arrMaxNumbers = new Array(42, 25, 16, 31, 28, 9, 20, 39, 48, 34);
const maxNumber = Math.max(...arrMaxNumbers);
console.log(maxNumber);

// Завдання 7
const arrPairNumbers = [8, 2, 6, 18, 31, 9, 28, 5, 34, 25];
for (let pairNumber of arrPairNumbers) {
  if (pairNumber % 2 === 0) {
    console.log(pairNumber);
  }
}
