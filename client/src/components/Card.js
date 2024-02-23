import React from 'react'

function Card({image, name, price, category}) {
  return (
    <div>
            <div className='w-40 md:w-64 m-2 border border-slate-400 rounded shadow-lg drop-shadow-lg'>
                  <img src={image} alt='produce' className='h-28 w-full'/>

                  <div className='my-2 px-1 '>
                      <h2 className='text-sm'>{name}</h2>
                  </div>

                  <div className='flex justify-between my-2'>
                        <h3 className='text-sm px-1'>Kes: {price}</h3>
                        <button className='bg-cgreen text-white rounded text-sm px-1 mx-1'>Add to cart</button>
                  </div>
            </div>    
    </div>
  )
}

export default Card