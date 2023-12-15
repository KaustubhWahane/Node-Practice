// This is Asynchronous 
const fs = require("fs");
const fileName = "target.txt";
fs.readFile(fileName,(err, data)=> {
    if(err){
        console.log(err)
    }
    console.log(data.toString)
});
console.log("I am Node")
// This is Synchronous
const fs2 = require("fs");
const fileName2 = "target.txt";
// Using readFileSync
const data2 = fs.readFileSync(fileName2);
console.log("I am Node")
console.log(data2.toString)