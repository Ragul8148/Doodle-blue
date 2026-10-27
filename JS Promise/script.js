//Create a promise
const registration = new Promise((resolve, reject) => {
    const isvalid = true; // Simulating a condition for registration
    if (isvalid) {
        resolve("Registration successful!");
    } else {
        reject("Registration failed!");
    }
});
registration.then(result => {
    console.log(result);
});

//using .then() for success
registration.then(result => {
    console.log(result);
});

//using .finally() for cleanup
registration.finally(() => {
    console.log("Registration process completed.");
});

function registrationStudnt(isSuccessful) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccessful) {
                resolve("Registration confirmed");
            } else {
                reject(new Error("Registration failed"));
            }
        }, 1000);
    });
}

registrationStudnt(true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    });

    async function name(params) {
                
    }