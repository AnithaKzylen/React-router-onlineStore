import React from 'react';
import "../Styles/cart.css";
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state=> state.cart.cart)
  return (
    <div>
        <h2 className="cart-item">Cart Items</h2>
        {
            cartItems.map(item =>{
                return(
                    <div className="d-flex">
                        <img src={item.image} className='cart-image' alt="" />
                        <div>
                            <h4>{item.name}</h4>
                            <button className='btn btn-warning btn-sm'>Remove</button>
                        </div>
                    </div>    
                )
            })
        }
    </div>
  );
}

export default Cart