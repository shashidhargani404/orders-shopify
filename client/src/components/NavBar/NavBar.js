import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <Link to="/" className="text-decoration-none" ><span className="font-weight-bold text-light" style={{fontSize: '24px', marginLeft: '30px'}}>Shopify - Book Store Orders</span></Link>
            <a href="https://saahityabookstore.myshopify.com/" target="_blank" className="pr-4 text-light" >Store</a>
        </nav>
    )
}

export default NavBar