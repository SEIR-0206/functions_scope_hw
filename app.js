// 1.1. What is the difference between a parameter and an argument?
//In essence, parameters hold the place of the argument until the function is called. 
// 1.2. Within a function, what is the difference between return and console.log?
// The return completely ends the function, and does not automatically print anything to the terminal. All that Console.log does is write a message to the terminal.
// 1. 3. What are the implications of the ability of a function to return a value?
//You can store an equation or a system anywhere and call upon it at any time, it is a significant time saver.

// 2. calculateCube

function calculateCube(num) {
    number = num * num * num;
    return number;
}
// console.log(calculateCube(5));

// 3. isAVowel

const vowels = ['a', 'e', 'i', 'o', 'u']
function isAVowel(letter) {
    for (i = 0; i < vowels.length; i++) {
        if (letter.toLowerCase() === vowels[i]) {
            return true;
        }
    }
    return false;
}
// console.log(isAVowel("O"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let array = [word1.length, word2.length]
    return array;
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

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