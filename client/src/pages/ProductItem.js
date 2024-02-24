import React from 'react'
import Allproducts from '../components/Allproducts'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ProductItem() {
    const { filterBy } = useParams();
    const productData = useSelector((state) => state.product.productList)
    const productFilter = productData.filter((item) => item._id === filterBy)[0]

  return (
    <div>
        <div>
        <div className='mx-auto w-10/12 m-2 border border-slate-400 rounded shadow-lg drop-shadow-lg'>
                      <img src={productFilter.image} alt='produce' className='h-1/4 w-full'/>

                      <div className='my-2 px-1 '>
                          <h2 className='text-lg font-bold flex justify-center text-cgreen border-2 border-slate-300 rounded shadow'>{productFilter.name}</h2>
                      </div>


                      <div className='my-2 px-1 '>
                          <h2 className='text-sm font-bold tracking-wider'>{productFilter.description}</h2>
                      </div>

                      <div className='flex justify-between my-4'>
                            <h3 className='text-xl px-1'><span className='font-bold'>Kes: </span>{productFilter.price}</h3>
                            <button className='bg-cgreen text-white rounded text-lg font-bold px-1 mx-1'>Add to cart</button>
                      </div>
            </div>    
        </div>

        <Allproducts 
            heading='Related Products'
        />
    </div>
  )
}

export default ProductItem