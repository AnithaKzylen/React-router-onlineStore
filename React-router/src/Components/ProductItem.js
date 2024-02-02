import React from 'react';
import { addToCart } from '../Reducer/CartSlice';
import { useDispatch } from 'react-redux';


function ProductItem({image, name, price, Qty}) {
  const dispatch = useDispatch()
  return (
    <div className='productItem'>
    <div style={{ backgroundImage :`url(${image})` }}></div>
    <h2>{name}</h2>
    <p>${price}</p> <span>{Qty}</span>
    <button className='add-btn' onClick={()=>dispatch(addToCart({image, name}))}>Add to cart</button>
        </div>
  )
}

export default ProductItem