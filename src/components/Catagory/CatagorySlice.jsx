import React from "react"
import classes from './Catagory.module.css'
const CatagorySlice = ({data}) => {
  return (
    <div className={classes.catagorySlice}>
      <a href="">
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default CatagorySlice
