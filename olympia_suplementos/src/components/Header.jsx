import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
    return (
        <>
            <div className="banner">
                <img src="./logo.png" alt="Banner Image" className="banner-image" />
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/catalogo'>Catálogo</Link></li>
                        <li><a href="#contact">Login</a></li>
                        <li><a href="#contact">Cadastre-se</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header