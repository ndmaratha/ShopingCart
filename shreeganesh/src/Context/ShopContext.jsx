import React, { createContext,useState } from 'react'
import { PRODUCTS } from "../Products";
export const Shopcon=createContext(null);

const getDefaultCart=()=>{
  const cart={};
  for (let i = 0; i < PRODUCTS.length+1; i++) {
    cart[i]=0;
  }
  return cart;
}
const ShopContext = (props) => {
const [cartItems,setCartItem]=useState(getDefaultCart());

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount;
};

const addToCart=(id)=>{
  setCartItem((prev)=>({...prev,[id]: prev[id]+1}));
}
const removeFromCart=(id)=>{
  setCartItem((prev)=>({...prev,[id]:prev[id]-1}));
}
const updateCartItemCount = (newAmount, itemId) => {
  setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
};
const checkout = () => {
  setCartItem(getDefaultCart());
};
const contextValue = {
  cartItems,
  addToCart,
  removeFromCart,
  updateCartItemCount,
  getTotalCartAmount,
  checkout
};

  return (
   <Shopcon.Provider value={contextValue}>
    {props.children}
   </Shopcon.Provider>
  )
}

export default ShopContext
