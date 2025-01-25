
const { log } = require('console');
var fs = require('fs')

// sync
// fs.writeFileSync("./test.txt","Hello !!!!!");


//Async
// fs.writeFile("./test.txt","123!!!!!!",(err)=>{})


// const res = fs.readFileSync("./test.txt","utf-8");
// console.log(res)

// fs.readFile("./test.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// })

// fs.appendFileSync("./test.txt",`\nHi!!! `)

// console.log(fs.statSync("./test.txt"));



const os = require('os')

console.log(os.cpus().length);
