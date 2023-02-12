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
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
     }
     return true; 
 }
// console.log(checkPrime(7));


// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 0; i <= num; i++) {
        let isItPrime = checkPrime(i);
        if (isItPrime === true) {
            console.log(i);
        }
    }
}
// printPrimes(30);

// 7. printLongestWord


function printLongestWord(arr) {
    let longWord = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longWord.length) {
            longWord = arr[i];
        } 
    }
    return longWord;
}
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "peanutbutter"]));


// BONUS!

// 8. eulerFibo
let fibonacciArray = [];
function eulerFibo(firstNum, secondNum, endNum) { //I added a second and third parameter so it's more dynamic.
    let placeholder = 0;

    for (let i = 0; i < endNum; i++) {
        placeholder = firstNum + secondNum; //placeholder adds nums together.
        firstNum = secondNum; // firstnum is replaced bu secondnum
        secondNum = placeholder; //secondnum is replaced by the placeholder's value, which is the sum of first and second num
            if (placeholder > endNum) {
                break;
            } else if (firstNum % 2 === 0) {
                fibonacciArray.push(firstNum);
        }
    }
    let sumArray = 0;
    for (let i = 0; i < fibonacciArray.length; i++) {
        sumArray += fibonacciArray[i];
    }
    if (placeholder < 4000000){
        console.log(sumArray);
    }
}
// eulerFibo(1, 4, 500);


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