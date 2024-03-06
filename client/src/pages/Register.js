import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/auth'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";


function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function togglePassword() {
        setShowPassword(prevE => !prevE)
    }

    const [error, setError] = useState('')

    const {createUser} = UserAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        try {
             await createUser(email, password)
             toast.success('Account created successfully')
             navigate('/login')

        } catch (e) {
            setError(e.message)
            toast(e.message);
        }

        setEmail('')
        setPassword('')
    }

  return (
    <div>
    <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center justify-center md:w-1/3 md:mx-auto m-2 p-2 border border-slate-300 rounded shadow-2xl  '>
              <img src={logo} alt='logo' className='w-20 my-2' />

              <div className='w-full flex flex-col items-center gap-4'>
                    <h1 className='text-2xl font-bold'>Welcome Back</h1>

                    <h2 className='text-xl font-bold'>Create an Account</h2>
              </div>


              <div className='flex flex-col gap-2 w-full m-2'>
                  
                  <label className='text-base'>Email</label>
                  <input 
                      type=''
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                  />

                  <label className='text-base'>Password</label>
                  <input 
                      type={showPassword? 'text' : 'password'}
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className=' relative mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                  />

                <div onClick={togglePassword} className='absolute bottom-[294px] right-8 text-lg'>
                          {showPassword ? <BiShowAlt /> : <BiHide/>}
                </div>

                  <button className='bg-blue-500 p-2 w-full rounded text-white my-2 md:my-4 text-lg'>Create Account</button>

                  <div className='text-xs flex justify-center md:my-2'>
                        <p>Already have an account? <Link to={'/login'} className='text-cgreen'>Login here</Link></p>
                  </div>
              </div>
        </form>
    </div>
</div>
  )
}

export default Register