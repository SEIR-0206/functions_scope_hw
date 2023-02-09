// 1.1. What is the difference between a parameter and an argument?
// a parameter is the value that goes inside the parentesis when you call a function.
// a argument is the variable that you use inside the funtion for when the function is goin to be called.

// 1.2. Within a function, what is the difference between return and console.log?
// return is what you want to be the result of a function
// console.log will simply log whatever information you choose in the console

// 1. 3. What are the implications of the ability of a function to return a value?
// ultimatelly the reason of the function is to return a specific value.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    cube = num ** 3;
    return console.log(cube)
}
// calculateCube(5)

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
   
    letter = letter.toLowerCase();

        
    if (letter === "a" || letter === "e" || letter ==="i" || letter ==="o" || letter ==="u"){
        return true}else{
        return false;
    }
    }

console.log(isAVowel("A"));


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