//const http = require('http');
const http = require('http');
const server = http.createServer((req,res) => {
    //console.log(req.url,req.method,req.headers);
    const url= req.url;
    if (url === '/home'){
    res.write('<html>');
    res.write('<head><title>My First Page </title></head>');
    res.write('<body><h1> Welcome home</h1></body>');
    res.write('</html>');
    res.end("Nitish Kumar");
    } else if(url === '/about'){
        res.write('<html>');
    res.write('<head><title>My First Page </title></head>');
    res.write('<body><h1> Welcome to About Us page</h1></body>');
    res.write('</html>');
    res.end("Nitish Kumar");
    } else if(url === '/node'){
        res.write('<html>');
    res.write('<head><title>My First Page </title></head>');
    res.write('<body><h1> Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end("Nitish Kumar");
    }
    else {
        res.write('<html>');
        res.write('<head><title>My First Page </title></head>');
        res.write('<body><h1> Welcome Back Again </h1></body>');
        res.write('</html>');
        res.end("Nitish Kumar");
    }
    res.setHeader('Content-Type','text/html');
    res.writeHead(200);
    
});

server.listen(4000 , ()=> {
    console.log('server is running on http://localhost:4000');
    console.log('Nitish Kumar');
});