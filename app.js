// 1.1. What is the difference between a parameter and an argument?

// A parameter is what is listed in the () section of the function definition and is used throughout the 
// function. The argument is passed in as a value to the function when the function is called later on.

// 1.2. Within a function, what is the difference between return and console.log?

//a returned value is a piece of data that can be used while simply console.logging the result of a function
// won't be an actionable piece of data

// 1. 3. What are the implications of the ability of a function to return a value?

// if the function returns a value instead of just logging a value, the value produced can be used 
// can be used globally and not just locally to the function

// 2. calculateCube
function calculateCube(num) {
    console.log(Math.pow(num,3))
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
        sum += arr[i];
    }
    return sum;
}



// 6.1 checkPrime


// I was a bit confused on the square root part of the prime function so I looked up a 
// stack overflow thread on it and took inspiration there 
// (https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript)
function checkPrime(num) {

    if(num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for(let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
            if(num % i === 0) {
                return false;
            }

        }
    }
    return true;
}

// console.log(checkPrime(11))


// 6.2 printPrimes
function printPrimes(num) {
    let numPrimes = 0;
    let primes = [];
    for(let i = 1; i < num; i++) {
        if(checkPrime(i)) {
            numPrimes++
            primes.push(i);
        }
    }
    console.log("Between 1 and " + num + " there are " + numPrimes + " prime numbers:");
    for(let i = 0; i < primes.length; i++) {
        console.log("- " + primes[i]);
    }
}

// printPrimes(21);

// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = "";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord
}

// console.log(printLongestWord(["blob","blip"]))

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