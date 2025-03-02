import React from 'react'
import { Rating } from '@mui/material'
import FormatCurrency from '../FormatCurrency/FormatCurrency'

function ProductSlice({product}) {
    const data = product
  return (
    <div>
      <a href="">
        <img src={data.image} alt="productImage" />
        </a>
      <div>
        <p>{data.title}</p>
        <div>
           <Rating value={data.rating.rate} precision={0.2}></Rating>
             <small>{data.rating.count}</small>
        </div>
        <FormatCurrency amount={data.price} />
      </div>
      <button>
        add to card
      </button>

    </div>
  )
}

export default ProductSlice
