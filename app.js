// 1.1. What is the difference between a parameter and an argument?
// A parameter is a variable, local to the function, that will be referenced in the code-block of a function, but they are just placeholders. Arguments are the real data that you supply when you call the function which will take the place of the parameter variables within the function when it runs and returns.
// 1.2. Within a function, what is the difference between return and console.log?
// A console.log is a stand-alone action that the function can commit within its code-block, while a return is the value that the function will output when it is called. The console.log will send an output directly to the console, while a return value will only do so if the function is called within an external console.log. Console.log only sends to the console, while return can be sent to another function as well.
// 1. 3. What are the implications of the ability of a function to return a value?
// Functions can send to other functions, variables, etc. within the greater structure of one's code. Functions can store return values until they are needed.

// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}
// console.log(calculateCube());

// 3. isAVowel
const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
function isAVowel(letter) {
    if (letter === vowels[0]) {
        return true;
    } else if (letter === vowels[1]) {
        return true;
    } else if (letter === vowels[2]) {
        return true;
    } else if (letter === vowels[3]) {
        return true;
    } else if (letter === vowels[4]) {
        return true;
    } else if (letter === vowels[5]) {
        return true;
    } else if (letter === vowels[6]) {
        return true;
    } else if (letter === vowels[7]) {
        return true;
    } else if (letter === vowels[8]) {
        return true;
    } else if (letter === vowels[9]) {
        return true;
    } else {
        return false;
    }
}

// console.log(isAVowel("y"));


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let wordLengthArr = [];
    wordLengthArr.push(word1.length, word2.length);
    return wordLengthArr;
}

// console.log(getTwoLengths("fantastic", "help"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
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