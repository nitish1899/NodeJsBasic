const http = require('http');
const routes = require('./GroupChatAppLogin');

const server = http.createServer(routes.handler);
console.log(routes.sometext);

server.listen(3005 , ()=> {
    
    console.log('server is running on http://localhost:3005');
    console.log('Basics of node JS');
}); 