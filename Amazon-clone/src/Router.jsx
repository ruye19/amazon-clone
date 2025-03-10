import React from 'react'
import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Landing from './Pages/Landing/Landing'

import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Results/Result'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Auth from './Pages/Auth/Auth'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/auth' element={<Auth />} />
    <Route path='/payment' element={<Payment />} />
    <Route path='/order' element={<Orders />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/categories/:catagoryid' element={<Result/>} />
      <Route path='/products/:productid' element={<ProductDetail/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default Router
