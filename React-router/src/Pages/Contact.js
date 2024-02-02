import React from 'react';
import img from "../images/Fruits.jpg";
import "../Styles/contact.css";


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-img" style={{ backgroundImage :`url(${img})` }}>
      </div>
      <div className="contact-form">
        <h1>CONTACT US</h1>
        <form action="" id='contactForm' method='POST'>
          <label htmlFor="name">Full name</label>
          <input type="text" name='name' placeholder='Enter your name'/>

          <label htmlFor="Mobile number">Mobile number</label>
          <input type="Number" name='Mobile number' placeholder='Enter your Mobile number'/>
          <label htmlFor="email">Full name</label>
          <input type="email" name='email' placeholder='Enter your email'/>
          <textarea name="Message" id="" rows="10" placeholder='Enter message' required></textarea>
          <button type='submit'>Send message</button>          
        </form>
      </div>
    </div>
  )
}

export default Contact