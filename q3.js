
// Exercise 1 

// [1, 2, 3, 4] => 2 
// [1, 3, 5] => 0
// [1] => 0
// [2] => 1


const numOfEventDigitsInArray = (num) => num.filter(elem => elem % 2 ==0).length
// console.log(`Number of even digits in array: ${numOfEventDigitsInArray([1, 2, 3, 4, 5, 6])}`)

// Exercise 2 

// [1, 2, 3, 4] => 2 
// [1, 3, 5] => 0
// [1] => 0
// [2] => 1
// Range 10, [4, 16, 32]


const numOfEvenValuesToGivenNum = (num, max) => num.filter(elem => elem % 2 ==0 && elem < max).length
console.log(`Number of even values in array under a given number: ${numOfEvenValuesToGivenNum([4, 16, 32, 2], 10)}`)