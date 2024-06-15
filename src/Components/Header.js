import React from 'react'
import logo from "../Fake-data/Images/res-logo.png";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { cartUiAction } from '../Store/Slice/CartSliceUi';

function Header() {

  const totalQuantity = useSelector(state => state.Cart.totalQuantity)
const dispatch = useDispatch()
  const Toggle = () => {
    dispatch(cartUiAction.toggle())
  }

  return (
    <div>
      <section className="mx-lg-5 py-2 ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="logo d-md-block mx-md-auto">
              <img alt=" logo" src={logo} className="img-fluid "></img>
              <p className="text-center font- fs-4">Tasty Treat</p>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav  "
              id="navbarSupportedContent">
              <ul className="navbar-nav mt-2 d-block mx-auto">
                <li className="nav-item  d-inline-block">
                  <Link className="nav-link   mx-4" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item d-inline-block ">
                  <Link className="nav-link  mx-4" to="/food">
                    Food
                  </Link>
                </li>
                <li className="nav-item d-inline-block ">
                  <Link className="nav-link  mx-4" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item d-inline-block  ">
                  <Link className="nav-link  mx-4" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className=" float-end ">
                <button className="btn border border-0 bg-transparent header_span fs-5 pe-0" onClick={Toggle}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </button>
                <span><sup className='border bg-danger header_span text-light'>{totalQuantity}
                </sup></span>
                <Link className="btn border border-0 bg-transparent fs-5" to='/login'>
                  <i className="fa-regular fa-user "></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Header