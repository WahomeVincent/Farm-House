import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

function CategoryPage() {
    
const { category } = useParams()
const productData = useSelector(state => state.product.productList)

    // Filter products based on the selected category
const filteredProducts = productData.filter((item) => item.category.toLowerCase()=== category) 
    
  return (
    <div className='flex flex-wrap'>
            {
                filteredProducts.map(item => {
                    return(
                        <Card 
                            key={item._id}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}                
                        />
                    )
                })
            }
    </div>
  )
}

export default CategoryPage