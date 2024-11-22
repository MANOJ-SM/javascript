
// normal function 

function fetchUserData(object1){

    return new Promise((resolve,reject) => {

        setTimeout(() =>{
            if(object1){
                resolve(object1);
            }else
                reject("failed to featch user data ");
        },2000)
    });
}

// async / await function 

async function getUserData(object1){
     
    try{
        const result = await fetchUserData(object1);
        console.log(result);
    }catch( error){
        console.log(error);
    }

}

const object1 = {id : 1,   name : "John"};

getUserData(object1);            // {id : 1,   name : "John"};
