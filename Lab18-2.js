const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/abc'){
        res.end("abc")
    }
    else if(req.url === '/about'){
        res.end("about")
        console.log("about")
    }
    
    else if(req.url === '/contact'){
        console.log("contact")
        res.end("contact")
        
    }

    
    else if(req.url === '/hi'){
        res.end("hi")
    }

    
    else if(req.url === '/new'){
        res.end("new")
    }
})

const port = 30041;

server.listen(port,()=>{
    console.log("hi listening")
})