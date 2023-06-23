// Exercise 1

// cat => cat
// bobby => bobby
// characters => chaers

const newString = (str) => (str.length < 3) ? str : str.slice(0, 3) + str.slice(-3)
 

// console.log(newString("la"))
// console.log(newString("abc"))
// console.log(newString("abcdef"))
// console.log(newString("characters"))

// Exercise 2

// badger
// hi

const firstHalf = (str) => (str.length % 2 == 0) ? str.slice(0, str.length /2) : "Not even"

// console.log(firstHalf("badger"));
// console.log(firstHalf("hi"));
// console.log(firstHalf("cat"));

// Exercise 3

// hello world => ello orld 
// h i => ""
// hi ho => io

const concatString = (str1, str2) => (str1.length == 1 && str2.length == 1) ? "Only one letter" : str1.slice(1) + str2.slice(1)

// console.log("concatString:", concatString("h", "i"))
// console.log("concatString:", concatString("hi", "ho"))
// console.log("concatString:", concatString("hello", "world"))

// Exercise 4 

// 80 90 => 90

const nearest100 = (num1, num2) => (Math.abs(100-num1) > Math.abs(100-num2)) ? num2 : num1

// console.log("nearest100:", nearest100(80, 90))
// console.log("nearest100:", nearest100(20,40))
// console.log("nearest100:", nearest100(-20, -40))
// console.log("nearest100:", nearest100(50,50))

// Exercise 5

const findOccurances = (str, char) => [...str].filter(ch => ch == char).length; 
const contains2To4 = (str, char) => {
    let count = findOccurances(str,char);
    return (count >= 2 && count <= 4)
}

console.log("findOccurances:", contains2To4("cat", "c"))
console.log("findOccurances:", contains2To4("worrrld", "r"))
console.log("findOccurances:", contains2To4("worrrrrrld", "r"))
console.log("findOccurances:", contains2To4("hello", "l"))

