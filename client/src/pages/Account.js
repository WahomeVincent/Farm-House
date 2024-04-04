import React from 'react'
import { UserAuth } from '../context/auth'
import { Link, useNavigate } from 'react-router-dom'

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
        <div className='m-4 md:flex md:flex-col md:items-center md:justify-center'>
            <h1 className='font-bold text-xl underline'>My Account</h1>
            <p className='my-4'>My email is: {user && user.email} </p>

            <div className='flex items-center justify-evenly'>
                <button onClick={handleLogout} className='bg-blue-500 p-2 rounded text-white mx-4 my-4'>Logout</button>
                <Link to={'/products'} className='bg-cgreen text-white p-2 rounded'>Search products</Link>
            </div>

        </div>
    </div>
  )
}

export default Account