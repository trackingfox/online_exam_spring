

    console.log("hello world");







const numbers = [1,2,3];
const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message .split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

try{
        const numbers =[1,2,3,4];
        const count = countOccurences (null,1);
        console.log(count);
    }
    
catch(e){
    console.log(e.message);
}    

function countOccurences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('Invalid array');

     return array.reduce((accumulator, current) =>{
         const occurence = (current === searchElement) ? 1 : 0;
         return accumulator + occurence;
     }, 0);   
}

// function sum(a,b){

//     let total =0;
//     for(let value of arguments)

//     console.log(arguments);
//     return a+b; // 1+undefined
// }

// const person ={
//     firstName: 'Mosh',
//     lastName: 'hamedani',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     }
// };


// person.fullName = 'John Smith';

// //getters => access properties
// //setters => change them


// console.log(person.fullName());


// const circle = {
//     radius: 1,
//     location: { 
//         x: 1,
//         y: 1
//     },

//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();



//Factory function
// function createCircle(radius){
//     return{
//         radius,
//         draw: function(){
//             console.log('draw');

//         }
//     };
// }

//const circle = createCircle(1);

//Constructor function
// function Circle(radius){
//     console.log('this',this);
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const another = new Circle(1); 


function Circle(radius){
    let color ='red';

    this.radius = radius;
    this.defaultLocation = {x: 0, y:0};

    this.computeOptimumLocation = function(factor){

    }

    this.draw = function(){
        this.computeOptimumLocation(0.1);

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();



let num = Number("346")

console.log(num, typeof num);

let x
console.log(x, typeof x);
x = 8
console.log(x, typeof x);
x = x + ""
console.log(x, typeof x);

x = x - 2
console.log(x, typeof x);

x = !x
console.log(x, typeof x);


//ARROW FUNCTION

// let greet = function(user){
//     console.log("Hello " +user);
//     return 1;
// }

// console.log(greet('Navin'));

//     let add = (num1,num2) => num1 + num2;        
//     let result = add(5,6)
//     console.log(result);

// //methods in javascript

// let laptop2 = {
//     cpu : 'i9',
//     ram : 16,
//     brand : 'HP',

//     greet: function(){
//         console.log(this.cpu);
//     }
// }

// //laptop.greet();

// let laptop1 = {
//     cpu : 'i7',
//     ram : 16,
//     brand : 'AppleP',

//     getConfig: function(){
//         console.log(this.cpu);
//     }
// }


// let laptop3 = {
//     cpu : 'i9',
//     ram : 16,
//     brand : 'HP',

//     getConfig: function(){
//         console.log(this.cpu);
//     }
// }




//DIFFERENT TYPES OF DATA IN ARRAY

let data = ['Navin' , 5, {tech: 'JS'}, 
function(){ console.log("Hello World"); }];


console.log(data);

data[3]();



//foreach
let nums =[42,51,24,98,65,12];

nums.forEach((n,i,nums) => {
    console.log(n,i,nums);
});


//Array method filter map

// nums.forEach( n =>{

//     console.log(n);

// });

// nums.filter( n => n%2===0)
//     .map( n => n*2)
//     .forEach( n => {
//         console.log(n);
//     });

let result = nums.filter( n => n%2===0)
    .map( n => n*2)
    .reduce((a,b) => a+b);


console.log(result);  


//MAP

let map = new Map();

map.set("Sharif", "Java");
map.set("Kiran", "Android");
map.set("Chirag", "ML");
map.set("NAvin", "Blocchain");

for(let [k,v] of map){
    console.log(k," : ",v);
}

map.forEach((k,v) => {
    console.log(k, " : ", v);
});

console.log(map.has("Chirag"));


//SET
let nums1 = new Set("bookkeeper");

nums1.add(3);
nums1.add(3);
nums1.add(3);
nums1.add("navin");
nums1.add("Kiran");
nums1.add("Chirag");

console.log(nums1.has("navin"));



