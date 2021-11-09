//1.java streams.io
//2.code with mosh tutorial1
//3. medium blog filter, reduce, map, foreach
//4 complete homework


let xyz = [
    { "count": 89, "name": "rohit", isDone: true },
    { "count": 80, "name": "sam", isDone: false },
    { "count": 78, "name": "ram", isDone: true },

];
//console.log(xyz);
console.log(xyz.filter(x => x.count > 80));