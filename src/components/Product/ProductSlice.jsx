import React from 'react'
import  Rating  from '@mui/material/Rating'
import FormatCurrency from '../FormatCurrency/FormatCurrency'
import classes from './Product.module.css'
function ProductSlice({product}) {
    const data = product
  return (
    <div className={classes.productSlice}>
      <a className={classes.imageProduct} href="">
        <img src={data.image} alt="productImage" />
        </a>
      <div className={classes.productInfo}>
        <p>{data.title}</p>
        <div className={classes.rating}>
            <Rating value={data.rating.rate} precision={0.2}></Rating>
             <p>{data.rating.count}</p>
        </div>
        <div className={classes.price}> 
        <FormatCurrency amount={data.price} />

        </div>
      </div>
      <button className={classes.addCart}>
        add to card
      </button>

    </div>
  )
}

export default ProductSlice
