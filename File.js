const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname,"MyFile.txt"),"Hello World");

let myText = fs.readFileSync(path.join(__dirname,"MyFile.txt"));
console.log(myText.toString());