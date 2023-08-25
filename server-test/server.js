const http = require('http');

const test = {test:'test'}

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(test.test);
    res.end();
}).listen(8080)

