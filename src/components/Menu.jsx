


import React from 'react';
import './Menu.css';
import One from './assets/menu_1.png';
import Two from './assets/menu_2.png';
import Three from './assets/menu_3.png';
import Four from './assets/menu_4.png';
import Five from './assets/menu_5.png';
import Six from './assets/menu_6.png';
import Saven from './assets/menu_7.png';
import Eight from './assets/menu_8.png';

const Menu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest.</p>
      <div className="explore-menu-list">
        <div>
          <img src={One} alt="" />
          <p>Salad</p>
        </div>
        <div>
          <img src={Two} alt="" />
          <p>Rolls</p>
        </div>
        <div>
          <img src={Three} alt="" />
          <p>Desserts</p>
        </div>
        <div>
          <img src={Four} alt="" />
          <p>Sandwich</p>
        </div>
        <div>
          <img src={Five} alt="" />
          <p>Cake</p>
        </div>
        <div>
          <img src={Six} alt="" />
          <p>Pure Veg</p>
        </div>
        <div>
          <img src={Saven} alt="" />
          <p>Pasta</p>
        </div>
        <div>
          <img src={Eight} alt="" />
          <p>Noodles</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Menu;
