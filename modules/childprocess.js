const { exec, spawn }=require('child_process')




/*exec('node modules/console.js', (err,stdout, sterr)=>{
    if(err){
        console.error(err)
        return false
    }
    console.log(stdout)
})*/
let process =spawn('ls', ['-la'])//command, [parameters]

console.log(process.pid)
console.log(process.connected)
process.stdout.on('data', function(datas){
    console.log(datas.toString())
})