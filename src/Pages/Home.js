import React, { useEffect, useState } from 'react'
import hero from '../Fake-data/Images/hero.png'
import service1 from '../Fake-data/Images/service-01.png'
import service2 from '../Fake-data/Images/service-02.png'
import service3 from '../Fake-data/Images/service-03.png'
import network from '../Fake-data/Images/network.png'
import ava1 from '../Fake-data/Images/ava-1.jpg'
import ava2 from '../Fake-data/Images/ava-2.jpg'
import ava3 from '../Fake-data/Images/ava-3.jpg'
import ava4 from '../Fake-data/Images/ava-4.jpg'
import foodTruck from '../Fake-data/Images/location.png'
import category1 from '../Fake-data/Images/category-01.png'
import category2 from '../Fake-data/Images/category-02.png'
import category3 from '../Fake-data/Images/category-03.png'
import category4 from '../Fake-data/Images/category-04.png'
import foodCategoryImg01 from '../Fake-data/Images/hamburger.png'
import foodCategoryImg02 from '../Fake-data/Images/pizza.png'
import foodCategoryImg03 from '../Fake-data/Images/bread.png'
import Productcard from './Category/Productcard'
import products from '../Fake-data/products'
import Slider from "react-slick";
// import { Carousel } from 'bootstrap'

import Helmet from '../Components/Helmet'

function Home() {

  // Carousel
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [allproducts, setallproducts] = useState(products)
  const [hotPizza, sethotPizza] = useState([])
  const [category,setcategory] = useState('All')

  useEffect(() => {
    if(category === 'All'){
      setallproducts(products)
    }
    if(category ===  "Burger"){
      const filterProduct = products.filter(item => item.category === 'Burger')
      console.log(filterProduct);
      setallproducts(filterProduct)
    }
    if(category === 'Pizza'){
      const filterProduct = products.filter(item => item.category === 'Pizza')
      console.log(filterProduct);
      setallproducts(filterProduct)
    }
    if(category === 'Bread'){
      const filterProduct = products.filter(item => item.category === 'Bread')
      console.log(filterProduct);
      setallproducts(filterProduct)
    }
  }, [category])

  useEffect(() => {
    const filterpizza = products.filter(item => item.category === 'Pizza')
    // console.log(filterpizza);

    const slicepizza = filterpizza.slice(1, 5);
    // console.log(slicepizza);
    sethotPizza(slicepizza)
  }, [])

  return (
    <div>
       <Helmet title='Home'>
      <section className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 d-block my-auto '>
            <h4>Easy way to make an order</h4>
            <h2 className='sec1_h2'><span className='text-danger '>HUNGRY?</span> just wait food at <span className='text-danger'>your door</span></h2>
            <p className='my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div>
              <button className='text-light bg-danger border-0 py-1 px-3 rounded-1 me-4 '>Order now <i className="fa-solid fa-greater-than sec1_i"></i> </button>
              <button className='text-danger bg-light rounded-1 py-1 px-3'>See allfoods</button>
            </div>
            <div className='d-flex mt-5'>
              <p className='me-5'><i className="fa-solid fa-shield text-danger "></i> 100% Secure Checkout</p>
              <p><i className="fa-solid fa-truck-fast text-danger"></i> No shipping charge</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img alt='hero' src={hero} className='img-fluid'></img>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='d-flex  align-items-center m-2 rounded p-4 bg border-danger w-100'>
              <img alt='hero' src={category1} className='img-fluid d-block me-4'></img>
              <span>Fastfood</span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='d-flex  align-items-center m-2 rounded p-4 bg border-danger w-100'>
              <img alt='hero' src={category2} className='img-fluid d-block me-4'></img>
              <span>Pizza</span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='d-flex  align-items-center m-2 rounded p-4 bg border-danger w-100'>
              <img alt='hero' src={category3} className='img-fluid d-block me-4'></img>
              <span>Asian Food</span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='d-flex  align-items-center m-2 rounded p-4 bg border-danger w-100'>
              <img alt='hero' src={category4} className='img-fluid d-block me-4'></img>
              <span>Row Meat</span>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className='container'>
        <div className='row text-center mt-5'>
          <h5 className='text-danger'>What we serve</h5>
          <h2 className=''>Just sit back at home <br></br>we will <span className='text-danger'>take care</span></h2>
          <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </section>


      {/* start section 4*/}
      {/* start srvice section */}
      <div className='container my-5 text-center '>
        <div className='row'>
          <div className=' service col-lg-4 col-md-4 col-sm-12'>
            <img alt='service1' src={service1} className='img-fluid'></img>
            <h5 className='my-lg-3 my-md-2'>Quick Delivery</h5>
            <p className='px-lg-5 '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div className=' service col-lg-4 col-md-4 col-sm-12'>
            <img alt='service2' src={service2} className='img-fluid'></img>
            <h5 className='my-lg-3 my-md-2'>Super Dine-in</h5>
            <p className='px-lg-5 '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div className=' service col-lg-4 col-md-4 col-sm-12'>
            <img alt='service3' src={service3} className='img-fluid'></img>
            <h5 className='my-lg-3 my-md-2'>Easy Pike-up</h5>
            <p className='px-lg-5 '> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
        </div>
      </div>
      {/* end srvice section */}
      {/* start menu & productcard section */}
      <section className='container'>
        {/* start menu  */}
        <div className='row g-0'>
          <div className='col-12  text-center '>
            <h2 className='font-monospace underline pb-2 mt-5'>Popular Foods</h2>
          </div>
          <div className='col-12 mb-5'>
            <div className='btn_all d-flex align-items-center justify-content-center gap-5'>
              <button className='d-flex align-items-center gap3 ' onClick={() => setcategory('All')}> ALL</button>
              <button className='d-flex align-items-center gap3 ' onClick={() => setcategory('Burger')}><img alt='burger' src={foodCategoryImg01} ></img> BURGER </button>
              <button className='d-flex align-items-center gap3 ' onClick={() => setcategory('Pizza')}><img alt='burger' src={foodCategoryImg02} ></img> PIZZA </button>
              <button className='d-flex align-items-center gap3 ' onClick={() => setcategory('Bread')}><img alt='burger' src={foodCategoryImg03} ></img> BREAD </button>
            </div>
          </div>
        </div>
        {/* end menu  */}

        {/* start product  */}

        {/* end product  */}
      </section>
      {/* start menu & productcard section */}
      {/* end section 4*/}

      <div className='container'>
        <div className='row g-3'>
          {
            allproducts.map((item) => {
              return <div className='col-3' key={item.id}>
                <Productcard productsitem={item}></Productcard>
              </div>
            })
          }
        </div>
      </div>

      {/* section5 */}
      <section className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img src={foodTruck} alt='foodtruck' className='img-fluid'></img>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <h2>Why Tasty Treat?</h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h5 className='mt-5'><i className="fa-regular fa-circle-check text-danger"></i> Fresh and tasty foods</h5>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h5><i className="fa-regular fa-circle-check text-danger"></i> Quality support</h5>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h5><i className="fa-regular fa-circle-check text-danger"></i> Order from any location</h5>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </section>

      {/* section6 */}
      <section className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h4 className='text-danger mt-5'>Testimonial</h4>
            <h2 className='my-4'>What our <span className='text-danger'>customers</span> are saying</h2>
            <p>Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
            <p className='mt-5'>Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat! Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Slider {...settings}>
              <div>
                <div className='row'>
                  <div className='col-lg-3'>
                    <img alt='ava1' src={ava1} className='img-fluid sec6_ava'></img>
                  </div>
                  <div className='col-lg-9'>
                    <p>Jhon Doe</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='row'>
                  <div className='col-lg-3'>
                    <img alt='ava2' src={ava2} className='img-fluid sec6_ava'></img>
                  </div>
                  <div className='col-lg-9'>
                    <p>Elena</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='row'>
                  <div className='col-lg-3'>
                    <img alt='ava3' src={ava3} className='img-fluid sec6_ava'></img>
                  </div>
                  <div className='col-lg-9'>
                    <p>Devin</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='row'>
                  <div className='col-lg-3'>
                    <img alt='ava4' src={ava4} className='img-fluid sec6_ava'></img>
                  </div>
                  <div className='col-lg-9'>
                    <p>Maeve</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img alt='network' src={network} className='img-fluid'></img>
          </div>
        </div>
      </section>



      <section className='container'>
        <div className='row'>
          <h2 className='text-center '>Hot Pizza</h2>
          {
            hotPizza.map((item) => {
              return <div className='col-3' key={item.id}>
                <Productcard productsitem={item}></Productcard>
              </div>
            })
          }
        </div>
      </section>




     


          </Helmet>
    </div>
  )
}

export default Home