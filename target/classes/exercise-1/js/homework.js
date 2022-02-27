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


var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
//[20, 24, 56, 88]

//using forEach()
var officersIds = [];

officers.forEach(function (officer) {
    officersIds.push(officer.id);
});
console.log(officersIds);

//Using .map()
var officersIds = officers.map(function (officer) {
    return officer.id
});


//reduce 

var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);


//combination of .map, .reduce, .filter
var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];


//filtering personal whose isForceUser: true
var jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;
});

//calculating scores (adding pilot score and shooting score) .creating array of personnel whose is ForceUser: true
var jediScores = jediPersonnel.map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
});


var totalJediScore = jediScores.reduce(function (acc, score) {
    return acc + score;
}, 0);



var totalJediScore = personnel
    .filter(function (person) {
        return person.isForceUser;
    })
    .map(function (jedi) {
        return jedi.pilotingScore + jedi.shootingScore;
    })
    .reduce(function (acc, score) {
        return acc + score;
    }, 0);