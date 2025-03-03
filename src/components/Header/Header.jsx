import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import classes from './Header.module.css';
import HeaderUnder from './HeaderUnder';
import flagg from '../../assets/image.png'
import { Link } from 'react-router';



const Header = () => {
  return (
    <>
    <div className={classes.headerWrapper}>
      {/* Amazon Logo */}
      <div className={classes.imageAmazon}>
      <Link  to ="/">      
      <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="Amazon Logo" />
      </Link>
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
            <span> <SearchIcon style={{ fontSize: 35 }} /></span>
      </div>

     
      <div className={classes.order_wrapper}>
         <div className={classes.lang}>
          
          <img src={flagg} alt="flag" />
          
          <p>EN</p>
          <span><ArrowDropDownIcon /></span> 
      
        </div>
        {/* Account & Orders */}
        <Link  to ='/auth' className={classes.account}>
          <p>Hello, sign in</p>
          <select name="" id="">
            <option value="">Account & Lists</option>
          </select>
        </Link>

        {/* Returns & Orders */}
        <Link  to ='/order'
        className={classes.returns}>
          <p>Returns</p> 
          <span> & Orders  </span>
        </Link>

        <Link  to ='/cart' className={classes.cart}>
          <AddShoppingCartIcon  size={100}/>
          <p>Cart</p>
          <span>0</span>
        </Link>

      </div>
    </div>
          <HeaderUnder />

    </>
    
  );
};

export default Header;