import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductSlice from '../../components/Product/ProductSlice';
import classes from './ProductDetail.module.css'
const ProductDetail = () => {
  const { productid } = useParams();
  console.log(productid);

  const [productState, setproductState] = useState(null);

  const location = useLocation(); // Get location object
  const queryParams = new URLSearchParams(location.search);
  const productTitle = queryParams.get("title"); // Extract from url

  useEffect(() => {
    (async () => {
      try {
        const fetch = await axios.get(`https://api.escuelajs.co/api/v1/products/${productid}`);
        setproductState(fetch.data);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [productid]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Product / {productTitle }</p>
        <hr />

        <div className={classes.product_container}>
          {
          productState ? (
            <ProductSlice product={productState} />
          ) : (
            <p>Loading...</p>
          )
          }
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
