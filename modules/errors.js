function anotherFunction(){
    return itBreaks()
}

function itBreaks(){
    return 3+z
}
try{
    anotherFunction()
}catch(err){
    console.error('yare yare daze, the funct crashed')
    console.error(err.message)//err.message point to the fault
    console.log('error caught')
}//the usage is to make sure a possible error doesnt crash the app

