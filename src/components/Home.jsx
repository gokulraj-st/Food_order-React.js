
import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Food from './Foods';
import Footer from './Footer';


const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu />
      <Food category={category} />
      <Footer />
      
    </div>
  );
};

export default Home;

