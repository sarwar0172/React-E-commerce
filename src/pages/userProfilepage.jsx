import React from 'react'
import Navbar from '../features/navbar/navbar'
import UserProfile from '../features/user/component/UserProfile'

function UserProfilepage() {
  return (
    <Navbar>
        <UserProfile></UserProfile>
    </Navbar>
  )
}

export default UserProfilepage