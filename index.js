const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
if(req.url === '/'){
    // res.writeHead(200,{'Content-Type':})
    // res.end('<h1>Homepage</h>');
    fs.readFile(path.join(__dirname,'public','index.html'), (err,content)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(content);
    })

}

    if (req.url === '/about') {
        // res.writeHead(200,{'Content-Type':})
        // res.end('<h1>Homepage</h>');
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })

    }

    if (req.url === '/api/users') {
        
            const users = [
                {name: 'Prince', age: 40},
                {name: 'John', age:30}
            ];

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        

    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on ${PORT}`));