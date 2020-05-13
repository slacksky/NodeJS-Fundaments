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


asincronic(function(err, dat){
    if(err){
        console.error('houston we have a problem')
        console.error(err)
        //throw err //alt way to stop execution, doens twork with async function
        //please use error first for async
        return false
    }
    console.log('all good in the console front, this is my data', dat )
})    
} catch
