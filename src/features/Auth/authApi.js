// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async(resolve) =>{
   const response=await  fetch('http://localhost:8080/users',{
    method:"POST",
    body:JSON.stringify(userData),
    headers:{'content-type':'application/json'}
   })
   const data=await response.json()
   resolve({data})
  }
  );
}
// check user
export function CheckUser(loginInfo) {
  return new Promise(async(resolve,reject) =>{
    const email=loginInfo.email;
    const password=loginInfo.password
   const response=await  fetch('http://localhost:8080/users?email='+email)
   const data=await response.json()
    console.log({data})
   if(data.length){
    if(password===data[0].password){
      resolve({data:data[0]})
    }else{
      reject({message:'wrong crediancials'})
    }
    
   }else{
    reject({message:'user not found'})
   }
   
  }
  );
}

export function singout(userId) {
  return new Promise(async(resolve) =>{
  // TODO:on server we will remove user session info
   resolve({data:"success"})
  }
  );
}