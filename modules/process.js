//const process =require('process') process can be accessed in global

process.on('beforeExit',()=>{
    console.log('So the process is going to end')
})

process.on('exit',()=>{
    console.log('So the process ended')
})