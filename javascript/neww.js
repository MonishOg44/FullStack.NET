
// function SayHello(names){
//     for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//    }
//   let arr = ["john", "alice", "monish"];

//   SayHello(arr);

  function SayHello(names) {
    if (names.length < 3) {
        console.log("Please enter more names");
        return; 
    }
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
let arr = ["john", "alice", "monish"];
SayHello(arr);

let arr2 = ["john"]; 
SayHello(arr2);
