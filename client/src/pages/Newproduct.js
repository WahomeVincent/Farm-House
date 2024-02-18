import React, { useState } from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
import Header from '../components/Header';
import toast from 'react-hot-toast';


function Newproduct() {


const [data, setData] = useState({
  name : '',
  category : '',
  price : '',
  image: '',
  description: '',
})

const [image, setImage] = useState()

function handleImageChange (event) {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];    
    setImage(URL.createObjectURL(file));

    setData((prevData) => ({
      ...prevData,
      image: file.name,
    }));
  }
}

function handleInputChange(e) {
  const {name, value} = e.target
  setData(prevE => {
    return{
      ...prevE, [name] : value
    }
  })

}

function handleSubmit(e) {
  e.preventDefault();
  if (data.name && data.category && data.price && data.image && data.description) {
    
    fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/newproduct`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data)) 

    alert('Product Created Successfully')
  } else {
    alert('Please Input all fields')
  }

      setData(() => {
        return {
            name : '',
            category : '',
            price : '',
            image: '',
            description: '',
          
        }
      })

      setImage(() => {
        return {
          image: ''
        }
      })
}



  return (
    <div>

      <Header />
      <div className=''>

          <form onSubmit={handleSubmit} className='my-10 p-2 border border-slate-300 m-2 rounded shadow drop-shadow md:max-w-lg md:m-auto md:my-4'>

            <div className='my-2'>
                    <label htmlFor='name' className='text-lg mx-2'>Name</label>
                    <input 
                      type='text'
                      name='name'
                      placeholder='name'
                      className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                      onChange={handleInputChange}
                      value={data.name}
                      
                  />
                    
                    <label htmlFor='category' className='text-lg mx-2'>Category</label>
                    <select 
                        name='category' 
                        id='category' 
                        onChange={handleInputChange} 
                        value={data.category} 
                        className='mt-1 my-4 pl-4  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-10'>
                      <option>Select Category</option>
                      <option>Fruits</option>
                      <option>Vegetables</option>
                      <option>Animals</option>
                      <option>Animal Products</option>
                    </select>
                  
                    
            </div>

            <h1 className='text-lg mx-2'>Image</h1>
            <div className='my-2 border w-full h-44 md:h-64 rounded'>
                <div className=' flex flex-col items-center justify-center gap-2 h-full bg-slate-100 '>
                  {
                    image ? image && <img src={image} alt="preview"                       
                    className='w-full h-full rounded'/> :
                    <>
                    <MdOutlineUploadFile className='text-5xl'  />
                    <p>Upload Image</p>
                    <input 
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='font-bold'
                      value={image}
                      
                    />
                    </>
                  }
                    

                </div>

            </div>

            <div className='flex flex-col my-2'>
                <label htmlFor='price' className='text-lg mx-2'>Price in Kes</label>
                <input 
                  type='text'
                  placeholder='price'
                  name='price'
                  className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                  onChange={handleInputChange}
                  value={data.price}

                />
                <label htmlFor='Description' className='text-lg mx-2'>Description</label>
                <textarea
                  type='text-area'
                  name='description'
                  className='mt-1 my-4 pl-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                  onChange={handleInputChange}
                  value={data.description}

                />
            </div>

            <div className=''>
                <button  className='flex justify-center text-lg bg-cgreen rounded p-2 text-white w-full'>Add item</button>
            </div>

          </form>

      </div>
    </div>
  )
}

export default Newproduct