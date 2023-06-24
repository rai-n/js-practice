
// Exercise 1 

// [1, 2, 3, 4] => 2 
// [1, 3, 5] => 0
// [1] => 0
// [2] => 1


const numOfEventDigitsInArray = (num) => num.filter(elem => elem % 2 ==0)
// console.log(`Number of even digits in array: ${numOfEventDigitsInArray([1, 2, 3, 4, 5, 6])}`)

// Exercise 2 

// [1, 2, 3, 4] => 2 
// [1, 3, 5] => 0
// [1] => 0
// [2] => 1
// Range 10, [4, 16, 32]


const numOfEvenValuesToGivenNum = (num, max) => num.filter(elem => elem % 2 ==0 && elem < max)
// console.log(`Number of even values in array under a given number: ${numOfEvenValuesToGivenNum([4, 16, 32, 2], 10)}`)

// Exercise 2 - Alt 

const createArrayOfNumbersGreaterThan = (max) => [...Array(max).keys()].filter(value => value % 2 == 0)

// Solution 2

const createArrayOfNumbers = (max) => {
    let returnArray = [];
    for (let i = 0; i < max; i++){
        returnArray.push(i);
    }
    return returnArray;
} 
// console.log("🚀 ~ file: q3.js:27 ~ createArrayOfNumbersGreaterThan:", createArrayOfNumbersGreaterThan(9))
// console.log('Second solution for createArrayOfNumbersGreaterThan: ', numOfEventDigitsInArray(createArrayOfNumbers(9)));

// Exercise 3 
// [1, 2, 3, 4] = true
// [2, 1, 4, 2] = false
// [1] = true

const checkAscending = (array) => {
    if (array.length == 1){
        return true
    } else {
        for (let i =0; i < array.length-1; i++){
            if (array[i] < array[i+1]){
                continue
            }else{
                return false
            }
        }
        return true;
    }
}

// console.log(checkAscending([2, 1, 4, 2]))

// Exercise 4

const largestEvenNumFromArray = (array) => {
    let list = array.filter(elem => elem % 2 == 0)
    return Math.max(...list)
}

// console.log("🚀 ~ file: q3.js:66 ~ largestEvenNumFromArray:", largestEvenNumFromArray([1, 2, 3,4,5,6]))

// Exercise 5

const replaceFirstLetter = (str) => "$" + str.slice(1)
console.log("🚀 ~ file: q3.js:75 ~ replaceFirstLetter:", replaceFirstLetter("hello"))

// Alternative - replace digit
const replaceFirstDigitRegex = (str) => str.replace(/\d/, '$')
// console.log("🚀 ~ file: q3.js:79 ~ replaceFirstDigitRegex:", replaceFirstDigitRegex("0Hello"))
// console.log("🚀 ~ file: q3.js:79 ~ replaceFirstDigitRegex:", replaceFirstDigitRegex("Hell0"))
// console.log("🚀 ~ file: q3.js:79 ~ replaceFirstDigitRegex:", replaceFirstDigitRegex("H3ll0"))



