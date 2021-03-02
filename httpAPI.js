const http = require('http');
const url = require('url');

const port = process.argv[2];

const parseTime = (time)=>{
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

const unixTime = (time)=>{
    return{unixTime: time.getTime()}
}

const query = (url) =>{
    switch(parseUrl.pathname){
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso))
        case'/api/unixtime':
            return unixTime(new Date(parseUrl.query.iso))
    }
}
http.createServer((req, response)=>{
    if(req.method === 'GET'){
        response.writeHead(200, {'Content-Type': 'application/json'})
        parseUrl = url.parse(req.url, true)
        response.end(JSON.stringify(query(parseUrl)))
    }else{
        response.writeHead(405)
        response.end()
    }
}).listen(port)