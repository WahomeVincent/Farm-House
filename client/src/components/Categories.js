import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';

function Categories() {
  const productData = useSelector((state) => state.product.productList);

  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? event.delta[0] : 0}deg)`,
    });
  });

  const uniqueCategories = [...new Set(productData.map((item) => item.category))];

  return (
    <div className=''>
      <h1 className='mx-4 mt-2 underline text-xl font-bold'>Our Products</h1>
      <div className='container md:justify-evenly' {...bind()}>
        {uniqueCategories.map((category) => {
          // Specify the URL for each category
          const categoryUrl = `/products/${category.toLowerCase()}`;

          return (
            <Link to={categoryUrl} key={category} className='flex flex-col items-center'>
              <animated.div
                className='card shadow-lg drop-shadow-lg'
                style={{
                  ...style,
                  backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')`,
                }}
              />

              <h1 className='text-lg font-mono'>{category}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
