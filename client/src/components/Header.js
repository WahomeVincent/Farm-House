import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div>
        <div className='flex items-center justify-between bg-slate-200 h-12'>
            <img src='https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054_960_720.png' alt='logo' className='h-3/4 mx-4 rounded'/>

            <div className='flex text-xl gap-6 mx-6'>
                <div  className='relative'>
                        <FaCartShopping />
                        <p className='absolute bottom-3 left-3 bg-red-500 rounded-xl text-sm  h-5 w-5 text-center text-white border '>0</p>
                </div>
                <RxHamburgerMenu />
            </div>
        </div>
    </div>
  )
}

export default Header