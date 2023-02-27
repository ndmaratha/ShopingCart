import React from 'react'
import './Shop.css';
import { PRODUCTS } from '../../Products'
import Product from './Product'
function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Radhey Radhey</h1>
      </div>
      <div className="products">
        {
            PRODUCTS.map((products,index)=>{
                return(
                    <Product key={index} data={products}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default Shop
