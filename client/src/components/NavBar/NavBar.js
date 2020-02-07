import React from 'react'

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <a className="navbar-brand" href="#">
                <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                <span className="font-weight-bold">Shopify - Book Store Orders</span>
            </a>
        </nav>
    )
}

export default NavBar