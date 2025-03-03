import React from "react"
import classes from './Catagory.module.css'
import { Link } from "react-router"
const CatagorySlice = ({data}) => {
  console.log(data)
  return (
    <div className={classes.catagorySlice}>
      <Link to={`/catagory/${data.title}`}>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  )
}

export default CatagorySlice
