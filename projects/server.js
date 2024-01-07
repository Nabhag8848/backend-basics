const http = require('http');

const requestListener = function (req, res) {
    // console.log(req.url);
    // use of switch statements to make the routes;
    
    res.writeHead(200);
    res.end('Hello world');
}

const server = http.createServer(requestListener);
server.listen(8080);
