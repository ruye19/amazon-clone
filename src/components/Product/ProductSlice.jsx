import React from "react";
import FormatCurrency from "../FormatCurrency/FormatCurrency";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

function ProductSlice({ product, flex }) {
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
          <button className={classes.addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductSlice;
