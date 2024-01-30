const users = [
    {id: 101,username :"Parsh",emil_id : "parsh@gmail.com"},
    {id:102,username :"Geta",emil_id : "geta@gmail.com"}
]

function getUsers(){
    setTimeout(()=>{
        users.forEach((users, index) => {
            console.log(users.id + " "+ users.username +" "+users.emil_id);
        },1000);
    })
}

function createuser(user){
    return new Promise((resolve, reject)=>{setTimeout(()=>{
        users.push(user);

        const error = false;
        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong'+"🧀")
        }
    },2000);
})
}



async function init(){
    await createuser({id:103,username:"Tina",emil_id:"tina@gmail.com"});
    getUsers();
    //await deleteUser(103);
   // getUsers();
}

async function _delete(){
    await deleteUser(103);
    getUsers();
}


function deleteUser(id){
    return new Promise((resolve,reject)=>{
        users.pop(users.id = id);

        const error = false;
        if(!error){
            resolve();
        }
        else{
            reject('error: Something went wrong');
        }
    })
}

init().then(()=>{
    _delete();
    console.log("User Deleted");
});