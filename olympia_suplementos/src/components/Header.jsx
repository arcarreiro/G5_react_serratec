import React, { useContext, useEffect, useState } from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Carrinho from './Carrinho';
import { GeneralContext } from '../context/General';

const Header = () => {
    const { user, setUser } = useContext(GeneralContext)

    const handleLogoff = () => {
        setUser({})
    }

    return (
        <>
            <div className="outer-banner">
                <div className="banner">
                    <a href="/"><img src="/logo.png" alt="Banner Image" className="banner-image" /></a>
                    <div className='right-banner'>
                        {user && user.nome ?
                        <p>
                        Olá, {user.nome}! <br />
                        Veja seu <Link to='/pedidos'>Histórico de Pedidos</Link><br />
                        Ou <Link onClick={handleLogoff} to='/'>clique aqui para sair</Link>
                    </p>
                    : <p>Olá! <Link to='/login'>Entre</Link><br />ou <Link to='/signup'>Cadastre-se</Link></p>
                        }
                        <Carrinho />
                    </div>

                </div>
                <div className="bottom">
                    |<div><Link className='option' to='/catalogo/suplementos'>Suplementos</Link></div>|
                    <div><Link className='option' to='/catalogo/roupas'>Roupas</Link></div>|
                    <div><Link className='option' to='/catalogo/acessorios'>Acessórios</Link></div>|
                </div>
            </div>
        </>
    )
}

export default Header