
import { Shopcon } from '../../Context/ShopContext';
import React,{useContext} from 'react'

const CartItems = ({data}) => {
    const {id,productName,price,productImage}=data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(Shopcon);
   
  return (
  
    <div className='cartItem' key={id}>
        <img src={productImage} alt="" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p><b>${price}</b></p>
        <div className='countHandler'>
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input type="text" value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>

    </div>
    
  )
}

export default CartItems
