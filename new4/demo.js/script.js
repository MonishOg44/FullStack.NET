//TASK 1

const myConst = 10;

function myFunction() {
    let a = 20;
    console.log(a);
}

myFunction();

console.log(myConst);

//TASK2

//What is TypeError? How to Check the Error Position in a written Code?
//A TypeError in JavaScript occurs when a value is not of the expected type. For example, trying to call a non-function as a function or accessing properties on undefined or null values can lead to TypeErrors. To check the error position in the code, you can use the browser's developer console or Node.js terminal, which typically provides a stack trace indicating. We can try to use the run and debug in code editor to identify the issue to applying a break point to see the js code exection step by step as js itself is a sequence of steps 

//TASK 3

const num1 = 5;

function multiplyByTwo() {
    let num2 = 2;
    console.log(num1 * num2);
}
multiplyByTwo();

console.log(num1);
