
import React, { useState } from 'react';
import './Navbar.css';
import Logo from './assets/gokulraj.png';
import Basket from './assets/basket_icon.png';
import { Link } from 'react-router-dom';
// import Contact from './Contact';
import food_list from "./assets/items"
import Search from './Search';
import Contact from './Contact';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [cartItems, setCartItems] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      const results = food_list.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
      setSearchResults(results);
    }
  };

  const handleViewCart = () => {

    console.log("Viewing cart");
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <img src={Logo} alt="" className='logo' />
        </Link>


        <ul className="navbar-menu">
          <Link to='/'> <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li></Link>
          <li onClick={scrollToMenu} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <Link to= '/Contact'>  <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li></Link>
        </ul>

        <div className="navbar-right">
          <form >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="Search..."
              className="navbar-search-input"
            />
            {/* <button className="navbar-search-button">Search</button> */}
          </form>


          <div className="navbar-cart" onClick={handleViewCart}>
            <Link to='/Cart'>
              <img src={Basket} alt="" />
              <div className="cart-items">{cartItems}</div>
            </Link>
          </div>
          <button onClick={() => setShowLogin(true)} className='btn'>Sign in</button>
        </div>
      </div>
      {searchResults.length > 0 && <Search searchResults={searchResults} />}
    </>
  );
}

export default Navbar;



