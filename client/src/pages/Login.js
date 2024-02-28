import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import googleicon from '../assets/google-icon.webp'

function Login() {

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  function handleInputChange(e) {
    const {name, value} = e.target
    setData(preve => {
      return {
        ...preve,
        [name] : value
      }
    })
  }
console.log(data);
  return (
    <div>
        <div className=''>
            <form className='flex flex-col gap-4 items-center justify-center m-2 p-2 border border-slate-300 rounded shadow-2xl  '>
                  <img src={logo} alt='logo' className='w-20' />
                  <h1 className='text-xl font-bold'>Welcome Back</h1>

                  <h2 className='text-xl font-bold'>Login</h2>

                  <div className='flex bg-slate-200 rounded p-1 items-center justify-center w-full my-2'>
                    <img src={googleicon} alt='google' className='w-10' />
                    <p>
                      Sign in with Google
                    </p>
                  </div>

                  <div className='w-full relative'>
                    <hr></hr>
                    <p className='absolute -top-5 bg-white left-36 text-lg p-1 text-slate-500'>or</p>
                  </div>


                  <div className='flex flex-col gap-2 w-full m-2'>
                      <label className='text-base'>Email</label>
                      <input 
                          type=''
                          placeholder=''
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

                      <button className='bg-blue-500 p-2 w-full rounded text-white my-2 text-lg'>Sign in</button>

                      <div className='text-xs flex justify-center'>
                            <p>Don't have an account? <Link to={'/register'} className='text-cgreen'>Register here</Link></p>
                      </div>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default Login