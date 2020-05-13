function asincronic(callback){
    setTimeout(function(){
       try {
           let a = 3 +z
           callback(null, a)
       } catch (e) {
           callback(e, null)
       } 
    },1000)
}


try {
    asincronic(function(err, dat){
        if(err){
            //console.error('houston we have a problem')
            //console.error(err)
            throw err //alt way to stop execution
            //return false
        }
        console.log('all good in the console front, this is my data', dat )
    })    
} catch (e) {
    console.error('error caught')
    console.error(e)
}//example not caught, because async function  
