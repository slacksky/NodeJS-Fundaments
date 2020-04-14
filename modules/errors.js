function itBreaks(){
    return 3+z
}
try{
    itBreaks()
}catch(err){
    console.error('yare yare daze, the funct crashed')
    console.error(err)//err.message point to the fault
}//the usage is to make sure a possible error doesnt crash the app

