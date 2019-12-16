const fs = require('fs')

const index = process.argv.slice(2)

fs.readFile('./users.json',(error,user)=>{

    console.log(JSON.parse( user))
})

// console.log(index)



