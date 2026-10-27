//Create a book object with title, author and price. Update its price.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99
};
book.price = 12.99;
console.log(book);

//Create a nested user object and print the city.
const user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};
console.log(user.address.city);

//Create an array of three product objects and print each product name.
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
products.forEach(product => console.log(product.name));

// Use destructuring to extract two properties from an object.
const { name, price } = products[0];
console.log(name, price);

// Use spread to copy an array and combine two arrays.
const newProducts = [...products];
const additionalProducts = [{ name: "Watch", price: 200 }];
const combinedProducts = [...newProducts, ...additionalProducts];
console.log(combinedProducts);

// Write a function that uses rest parameters to add any number of values.
function addNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(addNumbers(1, 2, 3, 4, 5));

// Use optional chaining and ?? to safely read a missing user's city and provide a fallback.
const missingUser = {
    name: "Bob"
};
console.log(missingUser.address?.city ?? "City not specified");