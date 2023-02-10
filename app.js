// 1.1. What is the difference between a parameter and an argument?
// A paramater is what goes within the parantheses when declaring the function, an argument is what goes within the parentheses when the function is called

// 1.2. Within a function, what is the difference between return and console.log?
// a return returns a variable to the function for it be used again in the script, console.log simply prints the value of the variable within the argument

// 1. 3. What are the implications of the ability of a function to return a value?
// An implication of what a function would be able to do would be the ability to not repeat yourself (DRY CODE)


// 2. calculateCube
function calculateCube(num) {
    return Math.pow(num, 3);
}

//console.log("prompt two "calculateCube(5));
//prompt 2 complete

// 3. isAVowel
function isAVowel(letter) {
    let upper = letter.toUpperCase();
    if(letter === "a" || letter === "e" || letter === "u" || letter === "i" ||letter === "o") {
    
        return true;
    } else {
        return false;
    }
}

console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

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