import React from 'react';
import Header from './components/Header/Header'
import Banner from './components/Banner/Carousel';
import Catagory from './components/Catagory/Catagory';
import Product from './components/Product/Product';
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Catagory />
      <Product />
    </div>
  );
}

export default App;
