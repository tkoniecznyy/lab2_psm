//zadanie 3

import ("lodash");

const _ = require("lodash");

const user ={
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
}


function weightAverage(user) {
    let weightav = user.allGrades.reduce((prevValue,{grades,weight}) =>(
        prevValue + (_.sum(grades) / grades.length * weight)
    ),0)/user.allGrades.reduce((prevValue,{weight})=>(
        prevValue + weight
    ),0);
    console.log(weightav);
}

weightAverage(user);


//zadanie 4
console.log(_.find(user.allGrades,function (obj) {
    return (obj.weight==1);
}));



//zadanie 5
const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

function getMails(collections) {
    return _.filter(collections,function (obj) {
        return validateEmail(obj); //.zródło poniżej
    });
}

 // source: "https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript"

function validateEmail(email) {
    const symb = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return symb.test(String(email).toLowerCase());
}

console.log(getMails(collections).sort());