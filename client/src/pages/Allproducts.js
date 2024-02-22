import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { HiArrowSmRight } from "react-icons/hi";

function Allproducts() {
  const productData = useSelector((state) => state.product.productList);
  const [displayCount, setDisplayCount] = useState(4);

  const loadMore = () => {
    setDisplayCount(displayCount + 4);
  };

  return (
    <div>
      <h1 className='m-2 mx-4 mt-2 underline text-xl font-bold'> All Products</h1>
      <div className='flex flex-wrap'>
        {productData.slice(0, displayCount).map((item) => {
          return (
            <Card
              key={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              category={item.category}
            />
          );
        })}
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
