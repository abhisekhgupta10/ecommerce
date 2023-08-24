import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">


                        <div className="navbar-nav ms-auto px-5">
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/shop" className='nav-link'>Shop</Link>
                            <Link to="/category" className='nav-link'>Category</Link>
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar