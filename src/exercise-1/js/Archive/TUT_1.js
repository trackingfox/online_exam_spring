var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// What you need
[20, 24, 56, 88]


var officersIds = officers.map(function (officer) {
    return officer.id
});


const officersId = officers.map(officer => officer.id);

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


const totalYears1 = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});


var rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
    return pilot.faction === "Empire";
});