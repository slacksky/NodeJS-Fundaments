let name = process.env.NAME  || 'Nameless'
//acc to the env variables || default value to prevent undefined
let web = process.env.WEB || 'Im webless'
console.log('Hi, '+name)
console.log('My website is, ' +web );
