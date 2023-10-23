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


// rename


