// // 1.1. What is the difference between a parameter and an argument?
// Parameters are placeholders and only represent arguments, while arguments are the actual values that one would input into functions.
// // 1.2. Within a function, what is the difference between return and console.log?
// Return acts functionally to return the values of a function, while console.log merely prints the info, as a way to preview an outcome in the console.
// // 1. 3. What are the implications of the ability of a function to return a value?
// It implies that the function's conditions were met, the function has completed it's calling, the code worked.

// 2. calculateCube

function calculateCube(num) {
       // return(length * height * width)
       return num * num * num;
    //console.log (num * num * num)
}
const answer = calculateCube(5)
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
     //return true for (a, e, i, o, u)
     if (letter = "a", "e", "i", "o", "u") {
    return true; 
     } else  {
        return (false);
    }
}   
//const answer = isAVowel("a", "e", "i", "o", "u")
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // return each parameters' character length
    getTwoLengths = (word1, word2);
    return word1.length, word2.length;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // find the sum of an array

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