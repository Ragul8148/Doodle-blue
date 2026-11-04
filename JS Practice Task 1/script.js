// Write calculateTotal(price, quantity) that returns the total.
function calculateTotal(price, quantity) {
    const total = price * quantity;    
    return(total);
} 
console.log(calculateTotal(10, 5));

//Write a function that accepts a name and prints a greeting.
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Pranav");

//Create an array of five event names and print its length.
const events = ["Concert", "Festival", "Conference", "Meetup", "Workshop"];
console.log(events.length);

//Use filter() to keep numbers greater than 10.
const numbers = [5, 15, 25, 35, 45];
const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);

//Use map() to create a new array with each number doubled.
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

//Use reduce() to total [20, 30, 40].
const total = [20, 30, 40].reduce((sum, num) => sum + num, 0);
console.log(total);

//Explain which methods change the original array.
//sort(), reverse(), splice(), pop(), shift(), unshift() are methods that change the original array.