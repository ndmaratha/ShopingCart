import React,{useContext} from 'react'
import { PRODUCTS } from '../../Products'
import { useNavigate } from 'react-router-dom';
import { Shopcon } from '../../Context/ShopContext';
import CartItems from './CartItems';
import './Cart.css';

const Cart = () => {
  const {cartItems,getTotalCartAmount, checkout}=useContext(Shopcon);
  const totalAmount=getTotalCartAmount();
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {
          PRODUCTS.map((products)=>{
          
              if(cartItems[products.id] !== 0){
               return <CartItems data={products} />;
              }
            
          })
        }
      </div>
      {
        totalAmount>0?
      <div className="checkout">
        <p><b>Total: ${totalAmount}</b></p>
        <button onClick={()=>navigate("/")}>Continue Shoping</button>
        <button onClick={()=> checkout()}>Checkout</button>
      </div>
      : <h1>Your Cart Is Empty</h1> }
    </div>
  )
}

export default Cart
