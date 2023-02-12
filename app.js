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

console.log("Prompt 2: " + calculateCube(5));
//prompt 2 complete

// 3. isAVowel
function isAVowel(letter) {
    let upper = letter.toUpperCase();
    if (letter === "a" || letter === "e" || letter === "u" || letter === "i" || letter === "o") {

        return true;
    } else {
        return false;
    }
}

console.log("Prompt 3: " + isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    word1 = word1.length;

    word2 = word2.length;


    console.log(`Prompt 4: [${word1}, ${word2}]`);


}

getTwoLengths("Box", "Carrot");

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(`prompt 5: ${sumArray([5, 2, 6, 8, 9])}`);


//6.1 checkPrime


function checkPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// checkPrime(10)
// 6.2 printPrimes
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (checkPrime(i)) {
            console.log(`Prompt 6: ${i} is prime`);
        }
    }
}

printPrimes(5);

// 7. printLongestWord
function printLongestWord(array) {
    // YOUR CODE HERE
    let max = array[0];


    for (i = 0; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }

    return max;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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