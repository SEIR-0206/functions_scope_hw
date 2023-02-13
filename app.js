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
   for(let i = 2; i<= Math.sqrt(num); i++){
    if(num % i === 0){
        return false;
    }
   }
   return true;
}
let answer = checkPrime(15);
console.log(answer);
// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++){
        if(checkPrime(i)){
            console.log(i);
        }
    }
}
printPrimes(24);

// 7. printLongestWord had to use some additional outside resources to figure out how to write this. Kept throwing errors for me.
function printLongestWord(arr) {
let bigWord = arr[i];
for(let i = 1; i < arr.length; i++){
    if(arr[i].length > bigWord.length){
        bigWord = arr[i];
    }
}
// }
// let arr = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"];
// console.log(printLongestWord(arr));
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