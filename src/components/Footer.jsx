import React from 'react';
import './Footer.css';
import Whatapp from './assets/whatsapp.png'
import Insta from './assets/instagram.png'
import Face from './assets/facebook.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className='about'>
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>Discover a tantalizing array of culinary delights at our food store, where quality meets convenience.</p>
          </div>
          </div>
          <div></div>
          <div className="col-md-6">
            <h4 className='contact'>Contact Us</h4>
            <ul>
            
              <li><a href="mailto:gokulrajst555@gmail.com">gokulrajst555@gmail.com</a></li>
              <li>Phone: 9600278466</li>
              <li>Address: Thuraiyur</li>
            </ul>
            
             <a href="https://web.whatsapp.com/"><img className='whatapp' src={Whatapp} alt="" /></a>
             <a href="https://www.instagram.com/"><img  className='insta' src={Insta} alt="" /></a>
              <a href="https://www.facebook.com/"><img  className='face' src={Face} alt="" /></a>
            
            
          </div>
        </div>
      
      </div>
     
    </footer>
  );
};

export default Footer;
