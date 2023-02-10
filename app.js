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
function isAVowel(letter) {
    //     if (letter === vowels[0]) {
    //         return true;
    //     } else if (letter === vowels[1]) {
    //         return true;
    //     } else if (letter === vowels[2]) {
    //         return true;
    //     } else if (letter === vowels[3]) {
    //         return true;
    //     } else if (letter === vowels[4]) {
    //         return true;
    //     } else if (letter === vowels[5]) {
    //         return true;
    //     } else if (letter === vowels[6]) {
    //         return true;
    //     } else if (letter === vowels[7]) {
    //         return true;
    //     } else if (letter === vowels[8]) {
    //         return true;
    //     } else if (letter === vowels[9]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
}

// console.log(isAVowel("O"));


function isAVowel2(letter) {
    const vowels = ["a", "e", "i", "o", "u"]
    let lowercaseVowels = letter.toLowerCase();
    for (let vowel of vowels) {
        // console.log(vowel);
        if (lowercaseVowels === vowel) {
            return true;
        }
    }
    return false;


    // for (let idx = 0; idx < vowels.length; idx++) {
    //     if (letter === vowels[idx]) {
    //         break;
    //         return true;
    //     } else {
    //         continue;
    //     }
    // }

}
// console.log(`${isAVowel2("w")}`);

//Ohz helped Josh and I with this solution. The string of if/else statements are mine, as well as the commented out code in the function directly above. The commented in code above that is Ohz's. I am taking time to compare my answer with his to try and understand what wasn't working initially.


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
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

    // for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
    // if (num % i === 0) {
    //     return false;
    // } else if (num % i !== 0) {
    //     continue;
    // } else {
    //     return true;
    // }
    //     console.log(i);
    // }
}

// console.log(checkPrime(1));

// 6.2 printPrimes
function printPrimes(num) {
    let primes = [];
    for (let i = 0; i <= num; i++) {
        if (checkPrime(i) === true) {
            primes.push(i);
        }
    }
    return primes;
}

// console.log(printPrimes(97));

// 7. printLongestWord

function indexLongestWord(arr) {
    let wordsLength = [];
    for (let i = 0; i < arr.length; i++) {
        wordsLength.push(arr[i].length);
    }
    return wordsLength.sort(function (a, b) { return b - a });
}
function printLongestWord(arr) {
    let wordsLength = indexLongestWord(arr);
    let longestWords = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === wordsLength[0]) {
            longestWords.push(arr[i]);
        }
    }

    let inCaseOfTie = longestWords.join(' ');
    return inCaseOfTie;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// BONUS!

// 8. eulerFibo


function eulerFibo(num) {
    // let sequence = [];
    // for (let i = 1; i <= num; i++) {
    //     if ((sequence[i - 3] + sequence[i - 4]) === num || (num - (sequence[i - 2] + sequence[i - 3]) < 0)) {
    //         break;
    //     } else if (sequence.length < 2) {
    //         console.log(i);
    //         sequence.push(i);
    //     } else if (sequence.length >= 2) {
    //         console.log(i);
    //         sequence.push(sequence[i - 2] + sequence[i - 3]);
    //     }
    // }
    // return sequence;
}
// console.log(eulerFibo(14));

// function eulerFiboEvenNumbersToo(num) {
//     let sequence = [];
//     let sequenceEvens = [];
//     for (let i = 1; i <= num; i++) {
//         if (sequence[i - 3] + sequence[i - 4] === num || (num - (sequence[i - 2] + sequence[i - 3]) < 0)) {
//             break;
//         } else if (sequence.length < 2) {
//             if (i % 2 === 0) {
//                 sequenceEvens.push(i);
//                 sequence.push(i);
//             } else {
//                 sequence.push(i);
//             }
//         } else if (sequence.length >= 2) {
//             if ((sequence[i - 2] + sequence[i - 3]) % 2 === 0) {
//                 sequenceEvens.push(sequence[i - 2] + sequence[i - 3]);
//                 sequence.push(sequence[i - 2] + sequence[i - 3]);
//             } else {
//                 sequence.push(sequence[i - 2] + sequence[i - 3]);
//             }
//         }
//     }
//     return `All: ${sequence} / Evens: ${sequenceEvens}`;
// }
// console.log(eulerFiboEvenNumbersToo(1111));

// function eulerFiboSum(num) {
//     let sequence = [];
//     for (let i = 1; i <= num; i++) {
//         if (sequence[i - 3] + sequence[i - 4] === num || (num - (sequence[i - 2] + sequence[i - 3]) < 0)) {
//             break;
//         } else if (sequence.length < 2) {
//             sequence.push(i);
//         } else if (sequence.length >= 2) {
//             sequence.push(sequence[i - 2] + sequence[i - 3]);
//         }
//     }
//     let sum = 0;
//     for (let i = 0; i < sequence.length; i++) {
//         sum += sequence[i];
//     }
//     return sum;
// }
// console.log(eulerFiboSum(8));

// function eulerFiboEvenNumbersSum(num) {
//     let sequence = [];
//     let sequenceEvens = [];
//     for (let i = 1; i <= num; i++) {
//         if (sequence[i - 3] + sequence[i - 4] === num || (num - (sequence[i - 2] + sequence[i - 3]) < 0)) {
//             break;
//         } else if (sequence.length < 2) {
//             if (i % 2 === 0) {
//                 sequenceEvens.push(i);
//                 sequence.push(i);
//             } else {
//                 sequence.push(i);
//             }
//         } else if (sequence.length >= 2) {
//             if ((sequence[i - 2] + sequence[i - 3]) % 2 === 0) {
//                 sequenceEvens.push(sequence[i - 2] + sequence[i - 3]);
//                 sequence.push(sequence[i - 2] + sequence[i - 3]);
//             } else {
//                 sequence.push(sequence[i - 2] + sequence[i - 3]);
//             }
//         }
//     }
//     let sum = 0;
//     for (let i = 0; i < sequenceEvens.length; i++) {
//         if (sequenceEvens[i] < 4000000) {
//             sum += sequenceEvens[i];
//         } else {
//             break;
//         }
//     }
//     return sum;
// }

// console.log(eulerFiboEvenNumbersSum(5000000));

// 9. findNeedle
function findNeedle(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 'needle') {
    //         return `Found the needle at position ${i}`;
    //     }
    // }
}

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'more freakin junk', 'needle', 'randomJunk']))

// 10. sumPositive
function sumPositive(arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         sum += arr[i];
    //     }
    // }
    // return sum;
}

// console.log(sumPositive([1, -4, 7, 20, 12]));

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