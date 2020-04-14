const fs = require('fs')

function read(route,cb){
    fs.readFile(route, (err, data)=>{
        console.log(data)
    })
}

/*execution space */

read(__dirname + '/examplefile.txt')