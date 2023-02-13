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
        console.log('true');
    }else false;
}
// isAVowel("e");

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
}
    // console.log(getTwoLengths("howdy", "waiter")); //should output [5, 6]


// 5. sumArray
function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5]));


// 6.1 checkPrime
function checkPrime(num) {
   
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