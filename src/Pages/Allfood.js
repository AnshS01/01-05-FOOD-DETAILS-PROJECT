import React, { useState } from 'react'
import Commonsection from '../Components/Commonsection'
import products from '../Fake-data/products'
import Productcard from './Category/Productcard'
import ReactPaginate from 'react-paginate';
import Helmet from '../Components/Helmet'


function Allfood() {


  const [pageNumber, setpageNumber] = useState(0)



  const pagePerProducts = 4;
  const visitedPage = pageNumber * pagePerProducts;
  const displayProduts = products.slice(visitedPage, visitedPage + pagePerProducts)
  const countPage = Math.ceil(products.length / pagePerProducts);
  const changePage = ({ selected }) => {
    setpageNumber(selected)
  }

  return (
    <div>
      <Helmet title='Allfood'>
      <Commonsection title='food'></Commonsection>

      <section className='container mt-5'>
        <div className='justify-content-between d-flex'>
          <div className="input-group flex-nowrap w-25  border ">
            <input type="text" className="form-control  border-0" placeholder="i'm looking for...." aria-label="Username" aria-describedby="addon-wrapping" />
            <span className="input-group-text border-0 bg-transparent " id="addon-wrapping"><i className="fa-solid fa-magnifying-glass fa-bounce" style={{ color: "#d6643d", }}></i></span>
          </div>
          <div className=''>
            <div className="rounded-1 ">
              <select className="pe-4" id="exampleFormControlSelect1">
                <option value="Default">Default</option>
                <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                <option value="High Price">High Price</option>
                <option value="Low Price">Low Price</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row'>
          {
            displayProduts.map((item) => {
              return <div className='col-3' key={item.id}>
                <Productcard productsitem={item}></Productcard>
              </div>
            })
          }
        </div>
      </div>

      <div>
        <ReactPaginate pageCount={countPage} onPageChange={changePage} className='paginationbttns mb-5  '></ReactPaginate>
      </div>
      
      </Helmet>
    </div>
  )
}

export default Allfood