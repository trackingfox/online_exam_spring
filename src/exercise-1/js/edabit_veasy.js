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

//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
// Examples
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

const footballPoints = (wins, draws, losses) => wins * 3 + draws * 1 + losses * 0;
console.log(footballPoints(3, 4, 2));


//6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) ➞ 4

// bitwiseOR(7, 12) ➞ 15

// bitwiseXOR(7, 12) ➞ 11

const bitwiseAND = (a, b) => a & b;
console.log(bitwiseAND(7, 12));

const bitwiseOR = (a, b) => a | b;
console.log(bitwiseOR(7, 12));

const bitwiseXOR = (a, b) => a ^ b;
console.log(bitwiseXOR(7, 12));


//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

const matchHouses = step =>
    step === 0 ? 0 : step === 1 ? 6 : step === 2 ? 11 : 11 + (step - 2) * 5
console.log(matchHouses(4));



// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Examples
// shiftToLeft(5, 2) ➞ 20

// shiftToLeft(10, 3) ➞ 80

// shiftToLeft(-32, 2) ➞ -128

// shiftToLeft(-6, 5) ➞ -192

// shiftToLeft(12, 4) ➞ 192

// shiftToLeft(46, 6) ➞ 2944
const shiftToLeft = (a, b) => {
    let x;
    x = a * Math.pow(2, b);
    return x;
};
console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(12, 4));