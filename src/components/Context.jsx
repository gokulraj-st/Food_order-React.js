
import { createContext, useState } from "react";
import  food_list from './assets/items';
export const Context = createContext(null)
 const Contextprovider =(props)=>{
    const [cartItem,setCartItem]= useState({});
    const addToCart =(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart =(itemId) =>{
       setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextvalue ={
food_list,
addToCart,setCartItem,removeFromCart
    }

    return(
        <Context.Provider value={contextvalue}>
 {props.children}
        </Context.Provider>
       
       
    )
 }
  export default Contextprovider









