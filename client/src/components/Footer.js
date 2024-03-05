import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {

  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <div className='bg-footer text-white border mt-6'>
        <div className='m-6 md:flex md:justify-between  '>
          <div className='flex flex-col gap-2 my-4 md:w-1/3'>
              <h1 className='text-lg md:text-xl font-bold underline'>Farm House</h1>
              <p>Welcome to Farm House, your one-stop destination for fresh, locally sourced farm produce delivered right to your doorstep. Explore a bountiful selection of fruits, vegetables, and more, harvested with care from our sustainable farms. Shop with confidence, knowing that every item is handpicked for quality and freshness. Join us in supporting local agriculture and indulge in the goodness of farm-fresh goodness. Your journey to healthy living begins here.</p>
          </div>
          
          <div className='flex flex-col gap-2 my-4'>
              <h1 className='text-lg md:text-xl font-bold underline'>Links of Interest</h1>
              <div className='flex flex-col text-lg gap-2 md:gap-4'>
                  <Link to={'/products'}>Products</Link>
                  <Link to={'/aboutus'}>About Us</Link>
                  <Link to={'/contactus'}>Contact Us</Link>
                  <Link to={'/login'}>Sign In</Link>
              </div>
          </div>

          <div className='flex flex-col gap-2 md:gap-4 my-4'>
              <h1 className='text-lg md:text-xl font-bold underline'>Get in Touch</h1>
              <div className='flex gap-2 items-center'>
                  <BsFillTelephoneFill/>
                  <span>+254 712445492.</span>
              </div>
              <div className='flex gap-2 items-center'>
                  <IoMdMail />
                  <span>vincentwahome100@gmail.com</span>
              </div>
              
          </div>

        </div>
          <div className='flex text-xs items-center justify-center border-t py-2'>
                <AiOutlineCopyright />
                <h3>{getCurrentYear()} All Rights Reserved. FarmHouse Co.</h3>
          </div>
    </div>
  )
}

export default Footer