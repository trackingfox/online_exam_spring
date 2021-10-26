

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





