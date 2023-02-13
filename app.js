// 1.1. What is the difference between a parameter and an argument?
//Answer: The values that are declared within a function when the function is called are known as an argument. Whereas, the variables that are defined when the function is declared are known as a parameter.

// 1.2. Within a function, what is the difference between return and console.log?
// Answer: console.log prints the output in the console. Return will return a value when the function is called.

// 1. 3. What are the implications of the ability of a function to return a value?
// (I didn't really understand what this question was asking to be honest so I just googled and pasted the best answer I could find but I still do not quite understand)
// Answer: When a function returns a value, the value is returned via a return statement to the caller of the function, after being implicitly converted to the return type of the function in which it is defined.

// 2. calculateCube
function calculateCube(num) {
    console.log(Math.pow(num,4));
}

// 3. isAVowel
function isAVowel(letter) {
    letter = letter.toLowerCase();
    if(letter == 'a' | letter == 'e' | letter == 'i' | letter == 'o' | letter == 'u') {
        return true;
    } else {
        return false;
    }
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let myArray = []
    myArray.push(word1.length)
    myArray.push(word2.length)
    return myArray
}

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum + arr[i];
    }
    return sum;
}

// 6.1 checkPrime
function checkPrime(num) {
    //
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    let longest = [];
  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
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