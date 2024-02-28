import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { userAuth } from '../context/auth'

function Register() {

    const [data, setData] = useState({
        sirName : '',
        firstName : '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('')

    function handleInputChange(e) {
        const {name, value} = e.target
        setData(preve => {
            return{
                ...preve,
                [name] : value
            }
        })
        
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        try {
            // await createUser(data.email, data.password)
        } catch (error) {
            
        }
    }

  return (
    <div>
    <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center justify-center m-2 p-2 border border-slate-300 rounded shadow-2xl  '>
              <img src={logo} alt='logo' className='w-20' />

              <div className='bg-cgreen w-full flex flex-col items-center gap-2 text-white '>
                    <h1 className='text-2xl font-bold'>Welcome Back</h1>

                    <h2 className='text-xl font-bold'>Create an Account</h2>
              </div>


              <div className='flex flex-col gap-2 w-full m-2'>
                  <label className='text-base'>Sirname</label>
                  <input 
                      type='text'
                      placeholder=''
                      name='sirName'
                      value={data.sirName}
                      onChange={handleInputChange}
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'

                  />

                  <label className='text-base'>FirstName</label>
                  <input 
                      type=''
                      name='firstName'
                      value={data.firstName}
                      onChange={handleInputChange}
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'


                  />

                  <label className='text-base'>Email</label>
                  <input 
                      type=''
                      name='email'
                      value={data.email}
                      onChange={handleInputChange}
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                  />

                  <label className='text-base'>Password</label>
                  <input 
                      type=''
                      name='password'
                      value={data.password}
                      onChange={handleInputChange}
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                  />

                  <label className='text-base'>Confrim Password</label>
                  <input 
                      type=''
                      name='confirmpassword'
                      value={data.confirmPassword}
                      onChange={handleInputChange}
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'


                  />

                  <button className='bg-blue-500 p-2 w-full rounded text-white my-2 text-lg'>Create Account</button>

                  <div className='text-xs flex justify-center'>
                        <p>Already have an account? <Link to={'/login'} className='text-cgreen'>Login here</Link></p>
                  </div>
              </div>
        </form>
    </div>
</div>
  )
}

export default Register