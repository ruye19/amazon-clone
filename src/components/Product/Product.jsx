import React, { useEffect } from 'react'
import classes from './Product.module.css'
import FormatCurrency from '../FormatCurrency/FormatCurrency'
import { useState } from 'react'
import axios from 'axios'
import ProductSlice from './ProductSlice'
import { Class } from '@mui/icons-material'

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
    
      <div className={classes.productWrapper}>
        {product.length > 0 ? (
      product.map((productt) => (
        <ProductSlice key={productt.id} product={productt} />
      ))
    ) : (
      <p>Loading products...</p> )}
      </div>
   
  )
}

export default Product
