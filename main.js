const fs = require('fs')

let index = process.argv[4]

fs.readFile('./users.json',(error,user)=>{

    // console.log(JSON.parse( user))
})

// console.log(index)


fs.readFile('./users.json',(error,data)=>{
    

    let blah = [...JSON.parse(data)]

    
     for(let i =0;i<user.length;i++){
        
        console.log(blah[i])
   
        
     }
   
    // console.log(JSON.parse(value))
})



