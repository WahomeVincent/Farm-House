import React, { useEffect, useRef } from 'react'
import Categories from '../components/Categories'
import Allproducts from '../components/Allproducts'
import anime from 'animejs';


function Home() {
      const textWrapperRef = useRef(null);

  useEffect(() => {
    const textWrapper = textWrapperRef.current;

    // Wrap every letter in a span
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 900
      }).add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: (el, i) => 150 + 25 * i
      }).add({
        targets: '.ml14',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    // Clean up
    return () => {
      textWrapper.innerHTML = ''; // Remove the added spans when component unmounts
    };
  }, []);
   
  return (
    <div>
        {/* Hero page */}
        <div className=' '>
                  <div className='relative'>
                        <img src='https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='filter brightness-75 w-full h-[360px] md:h-[460px] object-cover'/>
                  </div>
                  
                  <div className='absolute top-10 m-4 md:flex md:mx-36 md:my-36 md:text-xl md:gap-4'>
                        <div className="ml14 ">
                              <div className="letters " ref={textWrapperRef}>
                              <p className='text-white'>Fresh <span className='text-cgreen'>|</span> </p> 
                              </div>
                              <div className="line"></div>
                        </div>
                        <div className="ml14">
                              <div className="letters text-white  " ref={textWrapperRef}>
                              <p>Quality <span className='text-cgreen'>|</span></p> 
                              </div>
                              <div className="line"></div>
                        </div>
                        <div className="ml14">
                              <div className="letters text-white  " ref={textWrapperRef}>
                              <p>Nutritious <span className='text-cgreen'>|</span></p> 
                              </div>
                              <div className="line"></div>
                        </div>
                  </div>

              
        </div>

        <Categories />

        <Allproducts 
            heading='All Products'
        />

    </div>
  )
}

export default Home