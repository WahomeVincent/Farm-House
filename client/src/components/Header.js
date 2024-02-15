import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {

  const [menu, setMenu] = useState(false)

  function toggleMenu() {
     setMenu(preve => !preve)
  }

  function hideMenu() {
    setMenu(false)
  }

  return (
    <div>
        <div className='flex items-center justify-between bg-cgreen h-12 md:h-14'>
            <img src='https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_960_720.png' alt='logo' className='h-3/4 mx-4 rounded'/>

            <div className=' hidden md:flex items-center justify-between gap-10 text-lg'>
              <Link to={'/newproduct'}>Products</Link>
              <Link to={'/newproduct'}>About Us</Link>
              <Link to={'/newproduct'}>Contact Us</Link>
              <Link to={'/newproduct'}>Testimonials</Link>
              
            </div>

            <div className='flex text-xl gap-6 mx-6'>
                <div  className='relative'>
                        <FaCartShopping className='md:text-2xl'/>
                        <p className='absolute bottom-3 left-3 bg-red-500 rounded-xl text-sm  h-5 w-5 text-center text-white border'>0</p>
                </div>
                <div onClick={toggleMenu}>
                      <RxHamburgerMenu className='md:hidden relative'/>

                        {
                          menu && 
                              <div  onMouseLeave={hideMenu}  className='bg-cgreen border flex text-white flex-col gap-4 px-4 absolute top-12 right-0 w-3/4 h-1/2 md:hidden'>
                                  <Link to={'/newproduct'} className='text-white hover:text-red-400'>Products</Link>
                                  <Link to={'/newproduct'} className='text-white hover:text-red-400'>About Us</Link>
                                  <Link to={'/newproduct'} className='text-white hover:text-red-400'>Contact Us</Link>
                                  <Link to={'/newproduct'} className='text-white hover:text-red-400'>Testimonials</Link>
                              </div>
                        }
                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header