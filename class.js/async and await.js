// A function that returns a Promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {//arrow function is used in single function
      resolve("Data loaded!");
    }, 2000); // simulate a 2-second delay
  });
}

// An async function using await
async function showData() {
  console.log("Fetching data...");
  const result = await fetchData(); // wait until fetchData resolves
  console.log(result);
}

let count = 0;
let intervalid = setInterval(() => {
  console.log(count);
  count++;
  if (count > 10) {
    clearInterval(intervalid);
  }
}, 1000); // interval set to 1 second

for (let count = 0; count <= 10; count++) {
  console.log(count);
}

let gt= 0;

while (gt<= 10) {
  console.log(gt)
  gt++;
}

// Call the async function
showData();


function getUser(){
  return new promise ((resolve,reject)) => {
    setTimeout()
  
}