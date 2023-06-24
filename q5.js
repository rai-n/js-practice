// Exercise 1

// 'webmaster' => 'abeemrstw'
// ["w", "e", "b", "m"...]
const makeStringAlphaOrder = (str) => Array.from(str).sort().join("")

// console.log(makeStringAlphaOrder("webmaster"))

// Exercise 2 

// hello => 2 
// e => 1

const isVowel = (letter) => {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
}

const findVowels = (str) => Array.from(str).filter(isVowel).length

// console.log("🚀 ~ file: q5.js:19 ~ findVowels:", findVowels("hello"))
// console.log("🚀 ~ file: q5.js:19 ~ findVowels:", findVowels("e"))
// console.log("🚀 ~ file: q5.js:19 ~ findVowels:", findVowels("abcde"))

// Exercise 3 

// 46 => 25, 10, 5, 2, 1  => 25, 10, 10, 1

const checkAmount = (amt, checkAmt) => amt - checkAmt >= 0

const convertAmount = (amt) => {
    let result = [];
    while (amt != 0){
        if (checkAmount(amt, 25)){
            result.push(25);
            amt -= 25; 
        } else if (checkAmount(amt, 10)){
            amt -= 10; 
            result.push(10); 
        } else if (checkAmount(amt, 5)){
            amt -= 5; 
            result.push(5); 
        } 
        else if (checkAmount(amt, 2)){
            amt -= 2; 
            result.push(2); 
        } else if (checkAmount(amt, 1)){
            amt -= 1; 
            result.push(1); 
        } 
    }
    return result;
}
// console.log("🚀 ~ file: q5.js:53 ~ convertAmount ~ convertAmount:", convertAmount(46))
// console.log("🚀 ~ file: q5.js:53 ~ convertAmount ~ convertAmount:", convertAmount(1))

// Exercise 4 

// const extractUniqueCharacters = (str) => Array.from(new Set(str))
// console.log("🚀 ~ file: q5.js:59 ~ extractUniqueCharacters:", extractUniqueCharacters("hello"))

// implementation

const extractUniqueCharactersWithoutSet = (str) => {
    let visited = {}; 
    let unique = [];

    str.split("").forEach(ch => {
        if (!visited[ch]){
            visited[ch] = ch; 
            unique.push(ch)
        }
    })

    Array.from(str).forEach(ch => {
        if (!visited[ch]){
            visited[ch] = ch; 
            unique.push(ch)
        }
    })

    return unique;
}

// console.log("🚀 ~ file: q5.js:76 ~ extractUniqueCharactersWithoutSet ~ extractUniqueCharactersWithoutSet:", extractUniqueCharactersWithoutSet("hello"))
// console.log("🚀 ~ file: q5.js:76 ~ extractUniqueCharactersWithoutSet ~ extractUniqueCharactersWithoutSet:", extractUniqueCharactersWithoutSet("testtest"))
// console.log("🚀 ~ file: q5.js:76 ~ extractUniqueCharactersWithoutSet ~ extractUniqueCharactersWithoutSet:", extractUniqueCharactersWithoutSet("this is a very long sentence"))

// Exercise 5 
// abacddec => e
// visited a
// not visited a if visited, remove a

// 1. Go through each of the characters in the array of string
// 2. Add it to the visited object and 

 const firstNotRepeated = (str) => {
    let visited = {}; 
    let notVisited = {};

    Array.from(str).forEach(elem =>{
        if (!visited[elem]){
            visited[elem] = elem
            notVisited[elem] = elem
        } else {
            delete notVisited[elem]
        }
    })

    return Object.keys(notVisited)
 }
 console.log("🚀 ~ file: q5.js:111 ~ firstNotRepeated ~ firstNotRepeated:", firstNotRepeated("abacddec"))
