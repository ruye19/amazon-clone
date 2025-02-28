import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import classes from './Header.module.css';
import HeaderUnder from './HeaderUnder';



const Header = () => {
  return (
    <>
    <div className={classes.headerWrapper}>
      {/* Amazon Logo */}
      <div className={classes.imageAmazon}>
      <a href="/">      
      <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="Amazon Logo" />
      </a>
      </div>

      {/* Delivery Location */}
      <div className={classes.delivery}>
        <LocationOnIcon />
        <div className={classes.deliverEthiopia}>
          <p>Deliver to</p>
            <span> Ethiopia</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={classes.SearchaBar}>
        <select name="" id="">
          <option value=""> All</option>
           </select>
           <input type="text" placeholder="Search Amazon"  />
            <span> <SearchIcon /></span>
      </div>

     
      <div className={classes.order_wrapper}>
         <div className={classes.lang}>
          
          <img src="../../assets/image.png" alt="" />
          
          <p>EN</p>
          <span><ArrowDropDownIcon /></span> 
      
        </div>
        {/* Account & Orders */}
        <a href='#' className={classes.account}>
          <p>Hello, sign in</p>
          <select name="" id="">
            <option value="">Account & Lists</option>
          </select>
        </a>

        {/* Returns & Orders */}
        <a href='#'
        className={classes.returns}>
          <p>Returns</p> 
          <span> & Orders  </span>
        </a>

        <a href='#' className={classes.cart}>
          <AddShoppingCartIcon  size={100}/>
          <p>Cart</p>
          <span>0</span>
        </a>

      </div>
    </div>
          <HeaderUnder />

    </>
    
  );
};

export default Header;