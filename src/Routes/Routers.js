import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'
import Fooddetails from '../Pages/Fooddetails'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/food' element={<Allfood></Allfood>}></Route>
        <Route path='/food/:id' element={<Fooddetails></Fooddetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}

export default Routers