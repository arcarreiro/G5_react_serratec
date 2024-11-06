import '../css/home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {
    return (
        <>
            <div className='conteudo'>
                <div className="home">
                    <img src="./banner.jpeg" alt="" style={{ width: '100%' }} />
                </div>
                <br />
                <div className="text">
                    <hr />
                    <h2>CONHEÇA MAIS SOBRE O SEU OBJETIVO</h2>
                    <hr />
                </div>
                <div style={{
                    margin: '2rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '60px'
                }}>
                    <div className="cardHome">
                        <a href='https://nav.dasa.com.br/blog/como-ganhar-massa-muscular' target="_blank"><img src='https://www.gsuplementos.com.br/upload/menu/nova-home-banners-resultado/e8aecdef115c298d4784694177d046b4.webp' /></a>
                        <h3>MASSA MUSCULAR</h3>
                    </div>
                    <div className="cardHome">
                        <a href='https://nav.dasa.com.br/blog/como-emagrecer' target="_blank"><img src='https://www.gsuplementos.com.br/upload/menu/nova-home-banners-resultado/d00d1c1819e2d371be0f90a00788b0d5.webp' /></a>
                        <h3>EMAGRECIMENTO</h3>
                    </div>
                    <div className="cardHome">
                        <a href='https://vitat.com.br/definicao-muscular/' target="_blank"><img src='https://www.gsuplementos.com.br/upload/menu/nova-home-banners-resultado/cae135d47e8d4304e8a3c31197304ce4.webp' /></a>
                        <h3>DEFINIÇÃO</h3>
                    </div>
                </div>
                <div style={{
                    margin: '2rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div className='cardHomeDois'>
                        <a href='https://nav.dasa.com.br/blog/alimentacao-para-ansiedade-e-depressao' target="_blank"><img src='https://www.gsuplementos.com.br/upload/menu/nova-home-banners-resultado/882917366c2be27dcc83b7823ecd3cc9.webp' /></a>
                        <h3>SAÚDE MENTAL</h3>
                    </div>
                </div>
                <div style={{
                    margin: '2rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '60px'
                }}>
                    <Link to='/catalogo/suplementos'><div className="cardHome">
                        <img src='https://www.gsuplementos.com.br/upload/menu/menuPrincipalVue/f77261e0dec2514333ed6bf06dbb5010.svg' />
                        <h3>SUPLEMENTOS</h3>
                    </div></Link>
                    <Link to='/catalogo/roupas'><div className="cardHome">
                        <img src='https://www.gsuplementos.com.br/upload/menu/menuPrincipalVue/7d78496b972d0336dc2fc5bc51186b48.svg' />
                        <h3>ROUPAS</h3>
                    </div></Link>
                    <Link to='/catalogo/acessorios'><div className="cardHome">
                        <img src='https://www.gsuplementos.com.br/upload/menu/menuPrincipalVue/604da71722f10969329f318bf003a613.svg' />
                        <h3>ACESSÓRIOS</h3>
                    </div></Link>
                </div>
            </div>
        </>
    )
}

export default Home