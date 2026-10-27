const jsonString = '{"name": "Alice", "age": 30}';
const user = JSON.parse(jsonString); // Converts to a JavaScript object
console.log(user.name); // Output: Alice


const users = { name: "Aarav", age: 25, active: true };
console.log(JSON.stringify(users, null, 2));
