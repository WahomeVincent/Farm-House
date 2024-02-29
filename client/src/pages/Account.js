import React from 'react'
import { UserAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

function Account() {

    const { user, logOut } = UserAuth()
    const navigate = useNavigate()

    function handleLogout() {
        try {
            logOut()
            navigate('/')
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h1>My Account</h1>
        <p>My email is: {user && user.email} </p>

        <button onClick={handleLogout} className='bg-blue-500 p-1 text-white mx-4 my-4'>Logout</button>
    </div>
  )
}

export default Account