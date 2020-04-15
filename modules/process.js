//const process =require('process') process can be accessed in global

process.on('beforeExit',()=>{
    console.log('So the process is going to end')
})

process.on('exit',()=>{
    console.log('So the process ended')//this means disconnection from the event loop
    setTimeout(()=>{
        console.log('like what happened in vegas, this will stay in vegas')
    },0)
})

setTimeout(()=>{
    console.log('This didn\'t happen in Vegas, so It\'s not staying there')
},0)


process.on('uncaughtException', (err, origen)=>{
    console.error('surprise uncaught error, please fix')
    console.error(err)
    setTimeout(()=>{
        console.log('errors that come whithin')
    },0)
})// as the name implies if there is no catch

noneExistent()

console.log('This message won\'t show up if the error is uncaught')