const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);
    res.writeHead(200);
    res.end("Nitish Kumar");
});

server.listen(4000 , ()=> {
    console.log('server is running on http://localhost:4000');
    console.log('Nitish Kumar');
});