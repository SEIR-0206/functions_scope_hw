// 1.1. What is the difference between a parameter and an argument?
// a parameter is the value that goes inside the parentesis when you call a function.
// a argument is the variable that you use inside the funtion for when the function is goin to be called.

// 1.2. Within a function, what is the difference between return and console.log?
// return is what you want to be the result of a function
// console.log will simply log whatever information you choose in the console

// 1. 3. What are the implications of the ability of a function to return a value?
// ultimatelly the reason of the function is to return a specific value.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    cube = num ** 3;
    return console.log(cube)
}
// calculateCube(5)

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    letter = letter.toLowerCase();   
    if (letter === "a" || letter === "e" || letter ==="i" || letter ==="o" || letter ==="u"){
        return true}else{
        return false;
    }
    }

// console.log(isAVowel("A"));


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
   let word1Arr =  [word1.length, word2.length]; 
    
    return word1Arr;
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let  arrSum = 0;
    for (let i=0; i<arr.length; i++){
      
        arrSum += arr[i];
    }
    return arrSum;
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
       if( num % i === 0){
        return false
       }  
    }
    return true
}

// console.log(checkPrime(23));

// 6.2 printPrimes
function printPrimes(num){
    // YOUR CODE HERE
   let primes = [];
    for (let i = 0; i <= num; i++) {
        if (checkPrime(i) === true){
            primes.push(i);
        } 
    }
    return primes;
}
// console.log (checkPrime(9));

let longWord = ["BoJack", "Princess", "Diane","Peanutbutter", "a", "Max", "big", "blob"];

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE

   let longestName = "";
   for (let i = 0; i < arr.length; i++) {
    let wordLength = arr[i].length;
    if (wordLength > longestName.length) longestName = arr[i];
   } return longestName;

    // \/ Second way that worked \/

    //   longestName = arr.sort((a,b) => {
    //   if (a.length > b.length) return -1;
    //   return 1
    // }) 
    // return longestName[0];
}
// console.log(printLongestWord(longWord));

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
    let fiboArr = []
    for (let i = 2; i <= num; i++) {
       if(fiboArr.length === 0) fiboArr.push(1,2);
       else if(fiboArr.length > 0 && fiboArr[fiboArr.length -1] < num && fiboArr[fiboArr.length -1] + fiboArr[fiboArr.length - 2] <= num){
        fiboArr.push(fiboArr[fiboArr.length -1] + fiboArr[fiboArr.length - 2])
       } 
    }
    let evenNums = []
    for (let i = 0; i < fiboArr.length; i++) {
        if (fiboArr[i] % 2 === 0){
             evenNums.push(fiboArr[i])
        }
    }

    let addNums = fiboArr.reduce((a, b) => a + b, 1)
    
    console.log(num)
    console.log(fiboArr.length);
    console.log(fiboArr)
    console.log(evenNums);
    return addNums;
}

console.log(eulerFibo(11))


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
    // printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
}