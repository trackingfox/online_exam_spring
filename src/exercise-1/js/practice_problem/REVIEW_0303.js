// Recursions
// example find factorial factorial
const factorial = (x) => {
    fact = 1;
    for (i = x; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));

const factorial = (x) => {
    if (x > 1)
        return x * factorial(x - 1);
    else return 1;
}
console.log(factorial(5));


const fac = x => { return x > 1 ? x * fac(x - 1) : 1 }
console.log(fac(5));


// Print fibonnaci (n)
// 0,1,1,2,3,5,.....

const fibonacci = x => {
    a = 1;
    b = 0;
    count = 1;
    console.log(b);
    console.log(a);
    while (count++ <= x) {
        sum = a + b;
        b = a;
        a = sum;
        // count++;
        console.log(sum);
    }

}
console.log(fibonacci(12));



/* 
17.5  Fibonacci series (n)
Lets Return an array of fibonacci series, print the entire series to nth term
*/

const fibo = x => {
    var a = 1;
    b = 0;
    count = 2;
    let arr = [0, 1]
    console.log(b);
    console.log(a);
    while (count <= x) {
        sum = a + b;
        b = a;
        a = sum;
        arr[count++] = sum;
    }
    return arr;
}
console.log(fibo(5));


const fib = x => {
    let arr = [], n1 = 0, n2 = 1;
    arr.push(n1)
    arr.push(n2)
    while (--x > 0) { let n3 = n1 + n2; n1 = n2; n2 = n3; arr.push(n3) }
    return arr
}

console.log(fib(5));

let b = [1, 2, 3, "towshif", 3, 4, 5, "skds"]
console.log(b);



/* 18. Fibonacci nth term 
Implement a function that returns the fibonacci number at a given index.
fibonacci(1) ->  1
fibonacci(2) ->  1
fibonacci(3) ->  2
fibonacci(6) ->  8
fibonacci(10) ->  55
*/
const fibonaciterm = x => {
    a = 0; // i = 0 
    b = 1; // i = 1

    while (x-- > 1) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum
}
console.log(fibonaciterm(6));

const fiboterm = x => {
    if (x > 2)
        return fiboterm(x - 1) + fiboterm(x - 2)
    else
        return 1

}
console.log(fiboterm(6));


const f = x => x > 2 ? f(x - 1) + f(x - 2) : 1
console.log(f(6));


const f = x => {
    let p = ("" + x).split('').reverse().join('')
    let y = 0 + p
    return x > p ? true : false

}
console.log(f(71));

const f = x => {
    let arr = []
    while (Math.floor(x / 10) > 0) {
        //arr.push(x % 10)
        x = Math.floor(x / 10)
        console.log(x);
    }
    console.log(arr);
}

console.log(f(231));


console.log(Math.floor(5.95));
console.log(Math.floor(0.01));
console.log(Math.floor(0.3));

console.log(231 % 10);
console.log(31 % 10);
console.log(1 % 10);




console.log("45".split('').reverse().join(''))