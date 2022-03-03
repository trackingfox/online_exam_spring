console.log("This is lecture 37");

//Pretend that this response is coming from server

const students = [
    { name: "sharif", subject: "Javascript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        cancelIdleCallback();
    }, 3000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Student has been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent, getStudents);

