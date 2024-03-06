import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import googleicon from '../assets/google-icon.webp'
import { UserAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";

function Login() {

  const { logIn } = UserAuth()

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')
 const [showPassword, setShowPassword] = useState(false)

 function togglePassword() {
  setShowPassword(prevE => !prevE )
  console.log(showPassword);
 }

 const navigate = useNavigate()

 async function handleSubmit (e) {
    e.preventDefault()
    try {
      await logIn(email, password)      
      toast.success('Logged in successfully')
      navigate('/account')

    } catch (error) {
      setError(error.message)
      console.log(error.message);
      toast.error('Invalid email or password')
    }
    
 }

  return (
    <div>
        <div className=''>
            <form  className='flex flex-col gap-3 items-center justify-center md:w-1/3 md:mx-auto m-2 p-2 border border-slate-300 rounded shadow-2xl  '>
                  <img src={logo} alt='logo' className='w-20 h-16' />
                  <h1 className='text-xl font-bold'>Welcome Back</h1>

                  <h2 className='text-xl font-bold'>Login</h2>

                  <div className='flex bg-slate-200 rounded p-1 items-center justify-center w-full my-2'>
                    <img src={googleicon} alt='google' className='w-10' />
                    <p>
                      Sign in with Google
                    </p>
                  </div>

                  <div className='w-full relative my-2'>
                    <hr></hr>
                    <p className='absolute -top-5 bg-white left-36 md:left-48 text-lg p-1 text-slate-500'>or</p>
                  </div>


                  <div className='flex flex-col gap-1 w-full m-2'>
                      <label className='text-base'>Email</label>
                      <input 
                          type=''
                          placeholder=''
                          name='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'

                      />

                      <label className='text-base'>Password</label>
                      <input 
                          type={showPassword ? 'text' : 'password'}
                          name='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className='relative mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                      />

                      <div onClick={togglePassword} className='absolute bottom-[248px] right-8 text-lg'>
                          {showPassword ? <BiShowAlt /> : <BiHide/>}
                      </div>

                      <button className='bg-blue-500 p-2 w-full rounded text-white my-2 text-lg'>Sign in</button>

                      <div onClick={togglePassword} className='text-xs flex justify-center'>
                            <p>Don't have an account? <Link to={'/register'} className='text-cgreen'>Register here</Link></p>
                      </div>
                  </div>
            </form>
        </div>
    </div>
  )
}

export default Login