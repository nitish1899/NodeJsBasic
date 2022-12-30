/*const http = require('http');

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

*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// multiple path filter
// app.use('/', (req,res, next)=> {
//     console.log('This always runs');
//    next();
// });

app.use('/add-product', (req,res, next)=> {
    //console.log('In another2.8 middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit"> Add Product </buttom></form>');
});

app.use('/product', (req,res, next)=> {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req,res, next)=> {
    //console.log('In another middleware!');
   res.send('<h1> Hello from Express js </h1>'); 
});

app.listen(3000);