import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import classes from './Cart.module.css'
import { DataContext } from '../../components/dataProvider/DataProvider';
import ProductSlice from '../../components/Product/ProductSlice';
import { Link } from 'react-router-dom';
import FormatCurrency from '../../components/FormatCurrency/FormatCurrency'; // Assuming FormatCurrency is already created

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);  // Destructure basket after it's initialized

  // Calculate the total after basket has been initialized
  const total = basket?.reduce((amount, item) => {
    return item.price *  item.amount + amount;
  }, 0);

  console.log("Basket Data:", basket);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.cart_container}>
        <h2>Hello,</h2>
        <p>Your shopping basket</p>
        <hr />
        {
          basket?.length === 0 ? (
            <h3 className={classes.fourofour}>
              Oops! No item in your cart <br />
              Go grab something
            </h3>
          ) : (
            basket?.map((item, index) => (
              <ProductSlice key={index} product={item} flex={true} removeBtn={false} />
            ))
          )
        }
      </div>
      
      {basket?.length > 0 && (
        <div className={classes.subtotal}>
          <div >
            <p>Subtotal ({basket.length} items)</p>
            <FormatCurrency amount={total} />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to="/payments">Continue to checkout</Link>
        </div>
      )}
      </div>
    </Layout>
  );
};

export default Cart;
