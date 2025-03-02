import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DataImage } from './DataImage'
import classes from './Carousel.module.css'

const bannerItem = () => {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
>

        {DataImage.map((item, index) => (
          <div key={index}>
            <img src={item} alt='banner' />
          </div>
        ))}


      </Carousel>
      <div className={classes.bannerFade}>
      </div>
    </div>
  )
}

export default bannerItem
