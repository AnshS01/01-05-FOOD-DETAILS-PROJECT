import React from 'react'
import { useDispatch } from "react-redux";
import { ListGroupItem } from 'reactstrap'
import { cartAction } from '../../Store/Slice/CartSlice';

function Cartitem(props) {
    const { id , image01 , price , quantity, title, totalPrice } = props.item

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(cartAction.addItem({
            id,price,title,quantity
        }))
    }

    const decrement = () => {
        dispatch(cartAction.removeItem(id))
    }
    const allDelete = () => {
        dispatch(cartAction.deleteItem(id))
      }

    return (
        <div>
            <ListGroupItem className='border-0'>
                <div>
                    <div className='d-flex cart__item'>
                        <div className='w-25'>
                            <img src={image01} alt='' className=''></img>
                        </div>
                        <div className='w-75'>
                        <span className='delete_btn float-end top-0 ' onClick={allDelete}><i className='ri-close-circle-fill'></i></span>
                            <h6 className='cart__product-title w-75 mt-2 ms-4'>{title}</h6>
                                <p className='d-flex align-items-center gap-4 ms-4 cart_product-price text-dark'>{quantity}x<span>${totalPrice}</span></p>
                                <div className='d-flex align-items-center justify-content-between increase__decrease_btn gap-2 w-50 ms-3 border-1'>
                                    <span className='increase__btn' onClick={increment}><i className='ri-add-line'></i></span>
                                    <span className='quanitity'>{quantity}</span>
                                    <span className='decrease__btn' onClick={decrement}><i className='ri-subtract-line'></i></span>
                                </div>
                        </div>
                    </div>
                   
                </div>
            </ListGroupItem>
        </div>
    )
}

export default Cartitem