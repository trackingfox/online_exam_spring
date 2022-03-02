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


//Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1


const potatoes = (txt) => {
    str = "potato"
    M = str.length;
    N = txt.length;
    res = 0;

    /* A loop to slide str[] one by one */
    for (var i = 0; i <= N - M; i++) {
        /* For current index i, check for
    pattern match */
        var j;
        for (j = 0; j < M; j++) {
            if (txt.charAt(i + j) != str.charAt(j)) {
                break;
            }
        }

        // if str[0...M-1] = txt[i, i+1, ...i+M-1]
        if (j == M) {
            res++;
            j = 0;
        }
    }
    return res;
}

console.log(potatoes('potatoapplepotatoapplepotato'));


//Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// Examples
// binary(1) ➞ "1"
// // 1*1 = 1

// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5

// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10

const binary = (num1) => num1.toString(2);
console.log(binary(5));


//Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false


