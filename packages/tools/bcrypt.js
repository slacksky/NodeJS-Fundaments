const bcrypt = require('bcrypt')

const password = '1234Share?'

bcrypt.hash(password, 5, function(err, hash){
    console.log(hash)
    bcrypt.compare(password, hash,function(err, res){
        if(err){
            console.log(err)
        }
        console.log(res)
    } )
})