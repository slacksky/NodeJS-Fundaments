let namae='functy'
let times = 2
function hello (name, myCallBack){
    console.log('Hi, my name is '+ name)
    setTimeout(function(){
        console.log('Im being asinc')
        myCallBack()
    },1000)
}

function talk(talkCB){
    setTimeout(function(){
        console.log('insert here, useless talk')
        talkCB()
    }, 1000)
}

function bye(name, anotherCB){
    setTimeout(function(){
        console.log(`Bye, ${name}`)
        anotherCB()
    }, 1000)
}

function conversation(namae, times,YACB){
    if(times > 0){
        talk(function(){
            conversation(namae, times--,YACB)
        })
    }else{
        bye(namae,YACB)
    }        
}//using a recursive function to resolve the problem


// -- here is the main part of the process

console.log('starting process...')
hello(namae, function(namae){
    conversation(namae, times, function(){
        console.log('finalized')
    })
})
/*hello(namae,function(){
    bye(namae, function(){
        console.log('finalized')
    })
})*/
/*hello(namae,function(){
    talk(function(){
        bye(namae, function(){
            console.log('stoping process...')
        })
    })

})*/
