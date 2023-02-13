// 1.1. What is the difference between a parameter and an argument?
//Answer: A parameter is a value passed into a function, the argument is the value passed in. For example, function aliColak(parameter){}, when we call, aliColak(arg)


// 1.2. Within a function, what is the difference between return and console.log?
// The return returns the value and exits the loop while the console.log just prints out the inputted value and continues processing. 

// 1. 3. What are the implications of the ability of a function to return a value?
// The Conclusion of the abilitiy of a function to return a value are: it simplifies & makes code reusable. It also makes the code more flexible because you can include different values whenever you call it.

// 2. calculateCube
function calculateCube(num) {
    cubed = num * num * num;
    return cubed;
}
// 3 ^ 3 = 27
console.log(calculateCube(3));

// 3. isAVowel
function isAVowel(letter){
    // letter = letter.toLowerCase();
    vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(letter.toLowerCase());
    
}
console.log(isAVowel("A")); //Prints true if letter is capital or lowercase & is a vowel. 

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let lengths = [];
    let wordLength1 = word1.toString().length;
    let wordLength2 = word2.toString().length;

    lengths.push(wordLength1, wordLength2);
    return lengths;

}

console.log(getTwoLengths("one hundred", "five")); //prints out [11, 4]
// 5. sumArray
function sumArray(arr) {
    
}

// 6.1 checkPrime
function checkPrime(num) {
    
}

// 6.2 printPrimes
function printPrimes(num) {
    
}

// 7. printLongestWord
function printLongestWord(arr) {
    
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    
}

// 9. findNeedle
function findNeedle(arr) {
    
}

// 10. sumPositive
function sumPositive(arr) {
    
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