//Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr) {
    return arr.reduce((a, b) => a + (b == true ? 1 : 0), 0);
}

console.log(countTrue([true, false, false, true, false]));





// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples
// simpleEncoder("Mubashir") ➞ "[[[[[[[["
// // '[' for each character

// simpleEncoder("Matt") ➞ "[[]]"
// // ']' for both 't'

// simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// // Two spaces in between


function simpleEncoder(str) {



}


//Write a javascript program to check two numbers and return true if one of the nums is 100 or if sum of the two nos is 100
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));

//write a program to get the extension of a filename
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension("abc.js"));

//write a program to replace every character in a given string with the character following it in the alphabet

const moveCharsForward = (str) => str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');
console.log(moveCharsForward('abcd'));
console.log(moveCharsForward('z'));

//write a program to create a new string adding "New!" in front of a given string .If the given string begins with "New!" already then return the original string.

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! offers'));


//write a program to get the current date
//expected Output: 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(formatDate());

//add up the nums from a single number
const addUp = (num) => new Array(num).fill(0).reduce((acc, item, index) => acc + (index + 1), 0);

console.log(addUp(4));



//create a function that takes an array of nos an return "Boom" if the digit 7 appears in the array.Otherwise return there is no 7 in the array.


function sevenBoom(arr) {
    let result = 'there is no seven in the array';

    for (let i = 0; i < arr.length; i += 1) {
        const arrayItemString = String(arr[i]);
        if (arrayItemString.includes('7')) {
            result = 'Boom!';
            break;
        }
    }
    return result;
}

console.log(sevenBoom([34, 27, 89, 6]));

//altenative
const sevenBoom = arr => arr.toString().includes('7') ? 'Boom!' : 'there is no 7 in the array';
console.log(sevenBoom([34, 28, 89, 6]));


//count Boomerangs, sub array of length 3
const CountBoomerang = arr =>
    arr.reduce((boomerangCount, item, index) =>
        boomerangCount + (item === arr[index + 2] && arr[index + 1] !== item), 0);


//create a function that takes two dates and returns the number of days between the first and second date

const getDays = (date1, date2) => {
    const getTimestamp = date => date.getTime() / 1000;

    const d1Stamp = getTimestamp(date1);
    const d2Stamp = getTimestamp(date2);

    const secondsInDay = 86400;
    const difference = Math.abs(d1Stamp - d2Stamp) / secondsInDay;

    return Math.floor(difference);
}


//Write  a function that returns a passed string with letters in alphabetical order
//ex: string: 'webmaster'
//output: 'abeemrstw'

const alphabeticalOrder = (str) => str.split('').sort().join('');
console.log(alphabeticalOrder('webmaster'));

// learn sort() before applying ( DO NOT COPY PASTE )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort



//function that accepts a string as a parameter and counts the number of vowels within the string

const countLetters = (str, letters = ['a', 'e', 'i', 'o', 'u']) =>
    str.split('')
        .filter(s => letters.indexOf(s) > -1)
        .length;

console.log(countLetters('abcde'));
console.log(countLetters('abcde', ['c']));

//function to extract unique characters from a string 
const getUniqueChars = (str) =>
    str.split('')
        .filter((item, index, arr) =>
            arr.slice(index + 1).indexOf(item) === -1
        );
console.log(getUniqueChars('aaabbbbvvvvjjjjkl'));


//function to get non-repeated chars
const getNonRepeatedChars = (str) =>
    str.split('').filter((item, index, arr) =>
        arr.filter(arrItem => arrItem === item).length === 1
    );



//palindrome check
const isPalindrome = (str) => {
    const cleanStr = str.trim();
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr ? 'palindrome' : 'not palindrome';
}
console.log(isPalindrome('     madam   '));

//fibonacci sequence
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
    // Next fibonacci number = previous + one before previous
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}

//create a new string from a given string taking the first 3 chars and last 3 chars and ading them together 

const makeNewString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log('dhhklshfshfl');

//extract first half of a string
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('temp'));

//concatenate two strings except their first character

const concatenate = (str1, str2) =>
    str1.slice(1) + str2.slice(1);
console.log(concatenate('abc', 'def'));

//find out which one is neaest to 100
const closestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;
console.log(closestTo100(99, 1));



///program to check a given string contains 2 to 4 occurences of a specified character

const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length;
const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh', 'o'));
console.log(contains2To4('oh!', 'o'));


//program to get the largest even number from an array of integers

const largestEven = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));
console.log(largestEven([1, 2, 3, 4, 5, 6]));
console.log(largestEven([1, 2, 33, 4, 5, 6]));



///program to compare objects to determine if the first one contains the same properties as the second one

const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 4 };
const objC = { a: 1, b: 4, c: 1 };

const objectsEqual = (a, b) =>
    Object.keys(a).every(key => b[key]);

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));

//program to convert a comma separated csv string  to a 2D array. A new line indicates a new row in the array

const parseCSV = (csvString) =>
    csvString.split('\n').map(row => row.split(','));

const str = `abc,def,ghi
 jkl,mno,pqr
 stu,vwx,yza`;

console.log(parseCSV(str));

//program to generate a random hexadecimal color code
const getRandomHexNumber = () =>
    Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from({ length: 6 }).map(getRandomHexNumber).join('');

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());




//Find Number of Digits in Number
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1


const num_of_digits = x => {
    return x.toString().length;
}
console.log(num_of_digits(1000));


//Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]


const concat = (...narrs) => {
    let a = [];
    for (let i = 0; i < narss.length; i++) {
        for (let j = 0; j < narrs[i].length; j++) {
            a.push(narss[i][j]);
        }

    } return a;
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]


const arrayOfMultiples = (x, y) => {
    arr = []
    for (i = 1; i <= y; i++) {
        s = x * i
        arr.push(s)
    }
    console.log(arr);
}
console.log(arrayOfMultiples(17, 6));


///Write a JavaScript function to concatenates a given string n times (default is 1).
// Test Data:
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"


const repeat = (str, count) => {
    if (typeof (count) == "undefined") {
        count = 1
    }
    return count < 1 ? '' : new Array(count + 1).join(str);
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));


// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// Examples
// derivative(1, 4) ➞ 1

// derivative(3, -2) ➞ 12

// derivative(4, -3) ➞ -108

const derivative = (x, y) => {

}



//javascript program to find lcm of n lements in an array
const gcd = (x, y) => {

    if (b == 0)
        return a;
    return gcd(b, a % b)
}

const lcm = (x, y) => {

    let ans = arr[0]
    return lcm(ans, a % b)
}

//chunked array problem
const chunks = (arr, n) => {
    const chunked = [];
    for (let elem of arr) {
        let last = chunked[chunked.length - 1];

        if (!last || last.length === n)
            chunked.push([elem])
        else
            last.push(elem)
    }
    return chunked;
}




//How to convert an Object {} to an Array [] of key-value pairs in JavaScript

var obj = {
    "1": "ABvhdjh",
    "2": 7,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0
}
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

console.log(result);


///Anagram Substring Search (Or Search for all permutations)

//find out whether a given array contains majority element or not
const findmajority = (arr, n) => {
    let maxCount = 0;
    let index = -1; // sentinels

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }

        // Update maxCount if count of
        // current element is greater
        if (count > maxCount) {
            maxCount = count;
            index = i;
        }
    }

    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2)
        document.write(arr[index]);
    else
        document.write("No Majority Element");
}

console.log()

//[[3], 4, [2], [5], 1, 6]
//ans: [1, [2], [3], 4, [5], 6]

const sortIt = (arr) => {
    return arr.sort((a, b) => {
        let num1 = typeof a === "number" ? a : a[0];
        let num2 = typeof b === "number" ? b : b[0];
        return num1 - num2;
    });
}


console.log(sortIt([[3], 4, [2], [5], 1, 6]));


//sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 17
// sumPrimes([2, 3, 4, 11, 20, 50, 71]) ➞ 87
// sumPrimes([]) ➞ 0

function sumPrimes(arr) {
    let sol = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            sol += num;
        }
    }
    return sol;
}

const isPrime = (num) => {
    if (num == 2 || num == 3) {
        return true;
    }
    if (num == 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};

// chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]
// chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

function chunkify(arr, size) {
    let sol = [];
    while (arr.length) {
        sol.push(arr.splice(0, size));
    }
    return sol;
}

console.log(chunkify([2, 3, 4, 5], 2))


//You are given a number n. Determine whether n has exactly 3 divisors or not.
function isExactlyThree(n) {
    let divs = [1, n];
    if (n <= 3) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divs.push(i);
            divs.push(n / i);
        }
    }
    return new Set(divs).size === 3 ? true : false;
}



//Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
//The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

var generateTheString = function (n) {
    if (n % 2 === 0) {
        return "a".repeat(n - 1) + "b";
    } else {
        return "a".repeat(n);
    }
};


//Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function (s) {
    let sol = s.split(" ").map((word) => {
        let rev = word.split("");
        for (let i = 0, j = word.length - 1; i < j; i++, j--) {
            let temp = rev[i];
            rev[i] = rev[j];
            rev[j] = temp;
        }
        return rev.join("");
    });
    return sol.join(" ");
};


//Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd-length subarrays of arr.
// Example 1:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        for (let j = 0; j < arr.length - i; j++) {
            sum += arr.slice(j, j + i + 1).reduce((acc, curr) => acc + curr);
            console.log(arr.slice(j, j + i + 1));
        }
    }
    return sum;
};


//You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

// Example 1:

// Input: n = 7
// Output: 6
// Explanation: Details of the tournament: 
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.

var numberOfMatches = function (n) {
    let matches = 0;
    let reminder = 0;
    while (n) {
        n += reminder;
        reminder = n % 2;

        if (reminder) {
            n = (n - 1) / 2;
        } else {
            n /= 2;
        }
        matches += n;
    }
    return matches;
};


console.log(numberOfMatches(14))





