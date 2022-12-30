const http = require('http');

const express = require('express');

const app = express();

app.use((req,res, next)=> {
    console.log('In the middleware!');
    next(); // allows the request to continue to the next middleware in line
});

app.use((req,res, next)=> {
    console.log('In another middleware!');
   res.send('<h1> hello to node js </h1>'); // Content-Type: text/html; charset=utf-8
   //res.send('{ key1: value }'); // Content-Type: text/html; charset=utf-8
});

const server = http.createServer(app);
server.listen(3000);