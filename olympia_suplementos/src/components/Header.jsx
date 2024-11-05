import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PiShoppingCartBold } from "react-icons/pi";

const Header= () => {
    return (
        <>
            <div className="outer-banner">
                <div className="banner">
                    <a href="/"><img src="./logo.png" alt="Banner Image" className="banner-image" /></a>
                    <div className='right-banner'>
                        <nav className="navbar">
                            <ul className="nav-links">
                                Olá!<a href='/login'>Entre</a>
                                ou
                                <a href='/signup'>Cadastre-se</a>
                            </ul>
                        </nav>
                        <div className="cart">
                            <Link to="/carrinho" className="cart-link">
                            <PiShoppingCartBold size={30}/>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="bottom">
                    |<div><Link className='option' to='/catalogo'>Suplementos</Link></div>|
                    <div><Link className='option' to='/catalogo'>Roupas</Link></div>|
                    <div><Link className='option' to='/catalogo'>Acessórios</Link></div>|
                </div>
            </div>
        </>
    )
}

export default Header