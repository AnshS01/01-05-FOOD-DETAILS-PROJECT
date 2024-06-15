import React from 'react'

import logo from "../Fake-data/Images/res-logo.png";

function Footer() {
  return (
    <div>
      {/* footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted pt-1 mt-5">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img alt='logo' src={logo} className='img-fluid w-25'></img>
                <h6 className="fw-bold mb-4 mt-2">Tasty Treat</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">
                  Delivery Time
                </h6>
                <p className='m-0'>Sunday - Thursday</p>
                <p className='m-0'>10:00am - 11:00pm</p>
                <p className='m-0 mt-4'>Friday - Saturday</p>
                <p className='m-0'>Off Day</p>

              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">

                <h6 className=" fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i>Location: Xyz Varachha-395006, Surat.</p>
                <p><i className="fas fa-phone me-3"></i>Phone:7648936497</p>
                <p><i className="fas fa-envelope me-3"></i>Email: demo.xyz@gmail.com</p>
              </div>


              <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className=" fw-bold mb-4">Newsletter</h6>
                <p>Subscribe our newsletter</p>
                <div className="input-group flex-nowrap">
                  <input type="text" className="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="addon-wrapping"></input>
                  <span className="input-group-text" id="addon-wrapping"><i className="fa-brands fa-telegram"></i></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="row mt-5 pt-2">
            <div className='col-6'>
              <p><span style={{ color: "red" }}>Copyright - 2022, website made by Ansh Suhagiya, all rights resarved.</span></p>
            </div>
            <div className='col-6 '>
              <p>Follow : <i className="fa-brands fa-pinterest fa-lg fa-shake ms-2" style={{ color: "#850a0a", }}></i>
                <i className="fa-brands fa-github fa-lg fa-shake ms-2" style={{ color: "#850a0a", }}></i>
                <i className="fa-brands fa-linkedin fa-shake fa-lg ms-2" style={{ color: "#850a0a", }}></i>
                <i className="fa-brands fa-square-instagram fa-shake fa-lg ms-2" style={{ color: "#850a0a", }}></i>
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer