
console.log('This is my tutorial');

//button with id myBtn
//let myBtn = doument.getElementById("myBtn");

//div with id content
//let content = doument.getElementById("content");

//FETCH API

function getData() {
    console.log("started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    })
}

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"sharif123","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
        body: data
    }
    fetch(url, params).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

// console.log("Before running getData")
// getData()
// console.log("After running getDaa")

postData()