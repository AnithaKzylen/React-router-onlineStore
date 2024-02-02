import React from 'react';
import "../Styles/about.css";
import Fruits from '../images/Fruits.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className="about-image" style={{ backgroundImage :`url(${Fruits})` }}>        
      </div>
      <div className="about-text">
        <h2>ABOUT US</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quis, nesciunt consectetur atque vero dicta laborum praesentium in laudantium ab voluptatem earum sequi nam numquam voluptate! Fugit consequatur ab tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt odio iusto molestias maxime quibusdam totam deleniti omnis dicta nihil ducimus rem eius impedit, velit ex aliquid earum porro fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis modi excepturi iure et neque ad hic saepe quasi. Incidunt, amet doloribus. Adipisci minima voluptatibus obcaecati est sequi cumque fuga. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem, magnam accusamus modi pariatur non. Eum porro, a consectetur quisquam autem consequatur explicabo magnam amet reprehenderit, numquam molestias, eos laborum.</p>
      </div>
    </div>
  )
}

export default About