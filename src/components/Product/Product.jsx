import React, { useEffect } from 'react'
import clases from './Product.module.css'
import FormatCurrency from '../FormatCurrency/FormatCurrency'
import { useState } from 'react'
import axios from 'axios'
import ProductSlice from './ProductSlice'

const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
     (async () => {
        try {
            const fetch =await axios.get('https://fakestoreapi.com/products')
            setProduct(fetch.data) 
        } catch (error) {
            console.log("error", error);
            
        }
      
     })()
 }, [])

  return (
    
      <div>
        {product.length > 0 ? (
      product.map((productt) => (
        <ProductSlice key={productt.id} product={productt} />
      ))
    ) : (
      <p>Loading products...</p> // Show a loading message while fetching
    )}
      </div>
   
  )
}

export default Product
