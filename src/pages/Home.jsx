import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductList from '../features/product-list/component/productList'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
            </Navbar>
            <Link to='/admin'>Go to admin</Link>
        
    </div>
  )
}

export default Home