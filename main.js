const fs = require('fs')

const index = process.argv(2)

fs.read((error, user)=>{

    console.log(JSON.parse(error, index))
}



