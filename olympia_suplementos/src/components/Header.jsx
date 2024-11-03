import React from 'react'
import '../css/header.css'

function Header() {
    return (
        <>
            <div className="banner">
                <img src="./logo.png" alt="Banner Image" className="banner-image" />
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Catálogo</a></li>
                        <li><a href="#contact">Login</a></li>
                        <li><a href="#contact">Cadastre-se</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export { Header }