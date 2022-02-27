//how eadabit works
function hello() {
    console.log("hello eadabit.com");
}
console.log(hello());

//return sum of two nos
var a = 6;
var b = 8;
console.log([a, b].reduce((a, b) => a + b, 0));

//function convert minutes into seconds
var a = 68;
console.log([a].reduce((a, b) => a = b * 60, 0));

//return the next number from the integer passed
const nextNumber = (a) => a + 1;
console.log(nextNumber(0));

//area of triangle
const areaOfTriangle = (b, h) => 1 / 2 * b * h;
console.log(areaOfTriangle(7, 4));

//convert age to days
const ageToDays = (a) => a * 365;
console.log(ageToDays(5));

//return the first element of an array
var arr = [1, 2, 3];
console.log(arr[0]);

//power calculator
const powerCalc = (a, b) => a * b;
console.log(powerCalc(230, 10));

//max edge of triangle
const maxEdge = (a, b) => a + b - 1;
console.log(maxEdge(8, 10));


//return the remainder from two nos
const rem = (a, b) => a % b;
console.log(rem(-9, 45));


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
