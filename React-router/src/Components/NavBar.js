import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';


const NavBar = () => {
      const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="navbar">
            <div className="header">
        <div className="logo">
          <h2>Smart<span>Kart</span></h2>
          </div>
      <ul className='head-comp'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/Product'>Product</Link></li>
        <li><Link to='/cart'>Cart<small>{cartItems.length}</small></Link></li><br/>
      </ul>
      </div>
            
        </div>
    );
};

export default NavBar;