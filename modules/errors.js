function anotherFunction(){
    return itBreaks()
}

function itBreaks(){
    return 3+z
}
function itBreaksAsync(cb){
    setTimeout(function(){
        try{
            return 3+z
        }catch(err){
            console.error('Error in the async funct')//erro catching in asyn has to happen in the functions
            cb(err)
        }        
    },1000)
}


/*execution block */

try{
    //anotherFunction()
    itBreaksAsync(function(err){
        console.log(err.message)
    })//its not caught because it is in the event loop, not in the main loop
}catch(err){
    console.error('yare yare daze, the funct crashed')
    console.error(err.message)//err.message point to the fault
    console.log('error caught')
}//the usage is to make sure a possible error doesnt crash the app

