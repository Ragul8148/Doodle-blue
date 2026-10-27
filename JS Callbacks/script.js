//setTimeout is a function that takes two parameters, a callback function and a time in milliseconds. It will execute the callback function after the specified time has passed.
console.log("One");
setTimeout(() => {console.log("Two");}, 1000);
Promise.resolve().then(() => {console.log("Promise");});
console.log("Three");

//setInterval is a function that takes two parameters, a callback function and a time in milliseconds. It will execute the callback function repeatedly at the specified time interval.
//setInterval(() => {console.log("Four");}, 2000);
//clearInterval(); // This will stop the setInterval from executing after the first call.

//clearInterval is a function that takes one parameter, the interval ID returned by setInterval. It will stop the interval from executing further.
const timer = setInterval(() => {console.log("Five");
    clearInterval(timer);
    console.log("Interval cleared");
}, 3000);


let count = 0;

const timers = setInterval(() => {
    console.log("two");
    count++;

    if (count === 3) {
        clearInterval(timers);
    }
}, 3000);

console.log("Start");
setTimeout(() => console.log("Time"), 0);
Promise.resolve().then(() => console.log("Pro"));
console.log("Finish");

