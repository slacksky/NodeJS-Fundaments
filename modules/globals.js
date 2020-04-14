let i =0
let intervals= setInterval(()=>{
    console.log('Hello!!')
    if(i===3){
        clearInterval(intervals)
    }
    i++
},1000)