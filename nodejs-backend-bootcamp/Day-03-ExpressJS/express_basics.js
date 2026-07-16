

const express = require("express")

const app = expess(); 

const PORT = 3000; 

app.get('/', (req, res)=>{
    res.send("Hellow from express"); 

});


 app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
 })



















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


// const express = require("express"); 

// const app = express();

// app.get('/', (req, res=>{
//     res.json({message : 'Hello world'}); 
// }))


// app.listen(3000); 