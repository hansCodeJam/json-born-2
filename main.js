const fs = require('fs')

// let index = process.argv[4]

// fs.readFile('./users.json',(error,user)=>{

//     // console.log(JSON.parse( user))
// })

// // console.log(index)


// fs.readFile('./users.json',(error,data)=>{
    

//     let blah = [...JSON.parse(data)]

    
//      for(let i =0;i<user.length;i++){
        
//         console.log(blah[i])
   
        
//      }
   
//     // console.log(JSON.parse(value))
// })


const getUsers = () => {
    fs.readFile('users.json', function(err, data){
    if (err){
        console.log(err);
    } else {
        let users = JSON.parse(data);
        console.log(users)
    }
    })
}

// getUsers()

const getUser = (i) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            console.log(users[i]);
}})}

// console.log(getUser(2))

const getFriends = (i) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            console.log(users[i].friends);
        }})
}

// getFriends(1)

const postUser = (name, age, eyeColor) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            const user = {
                "index": users.length,
                "age": age,
                "eyeColor": eyeColor,
                "name": name
            };
            users.push(user);
        
            const data2 = JSON.stringify(users, null, 2);
            fs.writeFile('users.json', data2, function(){
                console.log('Added new user');
            })
        }
    })   
    console.log(getUsers());
}

// postUser("Alice Um", "18", "green")

const postNewFriend = (index, name) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            if (!users[index]["friends"]){
                users[index]["friends"] = [];
            }
            const newFriend = {
                "id": users[index].friends.length,
                "name": name
            };
            users[index].friends.push(newFriend);
            const data2 = JSON.stringify(users, null, 2);
            fs.writeFile('users.json', data2, function(){
            })
        }
    })   
}

// postNewFriend(10, "Mad Hatter")


const deleted = (i) => {
    fs.readFile('users.json', function(err, data){
        if (err){
            console.log(err);
        } else {
            let users = [...JSON.parse(data)];
            let item = users[i];
            const newData = [];
            newData.push(...users.slice(0,i),...users.slice(i+1));
            console.log(newData);
            const data3 = JSON.stringify(newData, null, 2);
            fs.writeFile('users.json', data3, function(){
})
        }
    })
}

deleted(2)

