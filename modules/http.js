const http = require('http')//import http module
http.createServer(function(req, res){//request  y response
    console.log('new Request')
    console.log(req.url)
    res.writeHead(201, {'Content-Type': 'test/plain'})
    res.write('Hi, know I know how to use http in Nodejs')

    res.end()
}).listen(3000)

console.log('listening on port 3000')