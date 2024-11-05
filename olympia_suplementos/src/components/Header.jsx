import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PiShoppingCartBold } from "react-icons/pi";
import Carrinho from './Carrinho';

const Header= () => {
    return (
        <>
            <div className="outer-banner">
                <div className="banner">
                    <a href="/"><img src="./logo.png" alt="Banner Image" className="banner-image" /></a>
                    <div className='right-banner'>
                        <nav className="navbar">
                            <ul className="nav-links">
                                Olá!<Link style={{marginLeft:-10, marginRight:-10}} to='/login'>Entre</Link>
                                ou <Link style={{marginLeft:-10, marginRight:-10}} to='/signup'>Cadastre-se</Link>
                            </ul>
                        </nav>

                        <Carrinho />
                        {/* <div className="cart">
                            <PiShoppingCartBold size={30}/>
                        </div> */}
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