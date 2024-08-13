import React from 'react'
import Navbar from '../features/navbar/navbar'
import AdminProductList from '../features/admin/component/AdminproductList'

function AdminHome() {
  return (
    <div>
        <Navbar>
           <AdminProductList></AdminProductList>
            </Navbar>
        
    </div>
  )
}

export default AdminHome;