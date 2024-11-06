import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/produto.css'
const Produto = ({ id, imgurl, nome, descricao, preco, categoria, estoque, onAdicionarCarrinhoClick, onComprarClick}) => {
    return (
        <>
            <div className="card" key={id}>
                <Link to={`/item/${id}`}><img src={imgurl}/></Link>
                <h2>{nome}</h2>
                <p>{descricao.length > 120 ? descricao.slice(0, 120) + '...' : descricao}</p>
                <h2>R$ {preco.toFixed(2)}</h2>
                <p>{categoria}</p>
                <p>{estoque}</p>
                <div className="botoes">
                    <button className='botao' onClick={() => { onAdicionarCarrinhoClick(id) }}>Adicionar ao carrinho</button>
                    <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button>
                </div>
            </div>
        </>
    )

}

export default Produto