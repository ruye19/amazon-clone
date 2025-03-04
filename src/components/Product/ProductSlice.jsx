import React, { useContext, useState } from "react";
import FormatCurrency from "../FormatCurrency/FormatCurrency";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import { DataContext } from "../dataProvider/DataProvider";
import { Type } from "../../utility/action.type";
import { CancelScheduleSend } from "@mui/icons-material";

function ProductSlice({ product, flex }) {
  const {image,title,id,price,description} =product;


  const [State,dispatch] = useContext(DataContext)

  const addToCart =( )=>{

    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        image,title,id,price,description
      }
    })
  }



  return (
    <div className={`${classes.productSlice} ${flex ? classes.productDetail : ""}`}>
      {/* Product Image */}
      <Link className={classes.imageProduct} to={`/products/${product.id}?title=${encodeURIComponent(product.title)}`}>
        {product.images && product.images.length > 0 ? (
          <img src={product.images[0]} alt="productImage" />
        ) : (
          <p>No image available</p> // Fallback text
        )}
      </Link>

      {/* Product Info */}
      <div className={classes.productInfo}>
        <h3>{product.title}</h3>

        {/* Show Description ONLY when `flex` is true */}
        <p className={`${classes.description} ${flex ? classes.show : ""}`}>
          {product.description}
        </p>

        <div className={classes.price}>
          <FormatCurrency amount={product.price} />
        </div>

        {/* Button changes based on flex */}
        {flex ? (
          <button className={classes.buyNow}>Buy Now</button>
        ) : (
          <button className={classes.addCart} onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductSlice;
