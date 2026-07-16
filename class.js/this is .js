// Employee object array
let employees = [
    { name: "Royal enfield Continental GT 650", age: 28, role: "Developer" },
    { name: "monish", age: 34, role: "Manager" },
    { name: "Strange", age: 25, role: "Designer" },
    { name: "Diana", age: 30, role: "Tester" }
];

// Print employee 
employees.forEach(emp => {
    console.log(`Name: ${emp.name}, Age: ${emp.age}, role: ${emp.role}`);
});

let arr = [1, 2, 3]; arr.push(4); arr.pop(); console.log(arr); 



    function checkCustomer(isMember, amount) {
      if (isMember) {
        console.log("Discount applied! Final amount:", amount - 100);
      } else {
        console.log("No discount. Final amount:", amount);
      }
    }
    checkCustomer(true, 500);  // discount
    checkCustomer(false, 500); // no discount
  