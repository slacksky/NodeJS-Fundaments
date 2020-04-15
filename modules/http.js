const http = require('http')//import http module

http.createServer(router).listen(3000)

console.log('listening on port 3000')


function router(req, res){//request  y response
    console.log('new Request')
    console.log(req.url)
    
    switch(req.url){
        case '/hello':
            res.write('howdy')
            res.end
            break
        default:
            res.write('error 404 :cant hear your request')
            res.end    
    }

    //res.writeHead(201, {'Content-Type': 'test/plain'})
    //res.write('Hi, know I know how to use http in Nodejs')

    //res.end()
}