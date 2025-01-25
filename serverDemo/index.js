const http = require("http")
const fs = require("fs");
const { log } = require("console");

const myServer = http.createServer((req,res)=>{
    console.log("request received");
    fs.appendFile("./req.log",(new Date().toLocaleDateString()+`: request received ${req.url} \n`),()=>{
        res.end("Hello!!!!!!")
    });
});

myServer.listen(8080,()=>console.log("server started"));