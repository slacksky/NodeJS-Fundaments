let sum=0

console.time('looper')
for(let i=0; i<1000000000; i++){
    sum++
}
console.timeEnd('looper')//this meassures time for a specific start of a process like the long for



console.time('asyncronic')
console.log('async process start')
asyncronic()
    .then(()=>{
        console.timeEnd('asyncronic')
    })



function asyncronic(){
   return new Promise((resolve) =>{
       setTimeout(function(){
           console.log('finished async process')
           resolve()
       })
   })
}