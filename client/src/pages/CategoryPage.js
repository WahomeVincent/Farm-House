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
    <div>
            {
                filteredProducts.map(item => {
                    return(
                        <Card 
                            key={item}
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