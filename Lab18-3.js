const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url==='/about'){
        fs.readFile('.\\about.txt',(err,data)=>{
           console.log(err)
            console.log(data.toString())
        })
    }
    else if(req.url === '/contact'){
        fs.readFile('.\\contact.txt','utf-8',(err,data)=>{
            console.log(err)
            console.log(data)
            res.end(data)
        })
    }
})

const port = 9000;
server.listen(port,()=>{
    console.log("listening port");
})