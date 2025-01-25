const http = require("http")
const fs = require("fs");
const url = require("url")

function myHandler(req,res){
    if(req.url === "/favicon.ico"){
        return res.end()
    }
    const myUrl = url.parse(req.url,true)
    console.log(myUrl.query);
    fs.appendFile("./req.log",(new Date().toLocaleDateString()+`: request received :: ${req.method} :: ${req.url} \n`),()=>{
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
        case "/signup":
            if(req.method === "GET"){res.end("Please send post request")}
            else if(req.method === "{POST"){res.end("Successful")}
        default:
            res.end("404 Not found")
    }
}

const myServer = http.createServer(myHandler);

myServer.listen(8080,()=>console.log("server started"));