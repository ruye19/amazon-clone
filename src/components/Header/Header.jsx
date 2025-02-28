import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import TheLogo from '../../assets/amazon-dark.svg';

const Header = () => {
  return (
    <div className="headerWrapper">
      {/* Amazon Logo */}
      <div className="imageAmazon">
        <img src={TheLogo} alt="Amazon Logo" />
      </div>

      {/* Delivery Location */}
      <div className="delivery">
        <LocationOnIcon />
        <div className="deliverEthiopia">
          <p>Deliver to <span>Ethiopia</span></p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="SearchaBar">
        <div className="all">
          All <ArrowDropDownIcon />
        </div>
        <div className="searchInput">
          <input type="text" placeholder="Search Amazon" />
          <SearchIcon />
        </div>
      </div>

      {/* Language Selector */}
      <div className="lang">
        EN <ArrowDropDownIcon />
      </div>

      {/* Account & Orders */}
      <div className="account">
        <p>Hello, sign in</p>
        <span>Account & Lists <ArrowDropDownIcon /></span>
      </div>

      {/* Returns & Orders */}
      <div className="returns">
        Returns <span>& Orders</span>
      </div>

      {/* Cart */}
      <div className="cart">
        <AddShoppingCartIcon />
      </div>

      {/* Mobile Menu Icon */}
      <div className="menuIcon">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;