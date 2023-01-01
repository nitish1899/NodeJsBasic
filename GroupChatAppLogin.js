
const fs= require('fs');

const requestHandler=(req,res) => {
    const url= req.url;
    const method = req.method;
    const body=[];

if (url === '/login'){
        res.write('<html>');
        res.write('<head><title>My First Page </title></head>');
        res.write('<body><form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/saveToLS" method="POST"><input id="username" type="text" name="message"><br><button type="submit">Login</button<></form></body>');
        res.write('</html>');
        return res.end();
}
else if(url ==='/saveToLS' && method==='POST'){
    req.on('data', (chunk)=>{
    // console.log(chunk);  
    body.push(chunk)
    });
    return req.on('end', ()=>{
        const parseBody = Buffer.concat(body).toString();
        const user=parseBody.split('=')[1];
     
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    });
}       
else if (url === '/'){
    //const filePath = path.join(__dirname,"message.text");
    
    fs.readFile("Group_Message.text",{ encoding: "utf-8"}, (err,data) => {
        if(err){
            console.log(err);
        }
        data === 'undefined' ? 'No chats exist':data;
        res.write('<html>');
        res.write('<head><title>My First Page </title></head>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form onsubmit="document.getElementById(`username`).value = localStorage.getItem(`username`)+document.getElementById(`username`).value" action="/message" method="POST"><input id="username" type="text" name="User"><br><button type="submit">Send</button<></form></body>');
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
        //console.log(parseBody);
        const message=parseBody.split('=')[1];
        console.log(message);

        fs.readFile("Group_Message.text",{ encoding: "utf-8"}, (err,data) => {
            if(err){
                console.log(err);
            }
            const Msg = data+message;
            fs.writeFile('Group_Message.text', Msg, err =>{
                if(err){
                    console.log(err);
                }
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });    
    });
}
};

exports.handler = requestHandler ;
exports.sometext = "Some Hard Coded Text";

// else{
//     res.setHeader('Content-Type','text/html'); 
//     res.write('<html>');
//     res.write('<head><title>My First Page </title></head>');
//     res.write('<body><h1>Hello from node JS</h1></body>');
//     res.write('</html>');
//     res.end();
// }
//};

//module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     sometext:"Some Hard Coded Text"
// }

// module.exports.handler = requestHandler ;
// module.exports.sometext = "Some Hard Coded Text";

// exports.handler = requestHandler ;
// exports.sometext = "Some Hard Coded Text";