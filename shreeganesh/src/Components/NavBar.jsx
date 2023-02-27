import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { ShoppingCart } from 'phosphor-react'
function NavBar() {
  return (
    <div className='navbar'>
      <div className="links">
        <Link to="/" className='s'>Shop</Link>
        <Link to="/cart" className='s' ><ShoppingCart size={32}/></Link>
      </div>
    </div>
  )
}

export default NavBar
