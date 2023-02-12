// 1.1. What is the difference between a parameter and an argument?
//parameters are part of the functions definition whereas the argument is what we put into the function after we've defined it

// 1.2. Within a function, what is the difference between return and console.log?
//console log is like a print function--- whereas return is a store of value that often can be printed by console log
// 1. 3. What are the implications of the ability of a function to return a value?
//you can do less work
// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}
// // console.log(calculateCube(3));

// 3. isAVowel

function isAVowel(letter) {
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        console.log(`Yep you were right ${letter} is a vowel`);
    }
}
isAVowel("a");

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    console.log(`The length of word 1 is ${word1.length} and the length of word 2 is ${word2.length}!`);
}
getTwoLengths(happy, california);
// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};