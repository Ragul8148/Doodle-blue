// if else if and else
let num = 10;
if (num > 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}

// Type Conversion and coercion 
console.log(Number("12")+3);
console.log(String(25));
console.log(Boolean(1));
console.log("12"+3);
console.log("12"-3);

//Combining Condition
let age=32;
let seatL=5;
if (age>=18 && age<0) {
    console.log("Eligiblle");
} else  {
    console.log("Not Eligible");
}

// Switch Statement 
let day="Saturday";
switch(day) {
    case "Monday":
        console.log("Working Day");
        break;
    case "Tuesday":
        console.log("Working Day");
        break;
    case "Wednesday":
        console.log("Working Day");
        break;
    case "Thursday":
        console.log("Working Day");
        break;
    case "Friday":
        console.log("Working Day");
        break;
    case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
}  

//For Loop
for (let i=1;i<=5;i++) {
    console.log(i);
}

// while and do...while
let count =1;
while (count<=3) {
    console.log(count);
    count++;
}

let number=5;
do{
    console.log(number);
    count++; 
} while(count<=3)


// for...of and for...in
const events = ["Talk","Workshop","Hackathon"];
for (const event of events) {
    console.log(event);
}

const student = { name: "Pranav", year:2};
for (const key in student) {
    console.log(key,student[key]);
}

// == and === operator
let a = 5;
let b = '5';
console.log(a == b); // true
console.log(a === b); // false

// ternary operator
let Ages = 20;
let eligibility = (Ages >= 18) ? 'Eligible' : 'Not Eligible';
console.log(eligibility);

// Function
function greet() {
    console.log("Hello");
}
greet();

// Return Values
function add(a,b) {
    return a+b;
}
const result=add(4,6);
console.log(result);



//Arrow function
const addition = (a, b) => {
    return a + b;
};
console.log(addition(10, 20));

//Default Parameter
function great(name = "Student") {
    console.log("Hello " + name);
}
great("Pranav");
great();

//Scope
let n = "Pranav";  // Global scope
function gret() {
    let message = "Hello";  // Local scope
    console.log(message);
    console.log(n);
}
gret();
console.log(n);

//Parameter and arguments
function greeet(name) {
    console.log("Hello, " + name);
} 
greeet("Sri");


const numbers = [10, 20, 30, 40, 50];
// 1. includes() - Check if an element exists
console.log("Includes:", numbers.includes(30));
// 2. indexOf() - Find the index of a specific element
console.log("IndexOf:", numbers.indexOf(40));
// 3. find() - Find the first element that satisfies a condition
console.log("Find:", numbers.find(num => num > 25));
// 4. findIndex() - Find the index of the first element that satisfies a condition
console.log("FindIndex:", numbers.findIndex(num => num > 25));


const numb = [10, 20, 30, 40, 50];

// 1. forEach() - Executes a function for each element
console.log("Using forEach():");

numbers.forEach(num => {
    console.log(num);
});

// 2. map() - Creates a new array by transforming each element
const resu = numb.map(num => num * 2);
console.log("Using map():", resu);

const sq = a=> a+a;
console.log(sq(3));


const numbe = [40, 10, 50, 20, 30];

// 1. sort() - Sorts the array in ascending order
const ascending = [...numbe].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);

// Sorts the array in descending order
const descending = [...numbe].sort((a, b) => b - a);
console.log("Descending Order:", descending);

// 2. reverse() - Reverses the order of elements
const reversed = [...numbe].reverse();
console.log("Reversed Array:", reversed);

//Use reduce() to total [20, 30, 40].
const total = [20, 30, 40].reduce((sum, num) => sum + num, 0);
console.log(total);


//Objects methods

const students = {
    name: "Pranav",
    age: 21,
    department: "Cyber Security"
};
//accessing object properties using dot notation
console.log(students.name);
console.log(students.age);
console.log(students.department);

//accessing object properties using bracket notation
console.log(students["name"]);
console.log(students["age"]);
console.log(students["department"]);

//adding new properties to an object
students.year = 2;
console.log(students.year);

//updating existing properties of an object
students.age = 22;
console.log(students.age);

//deleting properties from an object
delete students.department;
console.log(students);

//array of objects
const studentss = [
    { name: "Pranav", age: 21, mark: 90 },
    { name: "Arun", age: 20, mark: 85 },
    { name: "Kumar", age: 22, mark: 95 }
];

// Access the first object
console.log(studentss[0]);

// Access properties using dot notation
console.log(studentss[0].name);
console.log(studentss[1].age);

// Access properties using bracket notation
console.log(studentss[0]["mark"]);
console.log(studentss[2]["name"]);

// Loop through the array of objects
studentss.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Mark: ${student.mark}`);
});

//adding a new object to the array
studentss.push({ name: "Ravi", age: 23, mark: 88 });
console.log(studentss);

//updating an object in the array 
studentss[1].mark = 90;
console.log(studentss);

//deleting an object from the array
studentss.splice(0, 1);
console.log(studentss);
