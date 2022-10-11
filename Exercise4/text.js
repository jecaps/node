const fs = require("fs");

const students = fs.readFileSync("./text.txt", "utf-8").split(", ");

console.log(students);
