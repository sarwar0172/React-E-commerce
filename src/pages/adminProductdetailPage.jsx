import React from 'react'
import Navbar from '../features/navbar/navbar'
import AdminProductDetails from '../features/admin/component/AdminproductDetails'


function AdminProductDetailsPage() {
  return (
    <div>
        <Navbar>
            <AdminProductDetails></AdminProductDetails>
            </Navbar>
        
    </div>
  )
}

export default AdminProductDetailsPage