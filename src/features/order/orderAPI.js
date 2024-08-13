// A mock function to mimic making an async request for data
export function createOrder(orders) {
  return new Promise(async(resolve) =>{
   const response=await  fetch('http://localhost:8080/orders',{
    method:'POST',
    body:JSON.stringify(orders),
    headers:{'content-type':'application/json'}
   })
   const data=await response.json()
   resolve({data})
  }
  );
}
