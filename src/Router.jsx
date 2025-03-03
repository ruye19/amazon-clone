import React from 'react'
import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/auth' element={<SignUp />} />
    <Route path='/payment' element={<Payment />} />
    <Route path='/order' element={<Orders />} />
    <Route path='/cart' element={<Cart />} />
      

    </Routes>
    </BrowserRouter>

  )
}

export default Router
