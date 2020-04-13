function Hello(name){//remove the callback
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Hi, my neame is: '+name)
            //resolve(name)//change the callback for resolve
            reject('there is an error')//error message 
        }, 1500)

    })//promise is a global class
}
function Talk (name){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('<insert useless talk>')
            resolve(name)
        }, 1000)
    })
}

function Bye(name){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bye, ', name)
            resolve()
        }, 1000)
    })

}

// -- excecution space

console.log('Started the process')

Hello('George')
    .then(Talk)
    .then(Talk)
    .then(Talk)
    .then(Talk)
    .then(Bye)
    .then((name) => {
        console.log('Finished the process')
    })
    .catch(error =>{
        console.error('there has been an error:')
        console.error(error)
    })