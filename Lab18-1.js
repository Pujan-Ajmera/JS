const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("helloworld")
})

const port = 2004;
server.listen(2004,()=>{
    console.log(`is listening ${port}`)
});