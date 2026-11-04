//Global scope
const appName = "Campus Events";
function showApp(){
    console.log(appName);
}
showApp(); // Output: Campus Events

/*
// Hoisting
greet();
function greet() {
    console.log("Hello!");
} //Hello!

console.log(age);
var age = 20; //Undefined
*/ 

//Function Scope
function registerStudent(){
    const studentName = "Pranav";
    console.log(studentName);
}
registerStudent();
// console.log(studentName); //RefernceError


//Block Scope
{
    let age = 20;
    console.log(age); // 20
}
//console.log(age); // Error: age is not defined

//Lexical Scope
let name = "Pranav";

function greet() {
    console.log(name);
}

greet(); // Pranav



//Tasks - Scopes, Hoistting and Closure
//Create a global campusName and print it from inside a function.
const campusName = "Campus Events";
function printCampusName() {
    console.log(campusName);
}

printCampusName();

//Create an if block with let and var variables; test which is accessible outside.
if (true) {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
}
console.log(varVariable); // Accessible
//console.log(letVariable); // Error: letVariable is not defined

//Predict var and let behavior when logged before declaration. Run safe examples separately.
 

//Create makeCounter with a private count variable and return a function that increments it.
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1