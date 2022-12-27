const http = require('http');
const routes = require('./Export');

const server = http.createServer(routes.handler);
console.log(routes.sometext);

server.listen(5005 , ()=> {
    
    console.log('server is running on http://localhost:5005');
    console.log('Basics of node JS');
    console.log('Nitish Kumar');
});    