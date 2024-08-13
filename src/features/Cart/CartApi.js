// A mock function to mimic making an async request for data
export function AddToCart(item) {
  return new Promise(async(resolve) =>{
   const response=await  fetch('http://localhost:8080/cart',{
    method:"POST",
    body:JSON.stringify(item),
    headers:{'content-type':'application/json'}
   })
   const data=await response.json()
   resolve({data})
  }
  );
}

export function fetchItemsByUserID(userId) {
  return new Promise(async(resolve) =>{
   const response=await fetch('http://localhost:8080/cart?user='+userId)
   const data=await response.json()
   resolve({data})
  }
  );
}

export function updateCart(update) {
  return new Promise(async(resolve) =>{
   const response=await fetch('http://localhost:8080/cart/'+update.id,{
    method:"PATCH",
    body:JSON.stringify(update),
    headers:{'content-type':'application/json'}
   })
   const data=await response.json()
   resolve({data})
  }
  );
}

export function deleteItemFromCart(itemid) {
  return new Promise(async(resolve) =>{
   const response=await fetch('http://localhost:8080/cart/'+itemid,{
    method:"DELETE",
    headers:{'content-type':'application/json'}
   })
   const data=await response.json()
   resolve({data:{id:itemid}})
  }
  );
}

export async function resetCart(userID) {
  // get all items of user' cart and then delete each

  return new Promise (async(resolve)=>{
    const response=await fetchItemsByUserID(userID)
    const items=response.data
    for (let item of items){
      await deleteItemFromCart(item.id)
    }
    resolve({status:'success'})
  })
  
}