import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { HiArrowSmRight } from "react-icons/hi";

function Allproducts({heading}) {
  const productData = useSelector((state) => state.product.productList);
  const [displayCount, setDisplayCount] = useState(4);
  const loadingArray = new Array(6).fill(null)

  const loadMore = () => {
    setDisplayCount(displayCount + 4);
  };

  return (
    <div>
          <h1 className='m-2 mx-4 mt-2 underline text-xl font-bold'> {heading}</h1>
          <div className='flex flex-wrap justify-around'>
                  {productData[0] ? productData.slice(0, displayCount).map((item) => {
                      return (
                        <Card
                          key={item._id}
                          id={item._id}
                          image={item.image}
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          category={item.category}
                        />
                      );
                    })
                    : loadingArray.map(item => {
                      return(
                        <div className='w-40 h-40 md:w-64 m-2 border border-slate-400 rounded shadow-lg drop-shadow-lg'>
                              <span className="loader flex items-center justify-center"></span>
                        </div>       
                      
                      )
                    })
                  }
          </div>
          
          {displayCount < productData.length && (
            <div className='flex items center justify-center'>
                  <button onClick={loadMore} className='mt-4 mx-4 p-2 bg-blue-700  text-white font-bold rounded'>
                    Load More
                    <HiArrowSmRight className='inline-block mx-1 text-lg'/>
                  </button>
            </div>
          )}
    </div>
  );
}

export default Allproducts;
