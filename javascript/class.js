//task1

let studname = "Monish";
let score = 85;

console.log(`Student name: ${studname}, Score: ${score}`);

//task2

if (score >= 50) {
    console.log("Grade: passed");
}
else {
    console.log("Grade: failed");
}

//task3

function greet(studname) {
    return `Hello, ${studname}!`;
}
console.log(greet(studname));

//task4

let scores = [75,60,90,45];
console.log(scores[0]);
console.log(scores.length);

//task5

for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
}

//task6

let student = {
    name: "Monish",
    age: 20,
    grade: "A"
};
console.log(student.name);



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo</title>
    <style>
        #txtTask{
            padding: 10px;
            background:hsla(240, 100%, 50%, 0.2);
            border: none;

        }
        button {
            padding: 10px;
            background: hsla(240, 100%, 50%, 0.5);
        }
    </style>
</head>
<body>
    <input id="txtTask" type="text" placeholder="Enter a Task">
    <button onclick="AddTask()"> + </button>
    <ul id="tasklist">

    </ul>
    <script>
        function AddTask() {
            let txt = document.getElementById("txtTask")
            let task = txt.value;
            let ul = document.getElementById("tasklist");
           // ul.innerHTML = "<li>" + task + "<li>"
            let li = document.createElement("li");
            li.textContent = task;
            ul.appendChild(li);
            txt.value = "";

            let btn = document.createElement("button");
            btn.textContent = "x";
            btn.style.backgroundColor= "red";
            btn.style.padding = "4px";
            btn.style.borderRadius = "2px";
            btn.style.margin = "12px";
            // let span = document.createElement("span");
            li.appendChild(btn);
        btn.addEventListener("click" , function () {
            li.remove();
        });
    }
    function greet(name) {
  return `Hello, ${name}!`;
}


console.log(greet("John")); // Output: Hello, John!

// Option 2: Use a variable
const john = "John";
console.log(greet(john));   // Output: Hello, John!
    
console.log(greet(john));

    </script>
</body>
</html>