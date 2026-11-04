// Task 1: Print Name, Course and Number

console.log("Name: Pranav V");
console.log("Course: Cyber Security");
console.log("Number: 28");


// Task 2: Create Variables and Print Them

let event = "Tech Fest";
let ticketPrice = 200;
let seatsLeft = 50;
console.log("Event Name: " + event);
console.log("Ticket Price: " + ticketPrice);
console.log("Seats Left: " + seatsLeft);


// Task 3: Calculate Total Price and Check Whether It Exceeds 500
let price1 = 200;
let price2 = 200;
let price3 = 300;
let total = price1+ price2+ price3;
console.log("Total Price: " + total);
if (total > 500) {
    console.log("Total exceeds 500");
} else {
    console.log("Total does not exceed 500");
}

// Task 4: Check Positive, Zero or Negative
let num1 = -5;
if (num1 > 0) {
    console.log("Positive");
} else if (num1 == 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}

// Task 5: Print Even Numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}