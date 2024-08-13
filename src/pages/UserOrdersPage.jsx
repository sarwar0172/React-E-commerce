import React from 'react'
import Navbar from '../features/navbar/navbar'
import UserOrders from '../features/user/component/UserOrders'

function UserOrdersPage() {
  return (
   <Navbar>
    <UserOrders></UserOrders>
   </Navbar>
  )
}

export default UserOrdersPage