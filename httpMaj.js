const http =require('http');
const map = require('through2-map')

const port = process.argv[2];

http.createServer((req, response)=>{
    if(req.method === 'POST'){
        req.pipe(map((chunck)=>{
            return chunck.toString().toUpperCase()
        })).pipe(response)
    }
}).listen(port)