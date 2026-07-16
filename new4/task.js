
const date = 0o0;
switch (date) {
  case 1:
    console.log("M");
    break;
  case 2:
    console.log("T");
    break;
  case 3:
    console.log("W");
    break;
  case 4:
    console.log("T");
    break;
  case 5:
    console.log("F");
    break;
  case 6:
    console.log("S");
    break;
  default:
    console.log("S");
    break;
}

//here the 0o0 is octal literal syntax in js and which means 0 in base and equals 0 since no such things match the values of 1-6 it prints the default value

//do loop
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 10);

