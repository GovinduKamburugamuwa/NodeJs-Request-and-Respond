const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>
{
 //console.log(req.url,req.method);
 res.setHeader('Content-Type','text/html');

 let path ='./';
 switch(req.url)
 {
    case'/':
    path += 'index.html';
    res.statusCode =200;
    break;
    case '/about':
    path += 'About.html';
    res.statusCode =200;
    break;
    case '/about-me':
    res.statusCode =301;
    res.setHeader('Location', '/about');
    res.end();
    break;
    default:
    path += '404.html';
    res.statusCode =404;
    break;


 }
 fs.readFile(path,(err,data)=>
 {
    if(err)
    {
        console.log('An Error was occur');
        res.end();
    }else{
        res.write(data);
        res.end();
    }
 })
});

server.listen(3000,'localhost',()=>
{
console.log('listening for the request from port 3000');
});