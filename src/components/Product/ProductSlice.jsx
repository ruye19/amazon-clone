import React from 'react'
// import  Rating  from '@mui/material/Rating'
import FormatCurrency from '../FormatCurrency/FormatCurrency'
import { Link, useParams } from 'react-router-dom'
import classes from './Product.module.css'
function ProductSlice({product}) {
    const data = product
  return (
    <div className={classes.productSlice}>
      <Link className={classes.imageProduct} to={`/products/${data.id}?title=${encodeURIComponent(product.title)}`}>
  {data.images && data.images.length > 0 ? (
    <img src={data.images[0]} alt="productImage" />
  ) : (
    <p>No image available</p> // Fallback text or image
  )}
</Link>

      <div className={classes.productInfo}>
        <p>{data.title}</p>
        {/* <div className={classes.rating}>
            <Rating value={data.rating.rate} precision={0.2}></Rating>
             <p>{data.rating.count}</p>
        </div> */}
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
