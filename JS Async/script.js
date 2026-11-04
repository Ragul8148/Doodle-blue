// async function
async function greet() {
    return "Hello, Student!";
}

greet().then((message) => {
    console.log(message);
});

// 1. Simple Promise
function register(success) {
    return new Promise((resolve, reject) => {
        if (success) resolve("Registration Successful");
        else reject("Registration Failed");
    });
}

// 2. Async/Await with Try, Catch, Finally
async function registration() {
    try {
        let result = await register(true);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Registration Process Completed");
    }
}

// 3. Sequential Execution
async function sequential() {
    console.log("Sequential Execution");
    console.log(await task1());
    console.log(await task2());
}

// 4. Parallel Execution using Promise.all()
async function parallel() {
    console.log("Parallel Execution");
    let results = await Promise.all([task1(), task2()]);
    console.log(results);
}

// Sample Tasks
function task1() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Task 1 Completed"), 1000)
    );
}

function task2() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Task 2 Completed"), 1000)
    );
}

// Run All Examples
registration();
sequential();
parallel();