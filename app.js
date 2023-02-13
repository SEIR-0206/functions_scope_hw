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
    let wordLength1 = word1.toString().length; //converts to string to get its length
    let wordLength2 = word2.toString().length;

    lengths.push(wordLength1, wordLength2); //pushes it into an array
    return lengths;

}
console.log(getTwoLengths("one hundred", "five")); //prints out [11, 4]

// 5. sumArray
function sumArray(arr) {
    let sum = arr[0] + arr[1];
    console.log(arr);
}
sumArray(6,4) //Didn't finish it yet. 
// 6.1 checkPrime
function checkPrime(num) {
    if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false; //False if number can be divisible by i evenly
        }
      }
      return true; //true if cannot be divided.
    }
    // let squareRoot = num / num;
    // squareRoot.lower;
    // for(i = 2; i < squareRoot; i++){
    //     if(squareRoot % 2 === 0){
    //     return false;
    //     }
    //     return true;
    // }
    
console.log("Is it Prime? " ,checkPrime(11)); //Needed to get ChatGPT aid. I get the way we would check it in real life stepwise. I don't know how to translate over without googling.

// 6.2 printPrimes
function printPrimes(num) {
    // primes = [];
    if(checkPrime(num) === true){
        console.log("This is a Prime Number");
    } else {
        for(i = 1; i <= num; i++){
            if(num % i === 0){
                // console.log(primes.push(num)); //Print prime numbers into array primes
                console.log(i); 
            }
        }

    }
}
  

printPrimes(10);

// 7. printLongestWord
function printLongestWord(arr) {
    let listOfWords = [];
    listOfWords = arr.split(" ");
    for(i = 0; i < listOfWords.length; i++){ //read through array index 0, count the words .lenght & compare to previous lenght. If the length is larger, compare with next index, if lenght is smaller, print the largest word.
        if(listOfWords)
    }
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