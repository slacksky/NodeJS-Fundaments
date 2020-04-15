const os = require('os')

//console.log(os.arch())
//console.log(os.platform())
//console.log(os.cpus())
//console.log(os.cpus().length)
//console.log(os.constants)

/*const SIZE = 1024

kb =(bytes) => bytes / SIZE //arrow funct kb
mb =(bytes) => kb(bytes) / SIZE //arrow funct mb
gb =(bytes) => mb(bytes) / SIZE //arrow funct gb

console.log(`${os.freemem()} bytes`)
console.log(`${kb(os.freemem())} kbtyes`)
console.log(`${mb(os.freemem())} mbtyes`)
console.log(`${gb(os.freemem())} gbtyes free of ${gb(os.totalmem())} toal mem`)
*/
console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())