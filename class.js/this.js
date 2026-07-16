// // function sum(a, b) {
//     console.log("Calculating the sum of", a, "and", b);
// }
// sum(5, 10);

// let numbers = [1,2,3,4,5];
// let [a,b,c,d] = numbers;
// console.log("The first four numbers are:", a, b, c, d);


// let a = 10;
// let b = 20;

// let temp = a;
// a = b;
// b = temp;
// console.log(`a: ${a}, b: ${b}`);

// let data1 = [1, 2, 3, 4, 5];//shallow  copy
// let data2 = [6,7,8,9,];
// let numbers = [...data1, ...data2];
// console.log(numbers);

// function add(x, y) {
//     console.log("Adding", x, "and", y);
// }
// let numbers = [3, 4];
// add(...numbers);

// function sum(...numbers) {
// }
// sum(1, 2, 3, 4, 5);
// let data1 = [1, 2, 3];
// let data2 = [4, 5, 6];
// let allData = [...data1, ...data2];
// let [first, ...rest] = allData;
// console.log("First number:", first);
// console.log("Rest of the numbers:", rest);

// function sum (...numbers) {
// let data1 = [1, 2, 3];
// console.log("Data1:", data1[0]);
// }

// let data = {a:1, b:2, c:3};
// let {c,d} = data;
// console.log("c:", c);
// console.log("d:", d);


// const user = {name: "Alice", age: 30};
// const data = {...user};
// console.log("Data:", data); 

// //task1
// // Array destructuring
// const numbers = [10, 20, 30];
// const [first, second, third] = numbers;
// console.log(first, second, third); // 10 20 30

// // Object destructuring
// const person = { name: "Monish", age: 25, city: "Chennai" };
// const { name, age, city } = person;
// console.log(name, age, city); // Monish 25 Chennai

// //task2
// const original = [1, 2, 3];
// const copy = [...original];
// console.log(copy); // [1, 2, 3]

// //task3
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(5, 10, 15)); // 30
// console.log(sum(1, 2, 3, 4, 5)); // 15

// const data = { name: "Alice", age: 30 };

// const result = { ...data, city: "New York" };
// console.log(result);

// const data1 = { name: "Bob" };
// const resultAge = { ...data1, age: 25 };
// console.log(resultAge);

// const resultData1 = { ...data1, age: 35 };
// console.log(resultData1);

// resultData1.age = 40;
// console.log(resultData1);

// let data = {
//     name: "Alice",
//     age: 35,
// }
// let copy = {...data, age: 25, gender: 'female'};
// console.log(copy);
// // let copy = {...data, age: 25, gender: 'female'};
// // console.log(copy);

// // let data1 = [10,20];
// // let data2 = [30,40];
// // let result = [...data1, ...data2];
// // console.log(result);

//Classes serve as a blueprint for creating objects with shared properties and methods OOPS. 

// class Car {
//   constructor(brand, year) { //field
//     this.brand = brand;//basement of class
//     this.year = year;
//   }

//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }
// console.log(Car); // [class Car]

// class blueprint {
//     data = "This is a class field";

//     constructor() {
//         let result = this.data;
//         console.log(result);
//     }
// }
//datatype primitive and reference
//primitive data types: number, string, boolean, null, undefined, symbol
//reference data types: objects, arrays, functions ,classes
//same templete more objects can be created using classess

// class abc{
//   constructor(d1 = 30) {
//     this.d1 = d1;
//   }

//   display(){
//     console.log(this.d1);
//   }
// }
// let obj1 = new abc(50);
// console.log(obj1.d1); // 50
// obj1.display();

// class stencil{
//     constructor(color, shape) {
//         this.color = color;
//         this.shape = shape;
//     }
//     display(){
//         console.log(`The stencil is ${this.color} and ${this.shape}`);
//     }
// }

// class login{
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }

//   validate(){
//     console.log(`Username: ${this.username}, Password: ${this.password}`);
//     if(this.username === "monish" && this.password === "12345"){
//       console.log("Login successful!");
    
//     }
//     else{
//       console.log("Invalid username or password.");
//     }
//   }
// }

// let result = new login("monish", "12345");
// result.validate();

// const person = {
//     firstName: "John",
//     lastName: "Doe",
    
//     // Getter for a computed property 'fullName'
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     // Setter for the 'fullName' property with validation/parsing
//     set fullName(value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0] || "";
//         this.lastName = parts[1] || "";
//     }
// };

// // Access the getter like a property (no parentheses)
// console.log(person.fullName); // Output: John Doe

// // Use the setter like an assignment (runs the underlying method)
// person.fullName = "Jane Smith";
// console.log(person.firstName); // Output: Jane
// console.log(person.lastName);  // Output: Smith


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     display() {
//         console.log(`fatherName: ${this.name},mothername: ${this.name} Age: ${this.age}`);
//     }
// }

// let result = new Person("Strange", 25);
// result.display();

// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this._grade = grade;
//     }

//     displayGrade() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this._grade}`);
//     }
// }

// let result1 = new Student("Monish", 25, "A");
// result1.displayGrade();


// class person{
//    #name = "Monish";//private field
//     age = 25;
//     display() {
//         console.log(`#Name: ${this.#name}, Age: ${this.age}`);
//     }
// }

// let stud = new person();
// console.log(stud.display);//encapulation

//static can be accessed without creating an instance of the class static function and static variable member of the counterpart of the class not the instance last in first out


// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds");
// }, 2000);

//task1 class with constructor and method

// class Student {
//   constructor(name) {
//     this.name = name; // field initialized in constructor
//   }

//   display() {
//     console.log("Student Name: " + this.name);
//   }
// }

// // Example usage
// const s1 = new Student("Monish");
// s1.display(); // Output: Student Name: Monish

// //task2

// class Employee {
//   constructor() {
//     this._salary = 0;
//   }

//   // Getter
//   get salary() {
//     return this._salary;
//   }

//   // Setter
//   set salary(value) {
//     this._salary = value;
//   }
// }

// // Example usage
// let emp = new Employee();
// emp.salary = 50000; // set value using setter
// console.log("Employee Salary: " + emp.salary); // get value using getter and operator is also being used to set and get the value of salary

//keyword is a reserved word that has a predefined meaning in the programming language and cannot be used as an identifier (such as variable names, function names, or class names).


// 1. Write promise code using async/await.
// 2. Examples for variable and function hoisting.
// 3. Difference between function and function expression hoisting.



