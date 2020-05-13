const fs = require('fs')

function read(route,cb){
    fs.readFile(route, (err, data)=>{//convention dictates the first callback parameter has to be the error
        console.log(data.toString())
    })
}
function write(route,contents,yacb){
    fs.writeFile(route, contents, function(err){
        if(err){
            console.error('unable to write',err)
        }else{
            console.log('successful write')
        }
    })
}

function erase(route, cb){
    fs.unlink(route, cb)
}



/*execution space */

//read(__dirname + '/examplefile.txt')
//write(__dirname + '/examplefile1.txt', 'addtional line added to file', console.log)
//erase(__dirname + '/examplefile1.txt', console.log)