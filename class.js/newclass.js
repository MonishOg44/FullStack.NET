// // // Example of a simple counter using setInterval
// // let counter = 0;
// // const intervalId = setInterval(() => {
// //     counter++;
// //     console.log("Counter:" + counter);
// //     if (counter >= 5) {
// //         clearInterval(intervalId); // Stop the counter after 5 seconds
// //     }
// // }, 1000);

// let users = {
//     id: 1, name: "Monish", age: 25
// }
// console.log(users.name);

// let post = {
//     id: 101, title: "JavaScript Basics", usersid: users.id, content: "This is a post about JavaScript." 
// }
// console.log(post.usersid);

// let comment = {
//     id: 1001, postid: post.id, usersid: users.id, content: "Great post!"
// }
// console.log(comment.postid);

// function getUserInfo(user) {
//     setTimeout(() => {
//         if (user && user.id === 1) {
//             console.log("User Info:", user);
//         } else {
//             console.log("User not found.");
//         }
//     }, 1000);
// }

// getUserInfo(users);

// //object is construction of name value pair
// //callback hell

// function runinterval() {
//     let counter = 0;
//     const interval= setInterval(() => {
//         counter++;
//         console.log("Counter:" + counter);
//         if (counter >= 5) {
//             clearInterval(interval); // Stop the counter after 5 seconds
//         }
//     }, 1000);
// }
// runinterval();
// //stateless protocool does not maintain any state between different calls. Each call is independent and does not rely on any previous interactions. This means that the server does not store any information about the client's state between requests. Each request from the client to the server must contain all the information needed to understand and process the request, as the server will not remember any previous interactions.

// function getuserinfo(user) {
//     return new Promise((resolve, reject, hold) => {
//         setTimeout(() => {
//             if (user && user.id === 1) {
//                 resolve(user);
//             } else {
//                 reject(new Error("User not found"));
//             }
//         }, 1000);
//     });
// }

// getuserinfo(users)
// .then(user => {
//     console.log(user);
// })
// .catch(error => {
//     console.error(error.message);
// });

console.log(a)

