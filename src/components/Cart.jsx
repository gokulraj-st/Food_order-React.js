import { useContext } from 'react'
import React  from 'react'

import { assets } from './assets/assets'
import { Context } from './Context'
const Cart = () => {
  
   const {cartItems,food_list,removeFromCart} =useContext(Context)

  return (
    <div className='cart'>
      
      <div className="cart-itmes">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totral</p>
          <p>Remove</p>
        </div>
      {/* <div>
      <Link to='/componets/Home'></Link>
      </div> */}
        
        <br />
        <hr />
        {/* {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p>x</p>
        
             
                 </div>
  
            )
          }
        })} */}
      </div>
    
    </div>
  )
}

export default Cart