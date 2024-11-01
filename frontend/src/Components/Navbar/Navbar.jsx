import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/cottoncrew.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'


const Navbar = () =>{
    const [menu, setMenu] = useState("home")
    const {getTotalCartItems} = useContext(HomeContext);

    return (
        <div className = 'navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Cotton Crew</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style = {{ textDecoration: 'none'}} to = '/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style = {{ textDecoration: 'none'}}to = '/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style = {{ textDecoration: 'none'}}to = '/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kid")}}><Link style = {{ textDecoration: 'none'}}to = '/kid'>Kid</Link>{menu==="kid"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("toddler")}}><Link style = {{ textDecoration: 'none'}}to = '/toddler'>Toddler</Link>{menu==="toddler"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to = '/signin'><button>Login</button></Link>
                <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-counter">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar ;