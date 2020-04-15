//const process =require('process') process can be accessed in global

process.on('beforeExit',()=>{
    console.log('So the process is going to end')
})

process.on('exit',()=>{
    console.log('So the process ended')
})

process.on('uncaughtException', (err, origen)=>{
    console.error('surprise uncaught error, please fix')
    console.error(err)
})// as the name implies if there is no catch

noneExistent()

console.log('This message won\'t show up if the error is uncaught')