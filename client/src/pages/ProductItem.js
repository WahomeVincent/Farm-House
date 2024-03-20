import React, { useEffect, useState } from 'react'
import Allproducts from '../components/Allproducts'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/productSlice';
import toast from 'react-hot-toast';

function ProductItem() {
  
    const { filterBy } = useParams();
    const productData = useSelector((state) => state.product.productList);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Update selectedProduct when productData or filterBy changes
    useEffect(() => {
        const productFilter = productData.find(item => item._id === filterBy);
        if (productFilter) {
            setSelectedProduct(productFilter);
        }
    }, [productData, filterBy]);

    const dispatch = useDispatch();

    function handleAddToCart() {
        if (selectedProduct) {
            dispatch(addCartItem(selectedProduct));
        }
    }

    

  return (
    <div> 
        {selectedProduct ? 
        <>    
        <div>
        <div className='mx-auto w-10/12 md:w-1/2 m-2 border border-slate-400 rounded shadow-lg drop-shadow-lg'>
                      <img src={selectedProduct.image} alt='produce' className='md:h-80 w-full'/>

                      <div className='my-2 px-1 '>
                          <h2 className='text-lg md:text-xl font-bold flex justify-center text-cgreen border-2 border-slate-300 rounded shadow'>{selectedProduct.name}</h2>
                      </div>


                      <div className='my-2 px-1 md:px-2 '>
                          <h2 className='text-sm md:text-base font-bold tracking-wider'>{selectedProduct.description}</h2>
                      </div>

                      <div className='flex justify-between my-4'>
                            <h3 className='text-xl text-blue-900 px-1'><span className='font-bold text-cgreen'>Kes: </span>{selectedProduct.price}</h3>
                            <button onClick={handleAddToCart} className='bg-cgreen text-white rounded text-lg font-bold px-1 mx-1'>Add to cart</button>
                      </div>
                   
                      
                
            </div>    
        </div>

        <Allproducts 
            heading='Related Products'
        />
        </>

        :
        <>
            <div class="center-item">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
            </div>
        </> 
        }
    </div>
  )
}

export default ProductItem