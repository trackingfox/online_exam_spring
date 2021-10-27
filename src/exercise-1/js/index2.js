console.log('hello world');


//Factory function
function createCircle(radius){
    return  {
        radius,
        draw: function(){
            console.log('draw')
        }
    };
}

const circle = createCircle(1);


//Constructor Function
function Circle(radius){
    console.log('this',this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);


//Examples of factory functions
function createStudent(firstName, lastName)
{
    let student = {
        firstName: firstName,
        lastName: lastName,
        getFullName: function(){
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }
    return student;
}

let student1 = createStudent("James", "Dino");
console.log(student1);


//Example of constructor function

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let student2 = new Student("John","Doe");
console.log(student2);



//Enuerating properties
function Circle1(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle1 = new Circle1(10);

for(let key in circle1 ){
    if(typeof circle1[key] !== 'function')
        console.log(key, circle1[key]);
}

const keys = Object.keys(circle1);
console.log(keys);

if('radius' in circle1)
    console.log('Circle has a radius ');




    //ABSTRACTION

    function Circle2(radius){
        this.radius = radius;
        this.defaultLocation = {x: 0, y:0};
        this.computeOptimumLocation = function(factor) {

        }

        this.draw = function() {
            this.computeOptimumLocation();
            console.log('draw');
        };
    }

    const circle2 = new Circle2(10);
    circle2.computeOptimumLocation(0.1);
    circle2.draw();

//Abstraction Implementation
    function Circle3(radius){
        this.radius = radius;
        let defaultLocation = {x: 0, y: 0};
        let computeOptimumLocation = function(factor) {

        }

        this.draw = function() {
            
            computeOptimumLocation(0.1);
            //defaultLocation
            //this.radius
            console.log('draw');
        };
    }

    const circle3 = new Circle3(10);
    circle3.draw();


   // getters and setters
//    function Circle4(radius){
//     this.radius = radius;
//     let defaultLocation = {x: 0, y: 0};
//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     };


//     this.draw = function() {
//         console.log('draw');
//     };

//     Object.defineProperty(this,'defaultLocation',{
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value){
//             if(!value.x || !value.y)
//                 throw new Error('invalid location');

//             defaultLocation = value;
//         }
    
//     });
   
// }

// const circle4 = new Circle4(10);
// circle4.defaultLocation = 1;
// circle4.draw();


//STOPWATCH EXERCISE
function Stopwatch(){
    let startTime , endTime, running, duration = 0;
    this.start = function(){
        if(running)
            throw new Error('Stopwatch has already started');

            running = true;

            startTime = new Date();
        
    };

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not started');

         running = false;
         
         endTime = new Date();

         const seconds = (endTime.getTime() - startTime.getTime())/1000;
         duration += seconds;


    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this,'duration',{
        get: function() { return duration; }
    });
}



//prototype Vs Instance members
function Circle5(radius){
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
    // this.draw = function(){
    //     console.log('draw');
    // }
}

Circle5.prototype.draw = function(){
    this.move();
    console.log('draw');
}

const c1 = new Circle5(1);
const c2 = new Circle5(1);

Circle5.prototype.toString = function() {
    return 'Circle with radius '+ this.radius;
}


//Iterating instance and prototype members
function Circle6(radius){
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c3 = new Circle6(1);

//prototype members
Circle6.prototype.draw = function(){
    console.log('draw');
}

//c3.draw();

//Returns instance members
console.log(Object.keys(c1));

//Returns all members (instance+ prototype)
for(let key in c1) console.log(key);


//calling the super constructor
function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle7(radius , color){
    Shape.call(this, color);

    this.radius = radius;
}

Circle7.prototype = Object.create(Shape.prototype);
Circle7.prototype.constructor = Circle7;

Circle7.prototype.draw = function(){
    console.log('draw');
}



//PROTOTYPICAL INHERITANCE

function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focussed');
}

function HtmlSelectElement1(items1 = []){
    this.items1 = items1;
}

//POLYMORPHISM

function HTMLSelectElement(items = []){
    this.items = items;

    this.addItem = function(item){
        this.items.push(item);
    }

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1);
    }

    this.render = function(){
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

//const renderItem = item => `<option>${item}</option>`;


function HtmlImageElement(src){
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;










