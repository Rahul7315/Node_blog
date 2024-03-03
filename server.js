
//import http 
const http = require('http');




//import file function to read/write the file
const fs = require('fs');

//create server
const server = http.createServer((req,resp)=>{
    console.log("Request has been made");

    let path = "./views/";
    switch(req.url){
        case '/':
            path += "/index.html"
            resp.statusCode = 200;
            break;
        case '/about':
            path += "/about.html"
            resp.statusCode = 200;
            break;
        case '/aboutus':
            resp.statusCode = 301;
            resp.setHeader('Location','/about');
            resp.end();
            break;
        default: 
            path += "/404.html"
            resp.statusCode = 404;
            break;
    }

    //create the response of html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            resp.end();
        }
        else{
            resp.write(data);
            resp.end();
            //resp.end(data); we can write this way to for single data
        }
    });
})

// listen to the server 
server.listen(3000,"localhost",()=>{
    console.log("The port is listening");
})

