import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserAuth } from "../context/auth";
import toast from "react-hot-toast";


function Header() {

  const { user, logOut } = UserAuth()
  const cartNo = useSelector(state => state.product.cartItem.length)

  const [toggleMenu, setToggleMenu] = useState(false);

  function hideMenu(){
    setToggleMenu(false)
  }

  function toggleSignUp() {
    if(user){
      setTimeout(() => {
        logOut()
        toast.success('Logged Out Successfully.')
      }, '1000')
    }
  }


  return (
    <div className="app border-b bg-white drop-shadow-lg">
      <nav >
        <div className="mx-auto">
          <div className="flex items-center justify-between ">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between my-5 w-full">
              {/* logo */}
                      <div className="mx-4 md:mx-10 text-lg">
                      <NavLink to={'/'}  className="flex gap-1 font-bold text-gray-700 items-center ">

                          <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                          <span>Paper.io</span>
                      </NavLink>
                       
                      </div>
              {/* primary */}
                      <div className="hidden lg:flex items-center gap-8 mx-10 text-lg">
                          
                          <NavLink to={'products'} >Products</NavLink>
                          <NavLink to={'/aboutus'}>Aboutus</NavLink>
                          <NavLink to={'/contactus'}>Contactus</NavLink>
                          <NavLink to={'/cart'} className='relative'><ShoppingCartIcon className="h-6 w-6 "/><span className=" absolute -top-1 left-4 bg-red-600 h-4 w-4 flex items-center justify-center text-white text-sm rounded-full mb-4">{cartNo}</span></NavLink>
                          {user && user.email === 'admin@gmail.com' && 
                            <NavLink to={'/newproduct'}>
                              New Product
                            </NavLink>
                          }
                          {/* <NavLink to={'/account'} >
                              <p className="bg-cgreen text-white p-1 rounded w-32 text-center shadow shadow-amber-950">Get Started</p>
                          </NavLink> */}
                          
                          <button onClick={toggleSignUp} className="bg-cgreen text-white p-1 rounded w-32 text-center shadow shadow-amber-950">
                            {user && user.email ? <div>Logout</div> : <NavLink to={'/login'}>Sign In</NavLink>}
                          </button>
                          

                      </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center mx-4 ">
                <NavLink to={'/cart'}>
                    <ShoppingCartIcon className="h-6 w-6 mx-4 hover:text-cgreen"/>
                        <span className=" absolute top-4 right-12 bg-red-600 h-4 w-4 flex items-center justify-center text-white rounded-full mb-4">
                            {cartNo}
                        </span>
                </NavLink>
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed  w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-96"
          }`} onMouseLeave={hideMenu}
        >
          <div className="px-8 my-2  h-48px" onClick={hideMenu}>
            <div className="flex flex-col gap-8 font-bold tracking-wider" >
             
              <NavLink to={'/products'} >Products</NavLink>
              <NavLink to={'/account'} >Account</NavLink>
              <NavLink to={'/aboutus'} >Aboutus</NavLink>
              <NavLink to={'/contactus'} >Contactus</NavLink>
              <NavLink to={'/login'}>Sign In</NavLink>
              {user && user.email === 'admin@gmail.com' && <NavLink to={'/newproduct'}>New Product</NavLink>}
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;