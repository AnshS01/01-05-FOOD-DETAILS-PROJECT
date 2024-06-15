import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Cartitem from './Cartitem';
import { cartUiAction } from '../../Store/Slice/CartSliceUi';

function Carts() {
  
  const Cartitems = useSelector(state => state.Cart.cartItem);
  const totalAmount = useSelector(state => state.Cart.totalAmount)


  const dispatch = useDispatch();
  
  const Toggle = () => {
    dispatch(cartUiAction.toggle())
  }

  return (
    <div>
     <div className='cart_container'>
      <div className='list-group cart'>
         <div className='cart_close' onClick={Toggle}>
            <span><i className="ri-close-fill fs-5"></i></span>
            <h4 className='text-center text-danger'>My Cart</h4>
         </div>
         <div className='cart_item-list'>
            {
              Cartitems.map((item) => {
                  return <Cartitem item={item} key={item.id}></Cartitem>
              })
            }
         </div>
         <div className='cart_bottom d-flex align-items-center justify-content-between bottom-0 px-2'>
            <h6>Subtotal amount: <span>${totalAmount}</span></h6>
            <button className='mb-3 me-3 mt-3'><Link to='/checkout' className='cart_link'>Checkout</Link></button>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Carts;