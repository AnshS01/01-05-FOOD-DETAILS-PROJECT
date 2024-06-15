import React, { useState } from 'react'
import Commonsection from '../Components/Commonsection'
import { cartAction } from '../Store/Slice/CartSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import products from '../Fake-data/products'

function Fooddetails() {

  const { id } = useParams()
  // console.log(id);

  const Product = products.find(item => item.id === id)
  // console.log(Product);

  const { title, price, category, image01, image02, image03,desc } = Product;
  const [image, setimage] = useState(image01)


  const dispatch = useDispatch()

  const [tab, setTab] = useState('desc')

  const addToCart = () => {
    // alert("dkckjnd")
    dispatch(cartAction.addItem({
      id, title, image01, price
    }))
  }

  return (
    <div>
      <Commonsection title={title}></Commonsection>
      <section className='container'>
        <div className='row mt-5'>
          <div className='col-lg-2 col-md-2'>
            <div className=''>
              <img src={image01} alt='product' onClick={() => setimage(image01)} className='w-75 py-2'></img>
            </div>
            <div className=''>
              <img src={image02} alt='product' onClick={() => setimage(image02)} className='w-75 py-2'></img>
            </div>
            <div className=''>
              <img src={image03} alt='product' onClick={() => setimage(image03)} className='w-75 py-2'></img>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 d-flex align-items-center'>
            <img src={image} alt='product' className='img-fluid ' width={300}></img>
          </div>
          <div className='col-lg-5 col-md-5 my-auto'>
            <h3 className='mt-5'>{title}</h3>
            <h6 className='text-danger my-3'>Price: ${price}</h6>
            <h6>Category: {category}</h6>
            <button className='btn btn-danger my-4' onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </section>
      <section className='container mt-5'>
        <div className='row'>
          <div className=''>
            <h6 className='text-danger d-inline ' onClick={() => setTab('desc')}>Description</h6>
            <h6 className='d-inline mx-5' onClick={() => setTab('review')}>Review</h6>
          </div>

          {
            tab === 'desc' ? <div className='tab_content'>
              <p>{desc}</p>
            </div> :
              <div className='tab_form mt-5'>
                <div className=' '>
                  <form className='form_bg w-50 mx-auto text-center pt-4 mb-5'>
                    <div className=''>
                      <input type='text' placeholder='Enter your name' className='w-75 my-2 border-top-0 border-start-0 border-end-0'></input>
                    </div>
                    <div className=''>
                      <input type='text' placeholder='Enter your name' className='w-75 my-2 border-top-0 border-start-0 border-end-0'></input>
                    </div>
                    <div className=''>
                      <input type='text' placeholder='Enter your name' className='w-75 my-2 border-top-0 border-start-0 border-end-0'></input>
                    </div>
                    <button type='submit' className='btn btn-danger px-5 my-4'>Submit</button>
                  </form>
                </div>
                
                <div className='review'>
                  <p className='user_name mb-0 fw-bold'>Ansh</p>
                  <p className='user_email'>Ansh@gmail.com</p>
                  <p className='feedback_text'>Great Product</p>
                </div>
            </div>             
          }

        </div>
      </section>

    </div>
  )
}

export default Fooddetails