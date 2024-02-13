import React from 'react'

function Newproduct() {
  return (
    <div>
      <div className=''>
          <form className='my-10 p-2 border border-slate-300 m-2 rounded shadow drop-shadow md:max-w-lg md:m-auto md:my-4'>

            <div className='my-2'>
                  <label htmlFor='name' className='text-lg mx-2'>Name</label>
                  <input 
                    type='text'
                    placeholder='name'
                    className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'


                  />
                
                    <label htmlFor='category' className='text-lg mx-2'>Category</label>
                    <input 
                      type='text'
                      placeholder='category'
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'

                    />
                    
            </div>

            <div className='my-2'>
                <h1 className='text-lg mx-2'>Image</h1>
                <img src='https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_960_720.jpg' alt='' className='rounded' />      
            </div>

            <div className='flex flex-col my-2'>
                <label htmlFor='price' className='text-lg mx-2'>Price</label>
                <input 
                  type='text'
                  placeholder='price'
                  className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'

                />
                <label htmlFor='Description' className='text-lg mx-2'>Description</label>
                <input 
                  type='text'
                  placeholder='description'
                  className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'

                />
            </div>

            <div className='flex justify-center text-lg bg-cgreen rounded p-2 text-white'>
                <button>Add item</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Newproduct