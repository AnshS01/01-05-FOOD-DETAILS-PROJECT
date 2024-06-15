import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../Store/Slice/CartSlice';
import { Link } from 'react-router-dom';

function Productcard(props) {

    const { id, title, image01, price } = props.productsitem;
    const dispatch = useDispatch()


    const addToCart = () => {
        // alert("dkckjnd")
        dispatch(cartAction.addItem({
            id, title, image01, price
        }))
    }

    return (
        <div>
            <div className="card w-100 mt-4">
                <Link to={`/food/${id}`}>
                    <img src={image01} className="card-img-top d-block mx-auto mt-3 card_img product_card" alt="123"></img>
                </Link>
                <div className="card-body">
                    <Link className='link' to={`/food/${id}`}><h5 className="card-title text-center mb-3 ">{title}</h5></Link>
                    <div className='d-flex justify-content-around'>
                        <span className='text-danger fw-bold '>${price}</span>
                        <button className='btn btn-danger p-1 px-3' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Productcard