import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { deleteCartItem, increaseItemNo, decreaseItemNo } from '../redux/productSlice';
import { Link } from 'react-router-dom';

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

  return (
    <div >
          <h1 className='m-2 text-2xl border-b pb-1'>Cart</h1>
          {productCart[0] ? 
              <div className='flex flex-col m-2 gap-4'>
                    {productCart.map((item, index) => {
                      return(
                    <div key={index}  className ='flex border-t border-b py-2 ' >
                        <div className='flex flex-col border rounded'>
                              <img src={item.image} className='w-32 h-32'/>
                        </div>
                    

                        <div className='flex flex-col justify-between  w-1/4 mx-4'>
                              <h2 className='text-'>{item.name}</h2>
                              <div className='flex items-center gap-2'>
                                    <button onClick={() => dispatch(increaseItemNo(item._id))} className='bg-slate-200 p-1 rounded '>
                                        <FiPlus  />
                                    </button>
                                    <span className='bg-white px-1'>{item.quantity}</span>
                                    <button onClick={() => dispatch(decreaseItemNo(item._id))} className='bg-slate-200 p-1 rounded '>
                                        <FiMinus />
                                    </button>
                              </div>
                        </div>

                        <div className='flex flex-col justify-between'>
                              <p>Total : Kes {item.total}</p>
                              <button onClick={() => dispatch(deleteCartItem([item._id, item.name]))} className='flex items-center gap-1 text-sm text-slate-600 hover:text-red-500' ><MdDelete /> <span className=''>Delete</span> </button>
                        </div>
                    </div>
                            )})
                    }


                    <div className='m-2 border rounded'>
                          <h1 className='mx-2 my-2 text-xl border-b pb-2'>Order Summary</h1>
                          <div className='flex items-center justify-between mx-2 my-4'>
                              <p className='text-slate-500'>Discount</p>
                              <p >Kes: <span className='text-slate-700'>{discount}</span></p>
                          </div>

                          <div className='flex items-center justify-between mx-2 my-4'>
                              <p className='text-slate-500'>Delivery</p>
                              <p>Kes:  <span className='text-slate-700'>{deliveryFee}</span></p>
                          </div>

                          <div className='flex items-center justify-between mx-2 my-2 border-t pt-2'>
                              <p className='text-slate-700'>Total</p>
                              <p className='text-2xl'>Kes: {totalPrice}</p>
                          </div>
                    </div>
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