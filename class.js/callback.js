// // hello();
// // goodbye();
// // function hello() {
// //     console.log('hello!');
// // }
// function goodbye() {
//      console.log('goodbye!');
//  }

// //if we need to goodbye first we have to use it as a parameter of hello function
// hello(goodbye);
// function hello(callback) {
//     console.log('hello!');
//     callback();
// }

//funnction 1
function addition(a, b){
    return a + b
}
//function 2
function subtraction(a, b){
    return a - b
}

function calculate(callback){
    let data = callback(10, 20);
    console.log(data)
}

calculate(addition)
calculate(subtraction)

// ASYNCHRONOUS CALLBACK EXAMPLES
console.log('\n--- Asynchronous Callbacks ---\n');

// Example 1: setTimeout with callback
function fetchData(callback) {
    console.log('Fetching data...');
    setTimeout(() => {
        const data = { id: 1, name: 'John', email: 'john@example.com' };
        callback(data);
    }, 2000); // 2 second delay
}

function displayData(data) {
    console.log('Data received:', data);
}

fetchData(displayData);

// Example 2: Read file simulation with callback
function readFile(filename, callback) {
    console.log(`Reading file: ${filename}`);
    setTimeout(() => {
        const fileContent = `This is content from ${filename}`;
        callback(fileContent);
    }, 1500);
}

function processFile(content) {
    console.log('File processed:', content);
}

readFile('document.txt', processFile);

// Example 3: Chaining multiple async operations with callback hell
function step1(callback) {
    setTimeout(() => {
        console.log('Step 1 completed');
        callback('Step 1 result');
    }, 1000);
}

function step2(data, callback) {
    setTimeout(() => {
        console.log('Step 2 completed with:', data);
        callback('Step 2 result');
    }, 1000);
}

function step3(data, callback) {
    setTimeout(() => {
        console.log('Step 3 completed with:', data);
        callback('Final result');
    }, 1000);
}

// Executing steps sequentially
step1((result1) => {
    step2(result1, (result2) => {
        step3(result2, (finalResult) => {
            console.log('All steps completed. Final:', finalResult);
        });
    });
});

// Example 4: Async operation with error handling
function fetchUserData(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    setTimeout(() => {
        if (userId > 0) {
            callback(null, { userId, name: 'Alice', status: 'active' });
        } else {
            callback('Invalid user ID', null);
        }
    }, 1000);
}

function handleUserData(error, user) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('User data:', user);
    }
}

fetchUserData(1, handleUserData);
fetchUserData(-1, handleUserData);