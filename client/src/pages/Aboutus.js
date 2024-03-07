import React from 'react'
import farmer from '../assets/farmer.jpg'
import story from '../assets/story.jpg'
import tractor from '../assets/tractor.jpg'
import { Link } from 'react-router-dom'

function Aboutus() {

    return (
    <div>
        <div>
            <div className='relative w-full '>
                <img src={farmer} alt='' className=' w-full h-96 object-cover'/>
            </div>
            <div className='absolute bottom-24 md:top-72 right-5 md:right-10 w-3/4 md:w-1/3 md:h-1/3 bg-white border shadow'>
                <h1 className='text-5xl p-2 text-cgreen leading-normal'>Together to feed the world.</h1>
            </div>

            <h1 className='text-2xl border-b-2 mt-20 mx-4'>Our Story</h1>

            <div className='mt-4 mx-2 md:flex md:items-center md:justify-between md:mx-4 md:gap-5'>
                <p className='text-sm md:w-1/2 md:text-base'>In the heart of Kiambu, where fertile soil meets a passion for organic living, the seeds of <span className='text-cgreen'>Farm House</span> were sown. Our story begins with a shared dream among a group of individuals who saw an opportunity to make a difference in the way we consume and appreciate fresh produce.

                Motivated by a deep-rooted love for nature and a commitment to healthier living, our founders embarked on a journey to bridge the gap between conscious consumers and sustainable agriculture. Inspired by the richness of local farmlands and the desire to bring the best of organic produce to every household.

                </p>

                <img src={story} alt='' className='md:w-1/3 md:h-60 rounded'/>
               
            </div>

            <div className='mt-24 mx-2 md:flex md:items-center md:justify-between md:mx-4 md:gap-5 md:border-t py-2'>
                <img src={tractor} alt='' className='md:w-1/3 md:h-60 rounded'/>
                <div className='md:w-1/2'>
                    <h1 className='text-lg font-bold md:text-xl underline my-2 md:my-2'>Our Mission</h1>
                    <p className='text-sm md:text-base'> At Farm House, we are on a mission to cultivate a healthier and more sustainable world. Rooted in our passion for organic farming and a deep respect for nature, we strive to bring nourishing, responsibly sourced products directly to your doorstep.
                    We are committed to providing you with a curated selection of premium organic farm products, carefully harvested and produced with the utmost dedication to quality. Through our platform, we aim to connect conscious consumers with the bounties of nature, promoting not only physical well-being but also fostering a harmonious relationship with the environment.
                    </p>
                </div>
            </div>

            <div className='flex justify-center my-4 md:my-8 '>
                <Link to={'/products'} className='bg-cgreen text-white p-2 rounded md:text-xl '>Search products</Link>
            </div>
        </div>
    </div>
  )
}

export default Aboutus