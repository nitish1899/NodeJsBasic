const http = require('http');
const fs= require('fs');

const server = http.createServer((req,res) => {
    const url= req.url;
    const method = req.method;
    const body=[];

    if (url === '/'){
        //const filePath = path.join(__dirname,"message.text");
        
        fs.readFile("message.text",{ encoding: "utf-8"}, (err,data) => {
            if(err){
                console.log(err);
            }
            console.log('data from files '+ data);
            res.write('<html>');
            res.write('<head><title>My First Page </title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button<></form></body>');
            res.write('</html>');
            return res.end();
        });       
    }
    else if(url ==='/message' && method==='POST'){
        req.on('data', (chunk)=>{
        // console.log(chunk);  
        body.push(chunk)
        });
        return req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            
            fs.writeFile('message.text', message, err =>{
                if(err){
                    console.log(err);
                }
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    
    // req.on('end', ()=>{
    //     const parseBody = Buffer.concat(body).toString();
    //     const message=parseBody.split('=')[1];
    //     fs.writeFileSync('message.text', message);
    // })
    
    // res.statusCode=302;
    // res.setHeader('Location', '/');
    // return res.end();
    }
    else{
        res.setHeader('Content-Type','text/html'); 
        res.write('<html>');
        res.write('<head><title>My First Page </title></head>');
        res.write('<body><h1>Hello from node JS</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(5000 , ()=> {
console.log('server is running on http://localhost:5000');
console.log('Nitish Kumar');
});