import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

function Card({image, name, price, category, id}) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addCartItem({
      _id: id,
       name: name,
      image: image,
      price: price,
      category: category
    }))
    
  }

  return (
    <div>
            <div className='w-40 md:w-64 m-2 border border-slate-400 rounded shadow-lg drop-shadow-lg'>
                <Link to={`/products/${id}`} onClick={ () => window.scrollTo({top:0, behavior:'smooth'})}>
                      <img src={image} alt='produce' className='h-28 w-full'/>

                      <div className='my-2 px-1 '>
                          <h2 className='text-sm font-bold'>{name}</h2>
                      </div>

                </Link>
                      <div className='flex justify-between my-2'>
                            <h3 className='text-sm px-1'><span className='font-bold'>Kes: </span>{price}</h3>
                            <button onClick={handleAddToCart} className='bg-cgreen text-white rounded text-sm px-1 mx-1'>Add to cart</button>
                      </div>
            </div>    
    </div>
  )
}

export default Card