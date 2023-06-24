// Exercise 1 

const isLeapYear = (year) => year % 4 == 0 && year % 100 != 0 || year % 400 == 0
// console.log("🚀 ~ file: q4.js:4 ~ isLeapYear:", isLeapYear(2024))

// Exercise 2 

const compareTwoObjects = (obj1, obj2) => {
    for (key in obj1){
        if (obj2[key] === undefined) return false
    }
    return true
}

// console.log("🚀 ~ file: q4.js:14 ~ compareTwoObjects ~ compareTwoObjects:", compareTwoObjects({"name": "John"},{"name": "Bob", "surname": "Bob"}))


/*

person {
    name : "John",
    age : 35
  }
  
person {
    name : "Bob"
}

*/

// Another solution

const compareTwoObjectsEvery = (obj1, obj2) => Object.keys(obj1).every(val => obj2[val])

// console.log("compareTwoObjectsEvery", compareTwoObjectsEvery({"name": "John"},{"name": "Bob", "surname": "Bob"}))

// Exercise 3 

/* 
cat,dog,rat
pigeon,owl,hawk
snake,lizard,frog

=> 
[
"cat,dog,rat",
"pigeon,owl,hawk",
"snake,lizard,frog"

]

*/ 
 
 

const getLineFromCSV = str => str.split("\n"); 
const splitByComma = (csv) => getLineFromCSV(csv).map(row => row.split(","))

// console.log("🚀 ~ file: q4.js:64 ~ splitByComma ~ splitByComma:", splitByComma("cat,dog,rat\npigeon,owl,hawk\nsnake,lizard,frog"))

// Exercise 4 
const makeRandomHex = () => Math.floor(Math.random()*16).toString(16)
const makeColor = () => "#" + Array.from("------").map(makeRandomHex).join("")

// console.log("🚀 ~ file: q4.js:64 ~ makeColour:", makeColor())
  
// Exercise 5 
// f(f(x) => x) x true for all elements
// e.g. x > 1 predicate, true if all values in array > 5

const isEven = (value) => value % 2 === 0
const isGreaterThan5 = (value) => value > 5 

const checkEveryForArray = (arr, predicateFunc) => arr.every(predicateFunc)

// console.log("🚀 ~ file: q4.js:75 ~ checkEveryForArray:", checkEveryForArray([1, 2, 3, 4], isEven))
// console.log("🚀 ~ file: q4.js:75 ~ checkEveryForArray:", checkEveryForArray([2, 4], isEven))
// console.log("🚀 ~ file: q4.js:75 ~ checkEveryForArray:", checkEveryForArray([2, 4], isGreaterThan5))
// console.log("🚀 ~ file: q4.js:75 ~ checkEveryForArray:", checkEveryForArray([6, 7, 8], isGreaterThan5))
