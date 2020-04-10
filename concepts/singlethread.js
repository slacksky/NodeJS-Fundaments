console.log('Hi, world')

let i = 0
setInterval(function(){
  console.log(i)
  i++
}, 1000)//loop testting every secon event
//single thread means that if theres an error the whole program stops
console.log('second instruction')
