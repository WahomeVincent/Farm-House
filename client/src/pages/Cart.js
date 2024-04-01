import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { deleteCartItem, increaseItemNo, decreaseItemNo } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Cart() {
const productCart = useSelector(state => state.product.cartItem)
let totalPriceCart = productCart.reduce((acc, curr) => acc + curr.total,0)

let discount = '0.00'
let deliveryFee = 100

if(totalPriceCart > 2000){
    discount = Math.floor(totalPriceCart * 0.05)
}

let totalPrice = (totalPriceCart + deliveryFee) - discount 

const dispatch = useDispatch()

const [showPopUp, setShowPopUp] = useState(false)
const [phonenumber, setPhoneNumber] = useState()

function proceedToPay(){
    setShowPopUp(prevE => !prevE)
}

async function handlePayment() {
const amount = totalPrice
const phone = phonenumber
  const paymentData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/stkpush`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({amount, phone}),
  })
}



  return (
    <div >
          <h1 className='m-2 text-2xl border-b pb-1'>Cart</h1>
          
          {productCart[0] ?
            <div className='md:flex'> 
              <div className='flex flex-col m-2 gap-4 md:w-1/2 md:border md:border-slate-300 md:shadow-lg md:rounded md:p-2'>
                    {productCart.map((item, index) => {
                      return(
                    <div key={index}  className ='flex md:justify-between border-b py-2' >
                        <div className='flex flex-col border rounded mx-1'>
                              <img src={item.image} className='w-32 md:w-48 h-32 md:h-40 object-cover'/>
                        </div>
                    

                        <div className='flex flex-col justify-between  w-1/4 md:w-2/5 mx-4 md:mr-28'>
                              <h2 className='md:text-xl'>{item.name}</h2>
                              <div className='flex items-center gap-2 md:text-xl'>
                                    <button onClick={() => dispatch(increaseItemNo(item._id))} className='bg-slate-200 p-1 rounded '>
                                        <FiPlus  />
                                    </button>
                                    <span className='bg-white px-1'>{item.quantity}</span>
                                    <button onClick={() => dispatch(decreaseItemNo(item._id))} className='bg-slate-200 p-1 rounded '>
                                        <FiMinus />
                                    </button>
                              </div>
                        </div>

                        <div className='flex flex-col justify-between md:text-xl md: w-1/4'>
                            <div>
                              <p className='text-cgreen'>Total :</p>
                              <p className='my-1'>Kes <span className='text-blue-900'>{item.total}</span></p>
                            </div>

                              <button onClick={() => dispatch(deleteCartItem([item._id, item.name]))} className='flex items-center gap-1 text-sm text-slate-600 hover:text-red-500 md:text-sm' ><MdDelete /> <span className=''>Delete</span> </button>
                        </div>
                        
                    </div>
                    
                            )})
                    }
                    <Link to={'/products'} className='bg-slate-300 text-white p-2 rounded w-1/2 mx-auto'>Continue Shopping...</Link>

              </div>
                    <div className='m-2 border rounded shadow-lg drop-shadow-lg md:w-2/5 md:ml-20 md:h-fit md:text-lg'>
                          <h1 className='mx-2 my-2 text-xl border-b pb-2'>Order Summary</h1>
                          <div className='flex items-center justify-between mx-2 my-4'>
                              <p className='text-slate-500'>Discount</p>
                              <p >Kes: <span className='text-slate-700'>{discount}</span></p>
                          </div>

                          <div className='flex items-center justify-between mx-2 my-4'>
                              <p className='text-slate-500'>Delivery</p>
                              <p>Kes:  <span className='text-slate-700'>{deliveryFee}</span></p>
                          </div>

                          <div className='flex items-center justify-between mx-2 my-4'>
                              <p className='text-slate-500'>Total Items</p>
                              <p>Kes:  <span className='text-slate-700'>{totalPriceCart}</span></p>
                          </div>

                          <div className='flex items-center justify-between mx-2 my-2 border-t pt-2'>
                              <p className='text-slate-700'>Total</p>
                              <p className='text-2xl'>Kes: {totalPrice}</p>
                          </div>
                          
                            
                          <button onClick={proceedToPay} className='bg-cgreen w-2/3 mx-12 my-4 p-2 text-white text-lg mt-4 rounded'>
                              Proceed to Pay
                          </button>
                              
                    </div>


                          {/* Popup */}
                          {showPopUp &&
                                      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                          <div className='flex flex-col items-center justify-center w-5/6 md:w-1/3 mx-auto border rounded shadow-lg gap-1 bg-white'>
                           
                           <XMarkIcon onClick={() => setShowPopUp(false)} className='h-6 border rounded-full bg-slate-100 ml-auto mr-2 mt-2 ' />
                           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png' alt='mpesa-logo' className='h-20' />
                              <h1 className='text-2xl border-b my-2'>Pay with <span className='text-cgreen'>Mpesa</span></h1>
                              
                              
                              <p className='text-lg'>Total Amount</p>
                              <p className='bg-blue-400 rounded text-white text-lg p-1 px-4 my-2'>Kes: {totalPrice}</p>
                              <p className='text-lg'>Enter Phone Number</p>
                              <input 
                                  placeholder='07********'
                                  type='number'
                                  name='phonenumber'
                                  value={phonenumber}
                                  onChange={(e) => setPhoneNumber(e.target.value)}
                                  className='mx-6 py-5 text-lg text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"  rounded-lg  h-8'

                              />
                              <button onClick={handlePayment} className='bg-cgreen text-white w-2/3 my-4 rounded p-2 text-xl font-bold mt-4'>Pay</button>
                          </div>
                          </div>
                            }
            </div>
              :
              <div className='flex flex-col gap-4 items-center justify-center my-20'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW85y7njhgj93sHA9TKl57dY4c68Bpg862mQqkd4uqYw&s' alt='cart icon'/>
                  <h2 className='text-lg'>No Items added to cart.</h2>
                  <Link to={'/products'} className='bg-cgreen text-white p-2 rounded'>Search products</Link>
              </div>
          }
    </div>
  )
}

export default Cart