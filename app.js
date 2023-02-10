// 1.1. What is the difference between a parameter and an argument?
// Paraneters are the listed names in the definiton,
// Arguments are the real values passed to the function

// 1.2. Within a function, what is the difference between return and console.log?
// Return returns the values from a function
// Console.log is the equivalent of printing your function

// 1. 3. What are the implications of the ability of a function to return a value?
// You can put together a reusable took that can help developers break problems into tiny parts

// 2. calculateCube
function calculateCube(num) {
    return num * num * num
}
console.log(calculateCube(4))

// 3. isAVowel
function isAVowel(letter) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < vowels.length; i++){
        if(letter === vowels[i]) {
            return true;
        }
    }
    if(letter !== vowel) {
        return false;
    }
}
console.log(isAVowel("E"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return(word1.length, word2.length);
}
console.log(getTwoLengths("Hippo", "Champions"));

// 5. sumArray
function sumArray(arr) {
    let total = 0
    for  (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
}

// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2;  i <= Math.floor (Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (printPrimes(i)) {
            console.log(i);
        }
    }
}

// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = arr[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(printLongestWord);

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'needle') {
            return 'found the needle at ${i}';
        }
    }
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