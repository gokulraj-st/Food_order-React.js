
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Logins from './components/Login';


import Cart from './components/Cart';
import { useState } from 'react';
import Login from './components/Login';
import ViewProduct from './components/ViewProduct';
import Contact from './components/Contact';




function App() {
  const [showLogin , setShowLogin] = useState(false)
  return (

    <>
    {showLogin? <Logins  setShowLogin={ setShowLogin} /> :<></>}

    <div className='app' >

      <Navbar setShowLogin={setShowLogin} />
     
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ViewProduct' element={<ViewProduct/>}></Route>
        <Route path='/Contact' element={<Contact/>}/>
       
      </Routes>


     
    </div>
    </>
  );
}

export default App;
