// making calculator using modules

const calculator = require('./calc');
let x = 50, y = 10;
 
console.log("Addition of 50 and 10 is "+ calculator.add(x, y));
 
console.log("Subtraction of 50 and 10 is "+ calculator.sub(x, y));
 
console.log("Multiplication of 50 and 10 is "+ calculator.mult(x, y));
 
console.log("Division of 50 and 10 is "+ calculator.div(x, y));
const fs = require("fs");

// writing
fs.writeFileSync("read.txt","You are making and writing to file");

// adding

fs.appendFileSync("read.txt","Now you are appending to read.txt");

//reading

const read = fs.readFileSync("read.txt");
console.log(read);

// buffer string

var bufstr = read.toString();
console.log(bufstr);




