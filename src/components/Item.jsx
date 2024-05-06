



import React, { useState } from 'react';
import './Item.css';
import { assets } from './assets/assets';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleClick = () => {
    window.location.href = "./ViewProduct"
    sessionStorage.setItem('Image', image);
    sessionStorage.setItem('Name', name);
    sessionStorage.setItem('Description', description);
    sessionStorage.setItem('Price', price);
  };

  return (
    <div className='food-item'>
      <Link className="food-item-img-container">
        <img className='food-item-image' src={image} onClick={handleClick} alt="" />
      </Link>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">Rs.{price}</p>
      </div>
    </div>
  );
}

export default Item;

