import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/produto.css'
const Produto = ({ id, imgurl, nome, descricao, preco, categoria, estoque}) => {
    return (
        <>
            <div className="card" key={id}>
                <Link to='/item'><img style={{width: 200}} src={imgurl}/></Link>
                <p>{nome}</p>
                <p>{descricao}</p>
                <p>{preco.toFixed(2)}</p>
                <p>{categoria}</p>
                <p>{estoque}</p>
                {/* <div className="botoes">
                    <button className='botao' onClick={() => { onAdicionarCarrinhoClick(id) }}>Adicionar ao carrinho</button>
                    <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button> 
                </div> */}
            </div>
        </>
    )

}

export default Produto