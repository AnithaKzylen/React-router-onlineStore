import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';
import '../Styles/home.css';
import slides from '../caroselData';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="home">
    {/* <div className="home-img" style={{ backgroundImage :`url(${Vegetables})` }}></div> */}
      <div className="header-content">
        <h2 className="slogan">Fresh grocery directly from farmers</h2>
          <p className='para'>Saves Time & Money</p>
          
              <div className='img-slide'>
              <Carousel useKeyboardArrows ={true}>
                {slides.map((item, index)=>{
              return <img src={item.img} alt={item.alt} key={index} className='slide'/>
            })}
            </Carousel>
            </div>
          <Link to="/Product">
          <button className='btn'>Order now</button>
          </Link>
      </div>
      
    
    </div>
  )
}

export default Home