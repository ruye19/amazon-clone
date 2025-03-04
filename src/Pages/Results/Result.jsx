import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams , useLocation} from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoint'
import classes from './Result.module.css'
import ProductSlice from '../../components/Product/ProductSlice'
import Loading from '../../components/Loading/Loading'

const Result = () => {
  const location = useLocation(); // Get location object
  const queryParams = new URLSearchParams(location.search);
  const categoryTitle = queryParams.get("title"); // Extract title from UR
  const {catagoryid}=useParams()
  
  const [results,setResults]=useState([])
  const [isLoading, setisLoading] = useState(false)

    console.log(catagoryid)

    useEffect(() => {
      (async () => {
        try {
          const data= await axios.get(`https://api.escuelajs.co/api/v1/categories/${catagoryid}/products`)
          setResults(data.data)
          console.log(data)
        } catch (error) {
          console.log("error: ", error)
        }finally{
           setisLoading(false)
        }
        
      })()
    
    }, [])
  
  return (
    <Layout>
      {isLoading ? <Loading/> :

          <div>
          <h1 style={{padding:'30px'}}>Results</h1>
          <p style={{padding:'30px'}}>catagory / {categoryTitle}</p>

          <hr />

          <div className={classes.product_container}>
            {
              results?.map((product)=>(
                <ProductSlice key={product.id} product={product}/>
              ))
            }

          </div>

          </div>
      }
        
    </Layout>
  )
}

export default Result
