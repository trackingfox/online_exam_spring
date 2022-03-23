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

// The JavaScript built-in method `toString([radix])` returns a string value in a specified radix (base). Here, toString(2) converts the decimal number to binary number.

const binary = (num1) => num1.toString(16);
console.log(binary(456));


//Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false


const canNest = (arr1, arr2) => {




    newarr1 = arr1.min()
    newarr2 = findMinMax(arr2)

    if (newarr1[0] < newarr2[0] && newarr1[1] > newarr2[1])
        console.log("true");
    else
        console.log("false");

}

canNest([1, 2, 3, 4], [0, 6])

canNest([3, 1], [4, 0])

canNest([9, 9, 8], [8, 9])
canNest([1, 2, 3, 4], [2, 3])


const q = x => x / 10
console.log(q(10));

console.log(Math.min(...[1, 2, 3, 4]));

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

// Examples
// largestSwap(14) ➞ false

// largestSwap(53) ➞ true

// largestSwap(99) ➞ true






// We'll say that a "pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. Recursively compute the number of pairs in the given string.


// countPairs("axa") → 1
// countPairs("axax") → 2
// countPairs("axbx") → 1





// Count recursively the total number of "abc" and "aba" substrings that appear in the given string.


// countAbc("abc") → 1
// countAbc("abcxxabc") → 2
// countAbc("abaxxaba") → 2



// str = "frequency of unique chars in string"

// f compared to all chars and counted for occurrences = 1 
// col1 : col2 
// f        1 
// r        3
// e        3
// d        1 
//...
// this is nothing BUT a (key value pair) 

// [2,3,4,5,6,7] --> belong to one type ; meaning is different  

const freq = x => {
    dict = {}
    y = x.split('')
    console.log(y);
    y.forEach(ch => {
        // if ch exist in my dict then increments 
        // if ch doest not exist then create a new key value pair  key : 1
        dict[ch] = 1 + dict[ch]
        console.log(dict);
        // dict ['f'] = 6 ///   f:6 
        // dict ['e'] = 1 ///   e:1 
    });
}
console.log(freq("HEllo This is Sharif"));


const fr = str => {
    console.log(str);
    d = {};
    for (let c of str)
        d[c] = (d[c] + 1) || 1;
    // if (c in d) d[c]++; else d[c] = 1
}
console.log(fr("HEllo This is Sharif"));


// dict[key] = value //  -->  { key:value }


// Arrays
// Dics

let dict = {
    id: 123,
    name: "Anuj",
    age: 28,
    registered: true
}

//alternate of creating object
//Create a new Object
let dict = new Object()

//Populate data
dict["id"] = 123
dict["name"] = "Anj"
dict["age"] = 28
dict["registered"] = true

let dict = {
    "color": "red",
    1: [12, 14, 90],
    1.2: 123,
}


//access data using keys
dict["color"] //red
dict[1] //[12, 14, 90]
dict[1.2] //123

//Use key as a property 
dict.color //red


//iterate through key value pairs
let dict = new Object()

//Populate data
dict["id"] = 123
dict["name"] = "Anj"
dict["age"] = 28
dict["registered"] = true

for (const key of Object.keys(dict)) {
    console.log(key + "+" + dict[key]);
}

for (const value of Object.values(dict)) {
    console.log(value);
}


//We can also iterate over pairs of keys and values in the same loop using the Object.entries method.
for (const [key, value] of Object.entries(dict)) {
    console.log(key + ":" + value);
}


for (const [key, value] of dict.entries()) {
    console.log(key + ": " + value)
}

for (const key of dict.keys()) {
    console.log(key)
}

for (const value of dict.values()) {
    console.log(value)
}

// String handling
//assessing string characters
const a = 'hello'
console.log(a[1]);//e
console.log(a.charAt(1));//e

const a = 225; // number
const b = true; // boolean

//converting to string
const result1 = String(a);
const result2 = String(b);

console.log(result1); // "225"
console.log(result2); // "true"

//escape character
const nam = 'My name is \'Peter\'.';
console.log(nam);
//My name is 'Peter'.


// interations (different types in javascript)
// for each ; for in  ; for of ; while ; 
const car = {
    brakes: '2',
    tires: '4'
}
for (let i in car) {
    console.log(car[i]); // "2", "4"
}

const rgb = ['red', 'green', 'blue']

for (let key in rgb) {
    console.log(key); // logs "0", "1", "2"
}

for (let value of rgb) {
    console.log(value); // logs "red", "green", "blue"
}


// iterate array 
//Array.map() vs Array.forEach() 
const numbers = [1, 2, 3, 4];
const mapNumbers = numbers.map(function (number) {
    return number * 2;
});

console.log(mapNumbers);
// [2, 4, 6, 8]



// iterate over dict or {key:value} pairs
// if then else (short hand)
// 



/* 
7. Vowels
Given a string of words or phrases, count the number of vowels.
3 diff solutions:

*/



/* 
9. Reverse Array
Given an array of items, reverse the order.
 */
reverseArray1 = arr => {
    newArr = []
    arr.forEach(element => {
        newArr.unshift(element)
    })
    return newArr
}
console.log(reverseArra1y(['2345', 12, 5, "abc"]));



reverseArray2 = arr => {
    newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray2(['2345', 12, 5, "abc"]));


/* 
20. Staircase
For a given number of steps, print out a “staircase” using hashes and spaces.
Example: n = 4
#         
##        
###       
####


 */

staircase = x => {

}


/* 
21. Pyramid
For a given number of levels, print out a “pyramid” using hashes and spaces.
n=4 
   #   
  ###  
 ##### 
#######
*/
