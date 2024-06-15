import React from 'react'
import Helmet from '../Components/Helmet'
import Commonsection from '../Components/Commonsection'


export default function Checkout() {
  return <Helmet title="Checkout">
    <Commonsection></Commonsection>
    <section className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-6'>
            <h6 className='mb-4'>Shipping Address</h6>
              <form className='checkout__form'>
                <div className='form_group'>
                  <input type='text' placeholder='Enter your name'></input>
                </div>
                <div className='form_group'>
                  <input type='email' placeholder='Enter your email'></input>
                </div>
                <div className='form_group'>
                  <input type='number' placeholder='Phone number'></input>
                </div>
                <div className='form_group'>
                  <input type='text' placeholder='Country'></input>
                </div>
                <div className='form_group'>
                  <input type='text' placeholder='City'></input>
                </div>
                <div className='form_group'>
                  <input type='text' placeholder='Postal Code'></input>
                </div>
              </form>
            <button className='addtocart_btn bg-dark btn text-light'>Payment</button>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='checkout__bill'>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>$0</span></h6>
              <h6 className='d-flex align-items-center justify-content-between'>Shipping: <span>$0</span></h6>
              <div className='checkout__total'>
                <h5 className='d-flex align-items-center justify-content-between'>Total: <span>0</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Helmet>
}
