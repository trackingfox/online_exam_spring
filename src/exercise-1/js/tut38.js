
console.log('This is my tutorial');

//button with id myBtn
//let myBtn = doument.getElementById("myBtn");

//div with id content
//let content = doument.getElementById("content");

//FETCH API

// function getData() {
//     console.log("started getData");
//     url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log("Inside first then")
//         return response.json();
//     }).then((data) => {
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// function postData() {
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"sharif123","salary":"123","age":"23"}'
//     params = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         // body: JSON.stringify(data)
//         body: data
//     }
//     fetch(url, params).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData()
// console.log("After running getDaa")

//postData()



let students = {
    "steve": 89,
    "james": 80,
    "lynn": 78

};
let sum = 0;
let cnt = 0;
let ave = 0;

scores = Object.values(students);
sum = scores.reduce(function (init, val) {
    return (init + val)
}, 0);

ave = sum / scores.length;
console.log(ave);

passing = scores.filter(function (val) {
    return val > 80
})

let email = Object.keys(students);
console.log(email);
let allData = Object.entries(students);
console.log(allData);


let xyz = [
    { "count": 89, "name": "rohit", isDone: true },
    { "count": 80, "name": "sam", isDone: false },
    { "count": 78, "name": "ram", isDone: true },

];

sum = 0;
xyz.forEach(x => {
    sum = sum + x.count;
    console.log(sum);
})

//sum of counts

xyz.forEach(x => {
    console.log(x.count);
})



//array of names


//array of {name and count}

//medium post example practice

//try to solve movie