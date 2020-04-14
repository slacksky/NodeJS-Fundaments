const myAddon = require('./build/Release/addon')// this imports the newly created binary
//it didntpick up the code had to manually connect it
console.log(myAddon.hello())
