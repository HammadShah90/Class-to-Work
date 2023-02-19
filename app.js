// Chapter no 1 "ALERTS"

// alert("Error! Please enter a valid password");

// alert("Welcome to JS Land... \nHappy Coding!");

// alert("Welcome to JS Land...");

// alert("Happy Coding!");

// console.log("Hello... I can run JS through my web browser's console");

// Chapter no 2 "VARIABLES FOR STRINGS"

// var userName;

// var myName = "Muhammad Hammad";

// var message = "Hello World";

// alert(message);

// var studentName = "Jhone Doe"

// var studentAge = "15 years old"

// do

// var teamA = 50 + 20 + 15 + 3;

// var teamB = 20 + 50 + 9 + 3;

// if (teamA > teamB) {
//     console.log(` team1 you are the winner`);
// } else {
//     console.log(`team2 you are the winner`)
// }

// var text = +prompt("What is your number??");

// function myNumbers (oneNum, secondNum, thirdNum, forthNum) {

//     console.log(`${oneNum} my first Number`);
    
//     console.log(`${secondNum} my second number`)
    
//     console.log(oneNum + secondNum);

//     console.log(forthNum - thirdNum);
// }

// myNumbers();

// myNumbers(30, 65, 90 , 105);

// var text = +prompt("what is your number");

// function myNumbers (oneNum, secondNum, thirdNum) {
//     console.log(`${oneNum} this is my firtNumber `);
//     console.log(`${secondNum} this is my secondNumber `);
//     console.log(`${thirdNum} this is my secondNumber `);
//     console.log(oneNum - secondNum);
// }

// myNumbers(30, 65, 95);

// function decleration

// function myFunctionDecleration (firstName, lastname, age) {
//     return `My name is ${firstName} ${lastname} and my age is ${age}`;
// }
// myFunctionDecleration("Muhammad", "Hammad", 31);
// document.write(myFunctionDecleration("Muhammad", "Hammad", 31));


// function expression

// const myFunctionExpression = function (firstName, lastname, age) {
//     return `My name is ${firstName} ${lastname} and my age is ${age}`;
// }

// document.write(myFunctionExpression("Muhammad", "Hammad", 31));


// Function Arrow

// const myFunctionArrow = (firstName, lastname, age) => {
//     // return "my name is " + firstName + " " + lastname + " and my age is " + age;
//     return `My name is ${firstName} ${lastname} and my age is ${age}`;
// }

// document.write(myFunctionArrow("Muhammad", "Hammad", 31));


// function arrow shortcut

// const myFunctionArrowShortcut = (firstName, lastname, age) => `My name is ${firstName} ${lastname} and my age is ${age}`;

// document.write(myFunctionArrowShortcut("Muhammad", "Hammad", 31));


// var students = [];

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write(`1) ${qualifications[0]} <br >`);
// document.write(`2) ${qualifications[1]} <br >`);
// document.write(`3) ${qualifications[2]} <br >`);
// document.write(`4) ${qualifications[3]} <br >`);
// document.write(`5) ${qualifications[4]} <br >`);
// document.write(`6) ${qualifications[5]} <br >`);
// document.write(`7) ${qualifications[6]} <br >`);
// document.write(`8) ${qualifications[7]} <br >`);

// const students = ["Michael", "John", "Tony"];

// const studentsScore = [320, 230, 480];

// document.write(`Score of ${students[0]} is ${studentsScore[0]}. Percentage: ${studentsScore[0] / 500 * 100}% }`);

// var fruits = ["Apple", "Mango", "Banana", "Chiko", "Guava", "Grapefruit"];

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// const removeFruits = fruits.unshift("");


// console.log(fruits);
// console.log(removeFruits);


// // fruits.unshift("Musambi");

// // console.log(fruits);

// const addFruits = fruits.unshift("Musambi");

// console.log(addFruits);

// // fruits.push("Watermelon");

// // console.log(fruits);

// const pushFruits = fruits.push();

// console.log(pushFruits);

// fruits.pop();

// console.log(fruits);

// const popFruits = fruits.pop();

// console.log(popFruits);


// const addFruits = fruits.unshift("Melon");

// console.log(fruits);
// console.log(addFruits);

// const romFruits = fruits.shift();

// console.log(fruits);
// console.log(romFruits);


// function myName (num1, num2) {
//     var firstName = prompt("what is your first name");
//     var lastName = prompt("what is your last name");
//     return firstName + lastName
// }

// document.write(myName(firstName, lastName));


// function sum (x) {
//     return function (y) {
//         return x + y;
//     };
// }

// let add5 = sum(5);

// let result = add5(10);

// alert(result);


// var vegetables = ["carrot", "onion", "potato", "spring", "peas", "ginger", "garlic", "cabbage", "capsicum"];

// var askUserVegetable = prompt("Which vegetable do you want to buy..??");

// if (vegetables.includes(askUserVegetable) && vegetables.indexOf(askUserVegetable) == 0) {
//     document.write(`Yes ${askUserVegetable} is available now and this product index no is ${vegetables.indexOf(askUserVegetable)}`);
// }  else {
//     document.write(`Sorry your product is out of stock`);
// }


// var car = {
//     company: "Honda",
//     modelNo: "2002",
//     modelName: "Civic",
// };

// var askUser = prompt("tell me cars");

// document.write(car[askUser]);

var cars = [
    {
        company: "Honda",
        modelNo: "2002",
        modelName: "Civic",
    },
    {
        company: "Toyota",
        modelNo: "2005",
        modelName: "Corola",
    },
    {
        company: "Suzuki",
        modelNo: "2009",
        modelName: "Mehran",
    }
]

var askUser = +prompt("tell me cars index number");

var askuser2 = prompt("tell me car")

document.write(cars[askUser][askuser2]);