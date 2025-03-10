import React, { useContext, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import classes from './Header.module.css';
import HeaderUnder from './HeaderUnder';
import flagg from '../../assets/image.png'
import { Link } from 'react-router-dom';
import { DataContext } from '../dataProvider/DataProvider';
import { auth } from '../../utility/firebase';



const Header = () => {
 const [{user,basket},dispatch]= useContext(DataContext)
 const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount 
 },0)


 const handleSignOut = async () => {
  try {
    await auth.signOut();
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};



  return (
    <div className={classes.fixed}>
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
        <Link to = {!user && '/auth' }  className={classes.account}>
         <div> 
          {user ?
           (<p>Hello, {user?.email?.split('@')[0]}</p>
          ) 
           : ( <p>Hello, sign in</p>)}
           </div>
           
              {user ? (
                <span style={{fontSize:14, fontWeight:'bold' }} onClick={handleSignOut}> 
                  Sign out
                </span>
              ) : (
                <select name="" id="">
                <option value="">Account & Lists</option>
                </select>
              )}
          
        </Link>

        {/* Returns & Orders */}
        <Link  to ='/order'
        className={classes.returns}>
          <p>Returns</p> 
          <span> & Orders  </span>
        </Link>

        <Link  to ='/cart' className={classes.cart}>
          <ShoppingCartOutlinedIcon  size={100}/>
          <p>Cart</p>
          <span>{totalItem}</span>
        </Link>

      </div>
    </div>
      <HeaderUnder />

    </div>
    
  );
};

export default Header;