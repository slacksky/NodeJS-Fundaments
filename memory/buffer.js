//let buffer = Buffer.alloc(4)
//let buffer = Buffer.from([1,2,3,4])
//let buffer = Buffer.from('Hello')

//console.log(buffer)


//--execution block

let abc = Buffer.alloc(26)
console.log(abc)

for(let i=0;i<26;i++){
    abc[i]=i + 97 //number corresponds to the asci offset to the a
}

console.log(abc)
console.log(abc.toString())