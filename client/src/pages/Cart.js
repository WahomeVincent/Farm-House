import React from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function Cart() {
const productCart = useSelector(state => state.product.cartItem)

  return (
    <div >
          <h1 className='m-2 text-2xl'>Cart</h1>
          <div className='flex flex-col m-2 gap-4'>
                {productCart.map((item) => {
                  return(
                <div className ='flex border-t border-b py-2 ' >
                    <div key={item}></div>
                    <div className='flex flex-col border rounded'>
                          <img src={item.image} className='w-32 h-32'/>
                    </div>

                    <div className='flex flex-col justify-between  w-1/4 mx-4'>
                          <h2 className='text-'>{item.name}</h2>
                          <div className='flex items-center gap-2 border bg-slate-100 px-1 w-3/4 rounded'>
                              <FiPlus /><span className='bg-white px-1'>2</span><FiMinus />
                          </div>
                    </div>

                    <div className='flex flex-col justify-between'>
                          <p>Kes: {item.price}</p>
                          <p className='flex items-center gap-1 text-sm text-slate-600 hover:text-red-500' ><MdDelete /> <span className=''>Delete</span> </p>
                    </div>
                </div>
                        )})
                }


                <div className='m-2 border rounded'>
                      <h1 className='mx-2 my-2 text-xl border-b pb-2'>Order Summary</h1>
                      <div className='flex items-center justify-between mx-2 my-4'>
                          <p className='text-slate-500'>Discount</p>
                          <p>Kes: 10</p>
                      </div>

                      <div className='flex items-center justify-between mx-2 my-4'>
                          <p className='text-slate-500'>Delivery</p>
                          <p>Kes: 10</p>
                      </div>

                      <div className='flex items-center justify-between mx-2 my-2 border-t pt-2'>
                          <p className='text-slate-500'>Total</p>
                          <p className='text-2xl'>Kes: 10</p>
                      </div>
                </div>
          </div>
    </div>
  )
}

export default Cart