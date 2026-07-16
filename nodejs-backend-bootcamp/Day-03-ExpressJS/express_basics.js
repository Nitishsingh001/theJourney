
//http  vs Express 


// const http = require("node:http");
// http.createServer((req, res)=>{
//    if (req.method == "GET" && req.url == '/'){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({message :"Hello world"})); 
//     return; 
//    }
//    res.statusCode= 404; 
//    res.end("Not Found");
// }).listen(3000); 


const express = require("express"); 

const app = express();

app.get('/', (req, res=>{
    res.json({message : 'Hello world'}); 
}))


app.listen(3000); 