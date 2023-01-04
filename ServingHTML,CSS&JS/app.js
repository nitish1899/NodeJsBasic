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

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);

app.use('/Contactus',(req,res,next) =>{
    res.sendFile(path.join(__dirname, 'views', 'Contactus.html'));
});

app.use('/success',(req,res,next) =>{
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

// multiple path filter
// app.use('/', (req,res, next)=> {
//     console.log('This always runs');
//    next();
// });

// only for get request
// app.get('/product', (req,res, next)=> {
//     console.log(req.body);
//     res.redirect('/');
// });

// only for post request
// app.post('/product', (req,res, next)=> {
//     console.log(req.body);
//     res.redirect('/');
// });

// only for delete request
// app.delete('/product', (req,res, next)=> {
//     console.log(req.body);
//     res.redirect('/');
// });

// only for patch/put request
// app.patch('/product', (req,res, next)=> {
//     console.log(req.body);
//     res.redirect('/');
// });