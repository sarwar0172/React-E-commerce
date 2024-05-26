import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductList from '../features/product-list/component/productList'

function Home() {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
            </Navbar>
        
    </div>
  )
}

export default Home