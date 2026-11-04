let evenName = "Tech Fest";

console.log("Hello, World!");
console.log(10 + 5);
console.log(evenName);

console.log(59+49);

//type conversion and coersion
console.log('5' + 6); //56
console.log('5' - 6);  //-1     
console.log(String(5) + 6); //56

//truthy and falsy values,combined conditions
let age=20;
if(age>18 && age<65){
    console.log('You are eligible to work');
}
else{
    console.log('You are not eligible to work');
}
//switch case
let day = 'Monday'; 
switch(day){
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    default:
        console.log('Not a valid day');
}

// == and === operator
let a = 5;
let b = '5';
console.log(a == b); // true
console.log(a === b); // false
// ternary operator
let Age = 20;
let eligibility = (Age >= 18) ? 'Eligible' : 'Not Eligible';
console.log(eligibility);
//for loop
let i=0
for( i; i<=5; i++){
    console.log(i);
}
console.log("check here",i);
//while loop
let j=0;    
while(j<5){
    console.log(j);
    j++;
}
//do while loop
let k=0;
do{
    console.log(k);
    k++;
}while(k<5);    

//for of and for in loop
let arr = [10, 20, 30, 40, 50]; 
for (let value of arr) {
    console.log(value); // 10, 20, 30, 40, 50
}   
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]); // a 1, b 2, c 3
}


