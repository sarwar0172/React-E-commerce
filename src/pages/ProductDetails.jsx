import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductDetails from '../features/product-list/component/productDetails'


function ProductDetailsPage() {
  return (
    <div>
        <Navbar>
            <ProductDetails></ProductDetails>
            </Navbar>
        
    </div>
  )
}

export default ProductDetailsPage