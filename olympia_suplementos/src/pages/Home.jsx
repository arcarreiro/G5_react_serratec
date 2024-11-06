import '../css/home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {
    return (
        <>
            {/* Aqui pode ter um banner com link para as categorias e algumas ofertas em algum lugar se quisermos */}
            <div className="home">
                <img src="./banner.jpeg" alt="" style={{ width: '100%'}} />
            </div>
            <br />
            <div className="text">
                <h1>Aqui você encontra o qua existe de melhor para sua performance nos treinos</h1>
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
        </>
    )
}

export default Home