let namae='functy'
function hello (name, myCallBack){
    console.log('Hi, my name is '+ name)
    setTimeout(function(){
        console.log('Im being asinc')
        myCallBack()
    },1000)
}

function bye(name, anotherCB){
setTimeout(function(){
    console.log(`Bye, ${name}`)
    anotherCB()
}, 1000)
}

console.log('starting process...')
hello(namae,function(){
    bye(namae, function(){
        console.log('stoping process...')
    })
})
