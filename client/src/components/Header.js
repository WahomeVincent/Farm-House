import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/farm-logo.png'
import { useSelector } from 'react-redux';

function Header() {
  const CartNo = useSelector(state => state.product.cartItem.length)
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
     setMenu(preve => !preve)
  }

  function hideMenu() {
    setMenu(false)
  }

  return (
    <div className='bg-white fixed w-full shadow  px-2 md:px-4 z-50'>
        <div className='flex items-center justify-between border-b  h-12 md:h-14'>
            <Link to={'/'} className='h-full'>
                  {/* <img src='https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_960_720.png' alt='logo' className='h-3/4 mx-4 my-1 rounded'/> */}
                  <img src={logo} alt='logo' className='h-3/4 mx-4 my-1 rounded'/>
            </Link>

            {/* Medium and large screens */}
            <div className='hidden md:flex items-center justify-between gap-10 text-lg'>
              <Link to={'/products'}>Products</Link>
              <Link to={'/aboutus'}>About Us</Link>
              <Link to={'/newproduct'}>Contact Us</Link>
              <Link to={'/newproduct'}>Testimonials</Link>
              <Link to={'/newproduct'}>New Product</Link>

            </div>

            {/* Small screens */}
            <div className='flex text-xl gap-6 mx-6'>
                <div  className='relative'>
                        <FaCartShopping className='md:text-2xl text-cgreen'/>
                        <p className='absolute bottom-3 left-3 bg-red-500 rounded-xl text-sm  h-5 w-5 text-center text-white border'>{CartNo}</p>
                </div>
                <div onClick={toggleMenu} className='z-50' onMouseLeave={hideMenu} >
                      <RxHamburgerMenu className='md:hidden relative cursor-pointer text-cgreen' />

                        {
                          menu && 
                              <div   className='bg-white hover:text-red-400 border flex text-white flex-col gap-4 px-4 absolute top-12 right-0 w-3/4 h-1/2 md:hidden shadow-lg drop-shadow-lg border-slate-400 '>
                                  <Link to={'/products'} className='text-black hover:text-red-400'>Products</Link>
                                  <Link to={'/aboutus'} className='text-black hover:text-red-400'>About Us</Link>
                                  <Link to={'/newproduct'} className='text-black hover:text-red-400'>Contact Us</Link>
                                  <Link to={'/newproduct'} className='text-black hover:text-red-400'>Testimonials</Link>
                                  <Link to={'/newproduct'} className='text-black hover:text-red-400'>New Product</Link>

                              </div>

                        }
                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header