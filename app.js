// 1.1. What is the difference between a parameter and an argument?
//an argument are the values that are declared within a function and parameter are the variables in a function
// 1.2. Within a function, what is the difference between return and console.log?
// a console.log checks the code if it has any bugs and console it in the browser or terminal when node is called. a return stops the execution of the function and stores the value as well return it.
// 1. 3. What are the implications of the ability of a function to return a value?
// return helps with closure. it stores the data and can be invoked anytime.

// 2. calculateCube
function calculateCube(num) {
  // YOUR CODE HERE
  return num * num * num;
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(name) {
  name = name.toLowerCase();
  if (name == "i" || name == "e" || name == "a" || name == "o" || name == "u") {
    return true;
  } else {
    return false;
  }
  // YOUR CODE HERE
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  return [word1.length, word2.length];

  // YOUR CODE HERE
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
  // YOUR CODE HERE
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    } else {
      return true;
    }
  }
  // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
  // YOUR CODE HERE
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}
printPrimes(97);

// 7. printLongestWord
function printLongestWord(arr) {
  let longest = [];
  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
  // YOUR CODE HERE
}
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "blob",
  ])
);

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
  sumPositive,
};
