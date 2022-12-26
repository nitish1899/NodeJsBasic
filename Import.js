const http = require('http');
const routes = require('./Export');

const server = http.createServer(routes.handler);
console.log(routes.sometext);

server.listen(5000 , ()=> {
    console.log('server is running on http://localhost:5000');
    console.log('Nitish Kumar');
});    