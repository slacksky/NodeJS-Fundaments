async function Hello(name){//remove the callback
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log('Hi, my neame is: '+name)
            resolve(name)//change the callback for resolve
            //reject('there is an error')//error message 
        }, 1500)

    })//promise is a global class
}
async function Talk (name){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('<insert useless talk>')
            resolve(name)
        }, 1000)
    })
}

async function Bye(name){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('Bye, ', name)
            resolve()
        }, 1000)
    })

}


async function main(){
    let name = await Hello('Jorge')
    await Talk()
    await Talk()
    await Talk()
    await Bye(name)
    console.log('stoped  the porcess')
}
console.log('started  the porcess')
main()//th main pint of the async await is to turn async request into an structured orderly request
