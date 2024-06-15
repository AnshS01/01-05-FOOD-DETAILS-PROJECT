import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routers from '../Routes/Routers'
import Carts from '../Pages/Cart/Carts'
import { useSelector } from 'react-redux'

function Layout() {

  const cartShow = useSelector(state => state.CartUi.cartIsVisible)

  // console.log(cartShow);
  return (
    <div>
        {
            cartShow === true?<Carts></Carts> : null
        }
        <Header></Header>
        <div>
            <Routers></Routers>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout