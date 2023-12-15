// const promt = require('./Helper')
// let total = promt.sum(19, 69);
// console.log(total)

const fs = require("fs");
const fileName = "target.txt";
fs.watch(fileName,()=> console.log("HEllo New FIle"));