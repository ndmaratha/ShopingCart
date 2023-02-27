import React, { useContext } from 'react'
import { Shopcon } from '../../Context/ShopContext';
function Product({data}) {
  const {addToCart,cartItems}=useContext(Shopcon);
    const {id,productName,price,productImage}=data;
    const cartItemAmount=cartItems[id];
  return (
    <div >
      <div className="product">
        <img src={productImage} alt=""/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p><b>${price}</b></p>
        </div>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add To Cart({cartItemAmount>0 ? (cartItemAmount ): null})</button>
      </div>
    </div>
  )
}

export default Product
