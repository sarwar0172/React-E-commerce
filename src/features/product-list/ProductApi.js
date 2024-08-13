
// fetching all products
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
   const response=await  fetch('http://localhost:8080/products')
   const data=await response.json()
   resolve({data})
  }
  );
}


// filteration pluse pagination
export function fetchAllProductsByFilters(filter,sort,pagination) {
let queryString=''
for(let key in filter){
  const categoryValue=filter[key]
  if(categoryValue.length>0){
    const lastCategoryValue=categoryValue[categoryValue.length-1]
  queryString +=`${key}=${lastCategoryValue}&`

  }
}
for(let key in sort){
  queryString +=`${key}=${sort[key]}&`
}

for(let key in pagination){
  queryString +=`${key}=${pagination[key]}&`
}

  return new Promise(async(resolve) =>{
   const response=await  fetch('http://localhost:8080/products?'+queryString)
   const data=await response.json()
   const totalItems=30
   resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}

// catogories
export function fetchAllCategories() {
  return new Promise(async(resolve) =>{
   const response=await  fetch('http://localhost:8080/category')
   const data=await response.json()
   resolve({data})
  }
  );
}

// Selecte product
export function fetchProductById(id) {
  return new Promise(async(resolve) =>{
   const response=await  fetch(`http://localhost:8080/products/?id=${id}`)
   const data=await response.json()
   resolve({data})
  }
  );
}