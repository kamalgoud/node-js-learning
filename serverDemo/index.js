const http = require("http")
const fs = require("fs");
const url = require("url")


const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico"){
        return res.end()
    }
    const myUrl = url.parse(req.url,true)
    console.log(myUrl.query);
    fs.appendFile("./req.log",(new Date().toLocaleDateString()+`: request received ${req.url} \n`),()=>{
        console.log(`request received for ${req.url}`);
    });
    switch(myUrl.pathname){//req.url
        case "/":
            res.end("Homepage")
            break;
        case "/about":
            const name = myUrl.query.name;
            res.end(`No data available related to ${name} as of now !!!!!!!!!`)
            break;
        default:
            res.end("404 Not found")
    }
});

myServer.listen(8080,()=>console.log("server started"));