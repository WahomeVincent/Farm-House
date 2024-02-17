import React from 'react'
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

function Categories() {
  
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`
    });
  });

  return (
    <div className=''>
        <div className='container md:justify-evenly' {...bind()}>
              <div className='flex flex-col items-center '>
                    <animated.div className='card shadow-lg drop-shadow-lg'   style={{ ...style,
                            backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')`
                          }}
                    /> 

                    <h1 className='text-lg font-mono'>Vegetables</h1>
              </div>

              <div className='flex flex-col items-center'>
                    <animated.div className='card shadow-lg drop-shadow-lg'   style={{ ...style,
                            backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')`
                          }}
                    /> 

                    <h1 className='text-lg font-mono'>Fruits</h1>
              </div>

              <div className='flex flex-col items-center'>
                    <animated.div className='card shadow-lg drop-shadow-lg'   style={{ ...style,
                            backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')`
                          }}
                    /> 

                    <h1 className='text-lg font-mono'>Meat</h1>
              </div>

              <div className='flex flex-col items-center'>
                    <animated.div className='card shadow-lg drop-shadow-lg'   style={{ ...style,
                            backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')`
                          }}
                    /> 

                    <h1 className='text-lg font-mono'>Dairy</h1>
              </div>

              <div className='flex flex-col items-center'>
                    <animated.div className='card shadow-lg drop-shadow-lg'   style={{ ...style,
                            backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg')`
                          }}
                    /> 

                    <h1 className='text-lg font-mono'>Eggs</h1>
              </div>
             
        </div>
    </div>
  )
}

export default Categories