// Exercise 1

// 'webmaster' => 'abeemrstw'
// ["w", "e", "b", "m"...]
const makeStringAlphaOrder = (str) => Array.from(str).sort().join("")

console.log(makeStringAlphaOrder("webmaster"))