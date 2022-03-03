var arr = [1, 2, 6, 9, 10]
var square = arr.map(function (x) {
    return x * x;
})
console.log(square);
console.log(arr.map(x => Math.pow(x, 3)));

var num = [-8, 10, -56, 89, 45, 24, -87, -0.12]
var neg = num.filter(x => x < 0).reduce((y, z) => y + z, 0)
console.log(neg);

var count = num.reduce((x, y) => x + y, 0)


//sum of numbers over an array
const sum = array => array.reduce((acum, number) => {
    return acum + number;
}, 0);
console.log({ sum: sum([1, 5, 9]) });

//sum of numbers multiplied by a factor
const sumProduct = array => array.reduce((acum, pair) => {
    const [number, factor] = pair;
    return acum + number * factor;
}, 0);
console.log({ sumProduct: sumProduct([[1, 1], [5, 3], [9, 2]]) });

//get the max value
const maxNumber = array => array.reduce((acum, number) => {
    if (!acum) return number;
    if (acum < numbr) return number;
    return acum;
}, null);
console.log({ maxNumber: maxNumber([1, 5, 9]) });


//calculating total population
let population = [
    {
        country: "USA",
        population: "3456"
    },
    {
        country: "Mexico",
        population: "6956"
    },
    {
        country: "Canada",
        population: "9806"
    }

];

let totalPopulation = population.reduce((acc, elem) => acc + elem.population, 0);
console.log(totalPopulation);


//calculating flatvalues
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatValues = data.reduce((total, value) => {
    return total.concat(value);
}, []);
console.log(flatValues);


//calculating frequency of names
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
}, {})
console.log(countedNames);



//calculating avg of elements in an array
function average(arr1) {
    return arr1.reduce((acum, number) => {
        return acum + number;
    }, 0) / arr1.length
}
console.log(average([1, 2, 3, 4, 5]));


//calculating avg of elements in an array
function average(arr) {
    return arr.reduce((a, b) => a + b) / arr.length
}
console.log(average([1, 2, 3, 4, 5])); //output: 3


var scores = [89, 76, 47, 95]
var initialValue = 0
var reducer = function (accumulator, item) {
    return accumulator + item
}
var total = scores.reduce(reducer, initialValue)
var average = total / scores.length
console.log(average);


var arr = [1, 2, 3, 4, 5];
//count odd number:
console.log(arr.reduce((a, b) => a + (b % 2 ? 1 : 0), 0)); //output: 3
//count even number:
console.log(arr.reduce((a, b) => a + (b % 2 ? 0 : 1), 0)); //output: 2


//transform array to an object
var votes = [
    'tacos',
    'pizza',
    'pizza',
    'tacos',
    'fries',
    'ice cream',
    'ice cream',
    'pizza'
]

var initialValue = {}
var reducer = function (tally, vote) {
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }
    return tally;
}
var result = votes.reduce(reducer, initialValue)
console.log(result);


//transform object to an array

var maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200
}

var maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200
}
var arr = [];
for (var vehicle in maxSpeed) {
    arr.push([vehicle, maxSpeed[vehicle]])
}
console.log(arr);

