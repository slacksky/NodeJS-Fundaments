const fs =require('fs')
const stream = require('stream')
const util = require('util')

let data = ''
let readableStream =fs.createReadStream(__dirname+'/input.txt')

readableStream.setEncoding('UTF8')
/*
readableStream.on('data',function(chunk){
    data+=chunk
})

readableStream.on('end',function(){
    console.log(data)
})//example for big stream
*/
/*
process.stdout.write('Hi,')//stdout direct stream write
process.stdout.write('How')
process.stdout.write('Do')
process.stdout.write('You')
process.stdout.write('Do?')
*/

/*intermediate buffer*/
const Transform = stream.Transform// creates the transform stream

function Bcaps(){
    Transform.call(this)
}
util.inherits(Bcaps, Transform)

Bcaps.prototype._transform=function(chunk, coding, CB){
    chunkCaps= chunk.toString().toUpperCase()
    this.push(chunkCaps)
    CB()
}

let bcaps = new Bcaps()

readableStream
    .pipe(bcaps)
    .pipe(process.stdout)
    //pass on for transformation and then for printing
