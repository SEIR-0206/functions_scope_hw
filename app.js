// // 1.1. What is the difference between a parameter and an argument?
// Parameters are placeholders and only represent arguments, while arguments are the actual values that one would input into functions.
// // 1.2. Within a function, what is the difference between return and console.log?
// Return acts functionally to return the values of a function, while console.log merely prints the info, as a way to preview an outcome in the console.
// // 1. 3. What are the implications of the ability of a function to return a value?
// It implies that the function's conditions were met, the function has completed it's calling, the code worked.

// 2. calculateCube

function calculateCube(num) {
       // return(length * height * width)
       return num * num * num;
    //console.log (num * num * num)
}
const answer = calculateCube(5)
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
     //return true for (a, e, i, o, u)
     if (letter = "a", "e", "i", "o", "u") {
    return true; 
     } else  {
        return (false);
    }
}   
//const answer = isAVowel("a", "e", "i", "o", "u")
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // return each parameters' character length
    getTwoLengths = (word1, word2);
    return word1.length, word2.length;
}   //word1 not printing
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // find the sum of an array
    let sumArray = (arr.length = 0, arr.length >= 6, arr++);
     return (arr)
    //let sumArray = 0;

    // arr.forEach(item => {
    //     sum += item;
    // });

  
    }
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// should be sum 21
// 6.1 checkPrime
function checkPrime(num) {
    // checks if a number is prime;
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for(let i = 3; i <= s; i += 2) {
    if(num % i === 0) return false;
  }
  return true;
  // mix of 2/10/23 notes and an equation online that makes sense and works, but the decision to select these specific lines seems arbitrary.
    
}  
console.log(checkPrime(11)); 

// 6.2 printPrimes
function printPrimes(num) {
    // console log prime numbers up to a limit.
    {
        let store  = [], i, j, primes = []; // i versus j back and forth
        for (i = 2; i <= max; ++i) 
        {
            if (!store [i]) 
              {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) 
                {
                    store[j] = true;
                }
            }
        }
        return primes;
    } 
    console.log(printPrimes(15));
}

// 7. printLongestWord
function printLongestWord(arr) {
    // print the longest word in an array
    let string = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"];
  } if (i = 0, i > string.length, i++) {
    return string.length();
  }
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
print(printLongestWord)
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