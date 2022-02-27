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

const alphabeticalOrder = (str) => str.split('').sort((a, b) => a > b ? 1 : -1).join('');
console.log(alphabeticalOrder('webmaster'));


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



