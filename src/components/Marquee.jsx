import React from 'react';
import './Marquee.css'; // We'll define styles here
import marquee1 from '../static/images/marquee1.png'
import marquee2 from '../static/images/marquee2.jpg'
import marquee3 from '../static/images/marquee3.webp'
import marquee4 from '../static/images/marquee4.png'
import marquee5 from '../static/images/marquee5.jpg'
import marquee6 from '../static/images/marquee6.png'


const Marquee = () => {
  return (
 
      <div className="marquee-container ">
      <div className="marquee ">
        <img src={marquee1} alt="img1" />
      
        <img src={marquee2} alt="img2" />
        
        <img src={marquee3} alt="img3" />
        
        <img src={marquee4} alt="img4" />
        
        <img src={marquee5} alt="img5" />
        
        <img src={marquee6} alt="img6" />
      </div>
    </div>
  
  );
};

export default Marquee;
