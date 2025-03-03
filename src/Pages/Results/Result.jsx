import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoint'
import classes from './Result.module.css'
import ProductSlice from '../../components/Product/ProductSlice'

const Result = () => {
  const {catagoryName}=useParams()
  const {results,setResults}=useState
    // console.log(catagoryName)

    useEffect(() => {
      (async () => {
        try {
          const fetch= await axios.get(`${productUrl}/product/catagory/${catagoryName}`)
          setResults(fetch.data)
          // console.log(fetch.data)
        } catch (error) {
          console.log("error: ", error)
        }
        
      })
    
    }, [])
  
  return (
    <Layout>
        <div>
          <h1 style={{padding:'30px'}}>Results</h1>
          <p style={{padding:'30px'}}>catagory / {catagoryName}</p>
          <hr />

          <div className={classes.product_container}>
            {
              results?.map((product)=>(
                <ProductSlice key={product.id} product={product}/>
              ))
            }

          </div>

        </div>
    </Layout>
  )
}

export default Result
